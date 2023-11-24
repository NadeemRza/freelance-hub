import { Link } from "react-router-dom";
import "./categoryCard.scss";

const CategoryCard = ({ item }) => {
  return (
    <Link to="/gigs?cat=design">
      <div className="categoryCard">
        <img src={item.img} alt="slider_image" />
        <span className="desc">{item.desc}</span>
        <span className="title">
            {item.title}
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
