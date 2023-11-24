import "./featuredImage.scss";
import featuredImage from "../../assets/fimage.webp";
import check_logo from "../../assets/check.png";

const FeaturedImage = () => {
  return (
    <div className="featuredImage">
      <div className="featuredImageContainer">
        <div className="featuredImageLeft">
          <h2>
            FreelanceHub <i>business</i>
          </h2>
          <h3>
            A business solution designed for <i>teams</i>
          </h3>
          <p>
            Upgrade to a curated experience packed with tools and benefits,
            dedicated to businesses
          </p>
          <div className="featuredImageLogoContainer">
            <img src={check_logo} alt="check_logo" />
            Connect to freelancers with proven business experience
          </div>
          <div className="featuredImageLogoContainer">
            <img src={check_logo} alt="check_logo" />
            Get matched with the perfect talent by a customer success manager
          </div>
          <div className="featuredImageLogoContainer">
            <img src={check_logo} alt="check_logo" />
            Manage teamwork and boost productivity with one powerful workspace
          </div>
          <button>Explore FreelanceHub Business</button>
        </div>
        <div className="featuredImageRight">
          <img src={featuredImage} alt="featured_image" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedImage;
