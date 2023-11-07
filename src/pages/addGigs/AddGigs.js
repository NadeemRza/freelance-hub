import "./addGigs.scss";

const AddGigs = () => {
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
            />
            <label htmlFor="category_select">Category</label>
            <select name="category_select" id="category_select">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="cover_image">Cover Image</label>
            <input type="file" name="cover_image" id="cover_image" />
            <label htmlFor="gig_images">Upload Images</label>
            <input type="file" name="gig_images" id="gig_images" multiple />
            <label htmlFor="gig_description">Description</label>
            <textarea
              name="gig_description"
              id="gig_description"
              cols="30"
              rows="16"
              placeholder="Brief descriptions to introduce your service to customers"
            ></textarea>
            <button>Create</button>
          </div>
          <div className="addRight">
            <label htmlFor="service_title">Service Title</label>
            <input
              type="text"
              name="service_title"
              id="service_title"
              placeholder="ex. One-page web design"
            />
            <label htmlFor="short_desc">Short Description</label>
            <textarea
              name="short_desc"
              id="short_desc"
              cols="30"
              rows="10"
              placeholder="Short description of your service"
            ></textarea>
            <label htmlFor="del_time">Delivery Time(ex. 3 days)</label>
            <input type="number" name="del_time" id="del_time" min={1} />
            <label htmlFor="rev_num">Revision Number</label>
            <input type="number" name="rev_num" id="rev_num" min={1} />
            <label htmlFor="features1">Add Features</label>
            <input
              type="text"
              name="features1"
              id="features1"
              placeholder='placeholder="ex. page design"'
            />
            <input
              type="text"
              name="features2"
              id="features2"
              placeholder='placeholder="ex. file uploading"'
            />
            <input
              type="text"
              name="features"
              id="features3"
              placeholder='placeholder="ex. setting up a domain"'
            />
            <input
              type="text"
              name="features4"
              id="features4"
              placeholder='placeholder="ex. hosting"'
            />
            <label htmlFor="price">Price</label>
            <input type="number" name="price" id="price" min={1} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGigs;
