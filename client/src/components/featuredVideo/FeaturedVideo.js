import "./featuredVideo.scss";
import featuredVideo from "../../assets/video.mp4";
import check_logo from "../../assets/check.png";

const FeaturedVideo = () => {
  return (
    <div className="featuredVideo">
      <div className="featuredVideoContainer">
        <div className="featuredVideoLeft">
          <h2>A whole world of freelance talent at your fingertips</h2>
          <div className="featuredVideoLogoContainer">
            <img src={check_logo} alt="check_logo" />
            The best for every budget
          </div>
          <p>
            For high-quality services at every price point. No horly rates, jsu
            project-based pricing.
          </p>
          <div className="featuredVideoLogoContainer">
            <img src={check_logo} alt="check_logo" />
            The best for every budget
          </div>
          <p>
            For high-quality services at every price point. No horly rates, jsu
            project-based pricing.
          </p>
          <div className="featuredVideoLogoContainer">
            <img src={check_logo} alt="check_logo" />
            The best for every budget
          </div>
          <p>
            For high-quality services at every price point. No horly rates, jsu
            project-based pricing.
          </p>
          <div className="featuredVideoLogoContainer">
            <img src={check_logo} alt="check_logo" />
            The best for every budget
          </div>
          <p>
            For high-quality services at every price point. No horly rates, jsu
            project-based pricing.
          </p>
          <div className="featuredVideoLogoContainer">
            <img src={check_logo} alt="check_logo" />
            The best for every budget
          </div>
          <p>
            For high-quality services at every price point. No horly rates, jsu
            project-based pricing.
          </p>
        </div>
        <div className="featuredVideoRight">
          <video src={featuredVideo} controls />
        </div>
      </div>
    </div>
  );
};

export default FeaturedVideo;
