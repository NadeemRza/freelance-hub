import { Link } from "react-router-dom";
import "./myGigs.scss";
import deleteImg from "../../assets/delete.png";

const MyGigs = () => {
  return (
    <div className="myGigs">
      <div className="myGigsContainer">
        <div className="title">
          <h2>Gigs</h2>
          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img
                className="gigImg"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="gig_image"
              />
            </td>
            <td>Gig1</td>
            <td>120</td>
            <td>100</td>
            <td>
              <img className="deleteImg" src={deleteImg} alt="delete_image" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="gigImg"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="gig_image"
              />
            </td>
            <td>Gig2</td>
            <td>120</td>
            <td>100</td>
            <td>
              <img className="deleteImg" src={deleteImg} alt="delete_image" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="gigImg"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="gig_image"
              />
            </td>
            <td>Gig3</td>
            <td>120</td>
            <td>100</td>
            <td>
              <img className="deleteImg" src={deleteImg} alt="delete_image" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="gigImg"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="gig_image"
              />
            </td>
            <td>Gig4</td>
            <td>120</td>
            <td>100</td>
            <td>
              <img className="deleteImg" src={deleteImg} alt="delete_image" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="gigImg"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="gig_image"
              />
            </td>
            <td>Gig5</td>
            <td>120</td>
            <td>100</td>
            <td>
              <img className="deleteImg" src={deleteImg} alt="delete_image" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default MyGigs;
