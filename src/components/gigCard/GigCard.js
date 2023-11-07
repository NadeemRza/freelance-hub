import { Link } from "react-router-dom";
import "./gigCard.scss";
import starImg from "../../assets/star.png";
import heartImg from "../../assets/heart.png";

const GigCard = ({ item }) => {
  return (
    <Link to="/gig/123">
      <div className="gigCard">
        <img src={item.img} alt="item_image" />
        <div className="gigInfo">
          <div className="gigUserInfo">
            <img src={item.pp} alt="profile_picture" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="gigRating">
            <img src={starImg} alt="star_image" />
            <span>{item.star}</span>
          </div>
        </div>
        <hr />
        <div className="gigDetails">
          <img src={heartImg} alt="heart_image" />
          <div className="gigPrice">
            <span>STARTING AT</span>
            <h2>Rs. {item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GigCard;
