import { useState } from "react";
import "./register.scss";
import upload from "../../utils/upload";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    img: "",
    country: "",
    isSeller: false,
    desc: "",
  });

  const navigate = useNavigate();

  const [file, setFile] = useState(null);

  const [success, setSuccess] = useState("");

  const [buttonText, setButtonText] = useState("Register");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    setButtonText("Uploading...");
    e.preventDefault();
    const url = await upload(file);
    try {
      const res = await newRequest.post("/auth/register", {
        ...user,
        img: url,
      });
      if (res.status === 200) {
        setSuccess("User Added Successfully");
        setButtonText("Register");
        setIsSubmitting(false);
      }
      navigate("/");
    } catch (err) {
      setButtonText("Register");
      console.log(err);
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="register">
        <form onSubmit={handleSubmit}>
          <div className="left">
            <h1>Create a new account</h1>
            <label htmlFor="userName">Username</label>
            <input
              name="userName"
              id="userName"
              type="text"
              placeholder="mraza"
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="email"
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              onChange={handleChange}
            />
            <label htmlFor="file">Profile Picture (optional)</label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="country">Country</label>
            <input
              name="country"
              id="country"
              type="text"
              placeholder="India"
              onChange={handleChange}
            />
            <button type="submit" disabled={isSubmitting}>
              {buttonText}
            </button>
          </div>
          <div className="right">
            <h1>I want to become a seller</h1>
            <div className="toggle">
              <label htmlFor="seller_checkbox">
                Activate the seller account
              </label>
              <label className="switch">
                <input
                  type="checkbox"
                  name="seller_checkbox"
                  id="seller_checkbox"
                  onChange={handleSeller}
                />
                <span className="slider round"></span>
              </label>
            </div>
            <label htmlFor="phone">Phone Number</label>
            <input
              name="phone"
              id="phone"
              type="text"
              placeholder="+91 12345 67891"
              onChange={handleChange}
            />
            <label htmlFor="desc">Description (optional)</label>
            <textarea
              placeholder="A short description of yourself"
              name="desc"
              id="desc"
              cols="30"
              rows="10"
              onChange={handleChange}
            ></textarea>
          </div>
        </form>
      </div>
      {success && <p className="success_text">{success}</p>}
    </>
  );
};

export default Register;
