import "./trustedBy.scss";
import tb_facebook from "../../assets/tb_facebook.png";
import tb_google from "../../assets/tb_google.png";
import tb_netflix from "../../assets/tb_netflix.png";
import tb_png from "../../assets/tb_png.png";
import tb_paypal from "../../assets/tb_paypal.png";

const TrustedBy = () => {
  return (
    <div className="trustedBy">
      <div className="trustedByContainer">
        <span>Trusted by:</span>
        <img src={tb_facebook} alt="facebook_logo" />
        <img src={tb_google} alt="google_logo" />
        <img src={tb_netflix} alt="netflix_logo" />
        <img src={tb_png} alt="png_logo" />
        <img src={tb_paypal} alt="paypal_logo" />
      </div>
    </div>
  );
};

export default TrustedBy;
