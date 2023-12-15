import "./addGigs.scss";
import { useReducer, useState } from "react";
import { INITIAL_STATE, gigReducer } from "../../reducers/gigReducer";
import upload from "../../utils/upload";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const AddGigs = () => {
  const [file, setFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleFeatures = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_FEATURE", payload: e.target[0].value });
    e.target.value = "";
  };

  const handleUploads = async () => {
    setUploading(true);
    try {
      const coverImg = await upload(file);

      let filesArray = Array.from(files);
      const images = await Promise.all(
        filesArray.map(async (fi) => {
          const url = await upload(fi);
          return url;
        })
      );

      dispatch({ type: "ADD_IMAGES", payload: [coverImg, images] });
      setUploading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    navigate("/mygigs");
  };

  return (
    <div className="addGigs">
      <div className="addGigsContainer">
        <h2>Add New Gig</h2>
        <div className="addSections">
          <div className="addLeft">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="ex. I will do something I'm really good at"
              onChange={handleChange}
            />
            <label htmlFor="category_select">Category</label>
            <select name="category" id="category" onClick={handleChange}>
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <div className="images">
              <div className="imagesInputs">
                <label htmlFor="coverImg">Cover Image</label>
                <input
                  type="file"
                  name="coverImg"
                  id="coverImg"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <label htmlFor="images">Upload Images</label>
                <input
                  type="file"
                  name="images"
                  id="images"
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button
                onClick={handleUploads}
                disabled={uploading ? true : false}
              >
                {uploading ? "Uploading.." : "Upload"}
              </button>
            </div>
            <label htmlFor="gig_description">Description</label>
            <textarea
              name="desc"
              id="desc"
              cols="30"
              rows="16"
              placeholder="Brief descriptions to introduce your service to customers"
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="addRight">
            <label htmlFor="shortTitle">Service Title</label>
            <input
              type="text"
              name="shortTitle"
              id="shortTitle"
              placeholder="ex. One-page web design"
              onChange={handleChange}
            />
            <label htmlFor="shortDesc">Short Description</label>
            <textarea
              name="shortDesc"
              id="shortDesc"
              cols="30"
              rows="10"
              placeholder="Short description of your service"
              onChange={handleChange}
            ></textarea>
            <label htmlFor="deliveryTime">Delivery Time(ex. 3 days)</label>
            <input
              type="number"
              name="deliveryTime"
              id="deliveryTime"
              min={1}
              onChange={handleChange}
            />
            <label htmlFor="revisionNumber">Revision Number</label>
            <input
              type="number"
              name="revisionNumber"
              id="revisionNumber"
              min={1}
              onChange={handleChange}
            />
            <label htmlFor="features">Add Features</label>
            <form className="add" action="" onSubmit={handleFeatures}>
              <input
                type="text"
                name="features"
                id="features"
                placeholder='placeholder="ex. page design"'
              />
              <button type="submit">Add</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map((feat) => (
                <div className="featureItem" key={feat}>
                  <button>
                    {feat}
                    <span
                      onClick={() =>
                        dispatch({ type: "REMOVE_FEATURE", payload: feat })
                      }
                    >
                      X
                    </span>
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              name="price"
              id="price"
              min={1}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="addButtonContainer">
          <button onClick={handleSubmit} disabled={uploading ? true : false}>
            {uploading ? "Please Wait..." : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddGigs;
