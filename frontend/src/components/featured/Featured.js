import "./featured.scss";
import searchImg from "../../assets/search.png";
import featuredImg from "../../assets/man.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Featured = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };

  return (
    <div className="featured">
      <div className="featuredContainer">
        <div className="featuredLeft">
          <h2>
            Find the perfect <i>freelance</i> services for your business
          </h2>
          <div className="featuredSearchbarContainer">
            <div className="featuredSearchbar">
              <img src={searchImg} alt="search_image" />
              <input
                type="text"
                placeholder='Try "building mobil app"'
                name=""
                id=""
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="featuredRight">
          <img src={featuredImg} alt="featured_image" />
        </div>
      </div>
    </div>
  );
};

export default Featured;
