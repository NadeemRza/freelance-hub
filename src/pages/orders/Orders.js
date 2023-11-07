import "./orders.scss";
import messageImg from "../../assets/message.png";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "MD Raza",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="ordersContainer">
        <div className="title">
          <h2>Orders</h2>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser?.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
          </tr>
          <tr>
            <td>
              <img
                className="orderImg"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="order_image"
              />
            </td>
            <td>Gig1</td>
            <td>120</td>
            <td>MD Raza</td>
            <td>
              <img
                className="messageImg"
                src={messageImg}
                alt="message_image"
              />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="orderImg"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="order_image"
              />
            </td>
            <td>Gig2</td>
            <td>120</td>
            <td>MD Raza</td>
            <td>
              <img
                className="messageImg"
                src={messageImg}
                alt="message_image"
              />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="orderImg"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="order_image"
              />
            </td>
            <td>Gig3</td>
            <td>120</td>
            <td>MD Raza</td>
            <td>
              <img
                className="messageImg"
                src={messageImg}
                alt="message_image"
              />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="orderImg"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="order_image"
              />
            </td>
            <td>Gig4</td>
            <td>120</td>
            <td>MD Raza</td>
            <td>
              <img
                className="messageImg"
                src={messageImg}
                alt="message_image"
              />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="orderImg"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="order_image"
              />
            </td>
            <td>Gig5</td>
            <td>120</td>
            <td>MD Raza</td>
            <td>
              <img
                className="messageImg"
                src={messageImg}
                alt="message_image"
              />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
