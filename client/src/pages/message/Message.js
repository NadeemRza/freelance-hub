import { Link, useParams } from "react-router-dom";
import "./message.scss";
import newRequest from "../../utils/newRequest";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const Message = () => {
  const { id } = useParams();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["messages"],
    queryFn: () =>
      newRequest.get(`/messages/${id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (message) => {
      return newRequest.post(`/messages`, message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["messages"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      conversationId: id,
      desc: e.target[0].value,
    });
    e.target[0].value = "";
  };

  return (
    <div className="message">
      <div className="messageContainer">
        <span className="breadcrumbs">
          <Link to="/messages">MESSAGES</Link> {"> John Doe >"}
        </span>
        {isLoading ? (
          "Loading..."
        ) : error ? (
          "Something went wrong!"
        ) : (
          <div className="messageBlock">
            {data?.map((msg) => (
              <div
                className={
                  msg.userId === currentUser._id
                    ? "messageItem owner"
                    : "messageItem"
                }
                key={msg._id}
              >
                <img
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="user_image"
                />
                <p>{msg.desc}</p>
              </div>
            ))}
          </div>
        )}
        <hr />
        <form className="writeBlock" onSubmit={handleSubmit}>
          <textarea
            name="write_input"
            placeholder="write a message"
            id="write_input"
            cols="30"
            rows="10"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Message;
