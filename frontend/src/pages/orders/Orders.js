import "./orders.scss";
import messageImg from "../../assets/message.png";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const navigate = useNavigate();

  const { isPending, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      newRequest.get(`/orders/${currentUser._id}`).then((res) => res.data),
  });

  const handleContact = async (order) => {
    const sellerId = order.sellerId;
    const buyerId = order.buyerId;
    const conversationId = sellerId + buyerId;

    try {
      const orderRes = await newRequest.get(`/conversations/${conversationId}`);
      navigate(`/message/${orderRes.data.id}`);
    } catch (error) {
      if (error?.response?.status === 404) {
        const orderRes = await newRequest.post(`/conversations`, {
          to: currentUser.isSeller ? buyerId : sellerId,
        });
        navigate(`/message/${orderRes.data.id}`);
      }
    }
  };

  return (
    <div className="orders">
      {isPending ? (
        "Loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="ordersContainer">
          <div className="title">
            <h2>Orders</h2>
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Contact</th>
            </tr>
            {data?.map((order) => (
              <tr key={order._id}>
                <td>
                  <img className="orderImg" src={order.img} alt="order_image" />
                </td>
                <td>{order.title}</td>
                <td>{order.price}</td>
                <td>
                  <img
                    className="messageImg"
                    src={messageImg}
                    alt="message_image"
                    onClick={() => handleContact(order)}
                  />
                </td>
              </tr>
            ))}
          </table>
          {data?.length === 0 && (
            <h2 className="no_order_text">No Orders Yet...</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default Orders;
