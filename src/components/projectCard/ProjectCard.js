import { Link } from "react-router-dom";
import "./projectCard.scss";

const ProjectCard = ({ item }) => {
  return (
    <Link to="/">
      <div className="projectCard">
        <img src={item.img} alt="project_image" />
        <div className="projectInfo">
          <img src={item.pp} alt="user_image" />
          <div className="userInfo">
            <h2>{item.cat}</h2>
            <span>{item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
