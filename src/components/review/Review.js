import { useQuery } from "@tanstack/react-query";
import React from "react";
import newRequest from "../../utils/newRequest";
import "./review.scss";
import userImg from "../../assets/user.jpg";
import starImg from "../../assets/star.png";
import likeImg from "../../assets/like.png";
import dislikeImg from "../../assets/dislike.png";

const Review = ({ review }) => {
  const { isLoading, error, data } = useQuery({
    queryKey: [review.userId],
    queryFn: () =>
      newRequest.get(`/users/${review.userId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className="review">
      {isLoading ? (
        "Loading..."
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="user">
          <img className="pp" src={data.img || userImg} alt="user_image" />
          <div className="info">
            <span>{data?.userName}</span>
            <div className="country">
              <span>{data?.country}</span>
            </div>
          </div>
        </div>
      )}
      <div className="stars">
        {Array(review?.star)
          .fill()
          .map((item, i) => (
            <img src={starImg} alt="star_image" key={i} />
          ))}
        <span>{review?.star}</span>
      </div>
      <p>{review?.desc}</p>
      <div className="helpful">
        <span>Helpful?</span>
        <img src={likeImg} alt="like_image" />
        <span>Yes</span>
        <img src={dislikeImg} alt="dislike_image" />
        <span>No</span>
      </div>
    </div>
  );
};

export default Review;
