import { Link } from "react-router-dom";
import "./gigCard.scss";
import starImg from "../../assets/star.png";
import heartImg from "../../assets/heart.png";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import userImg from "../../assets/user.jpg";

const GigCard = ({ item }) => {
  const { isPending, error, data } = useQuery({
    queryKey: [item.userId],
    queryFn: () =>
      newRequest.get(`/users/${item.userId}`).then((res) => res.data),
  });

  return (
    <Link to={`/gig/${item._id}`}>
      <div className="gigCard">
        <img src={item.coverImg} alt="item_image" />
        <div className="gigInfo">
          {isPending ? (
            "Loading..."
          ) : error ? (
            "Something went wrong!"
          ) : (
            <div className="gigUserInfo">
              <img src={data.img || userImg} alt="profile_picture" />
              <span>{data.userName}</span>
            </div>
          )}
          <p>{item.desc}</p>
          <div className="gigRating">
            {isNaN(item?.totalStars / item?.starNumber) ? (
              <img src={starImg} alt="star_image" />
            ) : item?.totalStars / item?.starNumber === Infinity ? (
              <img src={starImg} alt="star_image" />
            ) : (
              Array(Math.round(item?.totalStars / item?.starNumber))
                .fill()
                .map((star, i) => (
                  <img src={starImg} alt="star_image" key={i} />
                ))
            )}
            <span>
              {isNaN(item.totalStars / item.starNumber)
                ? "0"
                : item.totalStars / item.starNumber === Infinity
                ? "0"
                : Math.round(item.totalStars / item.starNumber)}
            </span>
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
