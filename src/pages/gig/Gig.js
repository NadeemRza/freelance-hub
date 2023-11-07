import "./gig.scss";
import starImg from "../../assets/star.png";
import Slider from "../../components/slider/Slider";
import likeImg from "../../assets/like.png";
import dislikeImg from "../../assets/dislike.png";
import clockImg from "../../assets/clock.png";
import recycleImg from "../../assets/recycle.png";
import checkImg from "../../assets/greencheck.png";
import { SwiperSlide } from "swiper/react";

const Gig = () => {
  return (
    <div className="gig">
      <div className="gigContainer">
        <div className="gigLeft">
          <span className="breadcrumbs">
            {"FreelanceHub > GRAPHICS & DESIGN >"}
          </span>
          <h2>I will create ai generated art for you</h2>
          <div className="gigUserInfo">
            <img
              className="userProfileImg"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="user_image"
            />
            <span>John Doe</span>
            <div className="gigInfoRating">
              <img src={starImg} alt="star_image" />
              <img src={starImg} alt="star_image" />
              <img src={starImg} alt="star_image" />
              <img src={starImg} alt="star_image" />
              <img src={starImg} alt="star_image" />
              <span>5</span>
            </div>
          </div>
          <Slider className="gigSlider" slidesToShow={1}>
            <SwiperSlide>
              <img
                src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="slider_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="slider_image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="slider_image"
              />
            </SwiperSlide>
          </Slider>
          <h3>About This Gig</h3>
          <p>
            I use an AI program to create images based on text prompts. This
            means I can help you to create a vision you have through a textual
            description of your scene without requiring any reference images.
            Some things I've found it often excels at are: Character portraits
            (E.g. a picture to go with your DnD character) Landscapes (E.g.
            wallpapers, illustrations to compliment a story) Logos (E.g. Esports
            team, business, profile picture) You can be as vague or as
            descriptive as you want. Being more vague will allow the AI to be
            more creative which can sometimes result in some amazing images. You
            can also be incredibly precise if you have a clear image of what you
            want in mind. All of the images I create are original and will be
            found nowhere else. If you have any questions you're more than
            welcome to send me a message.
          </p>
          <div className="sellerInfo">
            <h3>About The Seller</h3>
            <div className="sellerUser">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="user_image"
              />
              <div className="info">
                <span>John Doe</span>
                <div className="gigInfoRating">
                  <img src={starImg} alt="star_image" />
                  <img src={starImg} alt="star_image" />
                  <img src={starImg} alt="star_image" />
                  <img src={starImg} alt="star_image" />
                  <img src={starImg} alt="star_image" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="infoBox">
              <div className="infoItems">
                <div className="infoItem">
                  <span className="infoTitle">From</span>
                  <span className="infoDesc">INDIA</span>
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
              <p>
                My name is Anas, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
          <div className="sellerReviews">
            <h3>Reviews</h3>
            <div className="reviewItem">
              <div className="reviewUser">
                <img
                  className="reviewUserImg"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="user_image"
                />
                <div className="reviewUserInfo">
                  <span>Garner David</span>
                  <div className="userCountry">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="gigInfoRating">
                <img src={starImg} alt="star_image" />
                <img src={starImg} alt="star_image" />
                <img src={starImg} alt="star_image" />
                <img src={starImg} alt="star_image" />
                <img src={starImg} alt="star_image" />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="reviewHelpful">
                <span>Helpful?</span>
                <img src={likeImg} alt="like_image" />
                <span>Yes</span>
                <img src={dislikeImg} alt="dislike_image" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="reviewItem">
              <div className="reviewUser">
                <img
                  className="reviewUserImg"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="user_image"
                />
                <div className="reviewUserInfo">
                  <span>Garner David</span>
                  <div className="userCountry">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="gigInfoRating">
                <img src={starImg} alt="star_image" />
                <img src={starImg} alt="star_image" />
                <img src={starImg} alt="star_image" />
                <img src={starImg} alt="star_image" />
                <img src={starImg} alt="star_image" />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="reviewHelpful">
                <span>Helpful?</span>
                <img src={likeImg} alt="like_image" />
                <span>Yes</span>
                <img src={dislikeImg} alt="dislike_image" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="reviewItem">
              <div className="reviewUser">
                <img
                  className="reviewUserImg"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="user_image"
                />
                <div className="reviewUserInfo">
                  <span>Garner David</span>
                  <div className="userCountry">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="gigInfoRating">
                <img src={starImg} alt="star_image" />
                <img src={starImg} alt="star_image" />
                <img src={starImg} alt="star_image" />
                <img src={starImg} alt="star_image" />
                <img src={starImg} alt="star_image" />
                <span>5</span>
              </div>
              <p>
                I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon
              </p>
              <div className="reviewHelpful">
                <span>Helpful?</span>
                <img src={likeImg} alt="like_image" />
                <span>Yes</span>
                <img src={dislikeImg} alt="dislike_image" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="gigRight">
          <div className="gigPrice">
            <h4>1 AI generated image</h4>
            <h3>Rs. 499</h3>
          </div>
          <p>
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="gigDetails">
            <div className="detailItem">
              <img src={clockImg} alt="clock_image" />
              <span>2 Days Delivery</span>
            </div>
            <div className="detailItem">
              <img src={recycleImg} alt="recycle_image" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="gigFeatures">
            <div className="featureItem">
              <img src={checkImg} alt="check_image" />
              <span>Prompt writing</span>
            </div>
            <div className="featureItem">
              <img src={checkImg} alt="check_image" />
              <span>Artwork delivery</span>
            </div>
            <div className="featureItem">
              <img src={checkImg} alt="check_image" />
              <span>Image upscaling</span>
            </div>
            <div className="featureItem">
              <img src={checkImg} alt="check_image" />
              <span>Additional design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Gig;
