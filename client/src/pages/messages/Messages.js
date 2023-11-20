import { Link } from "react-router-dom";
import "./messages.scss";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import moment from "moment";

const Messages = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: ["conversations"],
    queryFn: () => newRequest.get(`/conversations`).then((res) => res.data),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.put(`/conversations/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["conversations"]);
    },
  });

  const handleRead = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="messages">
      {isPending ? (
        "Loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="messagesContainer">
          <div className="title">
            <h2>Orders</h2>
          </div>
          <table>
            <tr>
              <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
              <th>Last Message</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
            {data?.map((message) => (
              <tr
                className={
                  ((currentUser.isSeller && !message.readBySeller) ||
                    (!currentUser.isSeller && !message.readByBuyer)) &&
                  "active"
                }
                key={message.id}
              >
                <td>
                  {currentUser.isSeller ? message.buyerId : message.sellerId}
                </td>
                <td>
                  <Link to={`/message/${message.id}`}>
                    {message.lastMessage?.substring(0, 100)}...
                  </Link>
                </td>
                <td>{moment(message.updatedAt).fromNow()}</td>
                <td>
                  {((currentUser.isSeller && !message.readBySeller) ||
                    (!currentUser.isSeller && !message.readByBuyer)) && (
                    <button onClick={() => handleRead(message.id)}>
                      Mark as Read
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default Messages;
