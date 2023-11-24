import "./gig.scss";
import starImg from "../../assets/star.png";
import Slider from "../../components/slider/Slider";
import clockImg from "../../assets/clock.png";
import recycleImg from "../../assets/recycle.png";
import checkImg from "../../assets/greencheck.png";
import { SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { Link, useParams } from "react-router-dom";
import userImg from "../../assets/user.jpg";
import Reviews from "../../components/reviews/Reviews";

const Gig = () => {
  const { id } = useParams();

  const { isPending, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () => newRequest.get(`/gigs/${id}`).then((res) => res.data),
  });

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  return (
    <div className="gig">
      {isPending ? (
        "Loading..."
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="gigContainer">
          <div className="gigLeft">
            <span className="breadcrumbs">
              {"FreelanceHub > GRAPHICS & DESIGN >"}
            </span>
            <h2>{data?.title}</h2>
            {isLoadingUser ? (
              "Loading..."
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="gigUserInfo">
                <img
                  className="userProfileImg"
                  src={dataUser?.img || userImg}
                  alt="user_image"
                />
                <span>{dataUser?.userName}</span>
                <div className="gigInfoRating">
                  {isNaN(data?.totalStars / data?.starNumber) ? (
                    <img src={starImg} alt="star_image" />
                  ) : data?.totalStars / data?.starNumber === Infinity ? (
                    <img src={starImg} alt="star_image" />
                  ) : (
                    Array(Math.round(data?.totalStars / data?.starNumber))
                      .fill()
                      .map((star, i) => (
                        <img src={starImg} alt="star_image" key={i} />
                      ))
                  )}
                  <span>
                    {isNaN(data?.totalStars / data?.starNumber)
                      ? "0"
                      : data?.totalStars / data?.starNumber === Infinity
                      ? "0"
                      : Math.round(data?.totalStars / data?.starNumber)}
                  </span>
                </div>
              </div>
            )}
            <Slider className="gigSlider" slidesToShow={1}>
              {data?.images?.map((img, i) => (
                <SwiperSlide key={i}>
                  <img src={img} alt="slider_image" />
                </SwiperSlide>
              ))}
            </Slider>
            <h3>About This Gig</h3>
            <p>{data?.desc}</p>
            {isLoadingUser ? (
              "Loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="sellerInfo">
                <h3>About The Seller</h3>
                <div className="sellerUser">
                  <img src={dataUser?.img || userImg} alt="user_image" />
                  <div className="info">
                    <span>{dataUser?.userName}</span>
                    <div className="gigInfoRating">
                      {isNaN(data?.totalStars / data?.starNumber) ? (
                        <img src={starImg} alt="star_image" />
                      ) : data?.totalStars / data?.starNumber === Infinity ? (
                        <img src={starImg} alt="star_image" />
                      ) : (
                        Array(Math.round(data?.totalStars / data?.starNumber))
                          .fill()
                          .map((star, i) => (
                            <img src={starImg} alt="star_image" key={i} />
                          ))
                      )}
                      <span>
                        {isNaN(data?.totalStars / data?.starNumber)
                          ? "0"
                          : data?.totalStars / data?.starNumber === Infinity
                          ? "0"
                          : Math.round(data?.totalStars / data?.starNumber)}
                      </span>
                    </div>
                    <button>Contact Me</button>
                  </div>
                </div>
                <div className="infoBox">
                  <div className="infoItems">
                    <div className="infoItem">
                      <span className="infoTitle">From</span>
                      <span className="infoDesc">{dataUser?.country}</span>
                    </div>
                    <div className="infoItem">
                      <span className="infoTitle">Member since</span>
                      <span className="infoDesc">Aug 2019</span>
                    </div>
                    <div className="infoItem">
                      <span className="infoTitle">Avg. response time</span>
                      <span className="infoDesc">4 hours</span>
                    </div>
                    <div className="infoItem">
                      <span className="infoTitle">Last delivery</span>
                      <span className="infoDesc">1 day</span>
                    </div>
                    <div className="infoItem">
                      <span className="infoTitle">Languages</span>
                      <span className="infoDesc">English</span>
                    </div>
                  </div>
                  <hr />
                  <p>{dataUser?.desc}</p>
                </div>
              </div>
            )}
            <Reviews gigId={id} />
          </div>
          <div className="gigRight">
            <div className="gigPrice">
              <h4>{data?.shortTitle}</h4>
              <h3>Rs. {data?.price}</h3>
            </div>
            <p>{data?.shortDesc}</p>
            <div className="gigDetails">
              <div className="detailItem">
                <img src={clockImg} alt="clock_image" />
                <span>{data?.deliveryTime} Days Delivery</span>
              </div>
              <div className="detailItem">
                <img src={recycleImg} alt="recycle_image" />
                <span>{data?.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="gigFeatures">
              {data?.features?.map((feature, i) => (
                <div className="featureItem" key={i}>
                  <img src={checkImg} alt="check_image" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link className="continue_button" to={`/pay/${id}`}>
              Continue
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gig;
