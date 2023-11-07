import { Link } from "react-router-dom";
import "./footer.scss";
import twitterLogo from "../../assets/twitter.png";
import facebookLogo from "../../assets/facebook.png";
import linkedinLogo from "../../assets/linkedin.png";
import pinterestLogo from "../../assets/pinterest.png";
import instagramLogo from "../../assets/instagram.png";
import languageLogo from "../../assets/language.png";
import coinLogo from "../../assets/coin.png";
import accessbilityLogo from "../../assets/accessibility.png";

const Footer = ({ openModal, setOpenModal }) => {
  const handleLanguageChange = (e) => {
    if (e.target.value !== "English") {
      setOpenModal(true);
      return;
    }
    setOpenModal(false);
  };

  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="top">
          <div className="ftitems">
            <h2>Categories</h2>
            <Link to="/">Graphics & Design</Link>
            <Link to="/">Digital Marketing</Link>
            <Link to="/">Writing & Translation</Link>
            <Link to="/">Video & Animation</Link>
            <Link to="/">Music & Audio</Link>
            <Link to="/">Programming & Tech</Link>
            <Link to="/">Data</Link>
            <Link to="/">Business</Link>
            <Link to="/">Lifestyle</Link>
            <Link to="/">Photography</Link>
            <Link to="/">Sitemap</Link>
          </div>
          <div className="ftitems">
            <h2>Categories</h2>
            <Link to="/">Graphics & Design</Link>
            <Link to="/">Digital Marketing</Link>
            <Link to="/">Writing & Translation</Link>
            <Link to="/">Video & Animation</Link>
            <Link to="/">Music & Audio</Link>
            <Link to="/">Programming & Tech</Link>
            <Link to="/">Data</Link>
            <Link to="/">Business</Link>
            <Link to="/">Lifestyle</Link>
            <Link to="/">Photography</Link>
            <Link to="/">Sitemap</Link>
          </div>
          <div className="ftitems">
            <h2>Categories</h2>
            <Link to="/">Graphics & Design</Link>
            <Link to="/">Digital Marketing</Link>
            <Link to="/">Writing & Translation</Link>
            <Link to="/">Video & Animation</Link>
            <Link to="/">Music & Audio</Link>
            <Link to="/">Programming & Tech</Link>
            <Link to="/">Data</Link>
            <Link to="/">Business</Link>
            <Link to="/">Lifestyle</Link>
            <Link to="/">Photography</Link>
            <Link to="/">Sitemap</Link>
          </div>
          <div className="ftitems">
            <h2>Categories</h2>
            <Link to="/">Graphics & Design</Link>
            <Link to="/">Digital Marketing</Link>
            <Link to="/">Writing & Translation</Link>
            <Link to="/">Video & Animation</Link>
            <Link to="/">Music & Audio</Link>
            <Link to="/">Programming & Tech</Link>
            <Link to="/">Data</Link>
            <Link to="/">Business</Link>
            <Link to="/">Lifestyle</Link>
            <Link to="/">Photography</Link>
            <Link to="/">Sitemap</Link>
          </div>
          <div className="ftitems">
            <h2>Categories</h2>
            <Link to="/">Graphics & Design</Link>
            <Link to="/">Digital Marketing</Link>
            <Link to="/">Writing & Translation</Link>
            <Link to="/">Video & Animation</Link>
            <Link to="/">Music & Audio</Link>
            <Link to="/">Programming & Tech</Link>
            <Link to="/">Data</Link>
            <Link to="/">Business</Link>
            <Link to="/">Lifestyle</Link>
            <Link to="/">Photography</Link>
            <Link to="/">Sitemap</Link>
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>
              <Link to="/">FreelanceHub</Link>
            </h2>
            <span>© FreelanceHub International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="footer_social">
              <Link to="/">
                <img src={twitterLogo} alt="twitter_logo" />
              </Link>
              <Link to="/">
                <img src={facebookLogo} alt="facebook_logo" />
              </Link>
              <Link to="/">
                <img src={linkedinLogo} alt="linkedin_logo" />
              </Link>
              <Link to="/">
                <img src={pinterestLogo} alt="pinterest_logo" />
              </Link>
              <Link to="/">
                <img src={instagramLogo} alt="instagram_logo" />
              </Link>
            </div>
            <div className="link language_link">
              <img src={languageLogo} alt="language_logo" />
              <select onChange={handleLanguageChange}>
                <option value="">Select Language</option>
                <option value="English">
                  <span>English</span>
                </option>
                <option value="Hindi">
                  <span>Hindi</span>
                </option>
                <option value="German">
                  <span>German</span>
                </option>
                <option value="French">
                  <span>French</span>
                </option>
              </select>
            </div>
            <div className="link currency_link">
              <img src={coinLogo} alt="coin_logo" />
              <select>
                <option value="INR">
                  <span>INR</span>
                </option>
                <option value="USD">
                  <span>USD</span>
                </option>
                <option value="POUND">
                  <span>POUND</span>
                </option>
              </select>
            </div>
            <Link to="/">
              <img src={accessbilityLogo} alt="accessbility_logo" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
