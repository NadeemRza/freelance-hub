import { Link } from "react-router-dom";
import "./messages.scss";

const Messages = () => {
  // const currentUser = {
  //   id: 1,
  //   username: "MD Raza",
  //   isSeller: true,
  // };

  const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
  maxime cum corporis esse aspernatur laborum dolorum? Animi
  molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
  nobis praesentium placeat.`;

  return (
    <div className="messages">
      <div className="messagesContainer">
        <div className="title">
          <h2>Orders</h2>
        </div>
        <table>
          <tr>
            <th>Buyer</th>
            <th>Last Message</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
          <tr className="active">
            <td>MD Raza</td>
            <td>
              <Link to="/message/123">{message.substring(0, 100)}...</Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr className="active">
            <td>MD Raza</td>
            <td>
              <Link to="/message/123">{message.substring(0, 100)}...</Link>
            </td>
            <td>1 day ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>MD Raza</td>
            <td>
              <Link to="/message/123">{message.substring(0, 100)}...</Link>
            </td>
            <td>2 days ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>MD Raza</td>
            <td>
              <Link to="/message/123">{message.substring(0, 100)}...</Link>
            </td>
            <td>3 days ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
          <tr>
            <td>MD Raza</td>
            <td>
              <Link to="/message/123">{message.substring(0, 100)}...</Link>
            </td>
            <td>3 days ago</td>
            <td>
              <button>Mark as Read</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Messages;
