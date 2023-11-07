import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";
import { useState, useEffect } from "react";
import userImg from "../../assets/user.jpg";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "MD Raza",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="navContainer">
        <div className="navLogoContainer">
          <Link to="/">
            <span className="logo_text">FreelanceHub</span>
          </Link>
          <span className="logo_dot">.</span>
        </div>
        <div className="navLinks">
          <Link to="/" className="links">
            FreelanceHub Business
          </Link>
          <Link to="/" className="links">
            Explore
          </Link>
          <Link to="/" className="links">
            English
          </Link>
          {!currentUser?.isSeller && (
            <span className="links">Become a Seller</span>
          )}
          <Link to="/" className="links">
            Sign in
          </Link>
          {!currentUser && <button>Join</button>}
          {currentUser && (
            <div className="user" onClick={() => setOpenOptions(!openOptions)}>
              <img src={userImg} alt="profile_pic" />
              <span>{currentUser?.username}</span>
              {openOptions && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link to="/mygigs">Gigs</Link>
                      <Link to="/add">Add New Gig</Link>
                    </>
                  )}
                  <Link to="/orders">Orders</Link>
                  <Link to="/messages">Messages</Link>
                  <Link to="/">Logout</Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="navMenu">
            <Link className="menuLink" to="/">
              Graphics & Design
            </Link>
            <Link className="menuLink" to="/">
              Video & Animation
            </Link>
            <Link className="menuLink" to="/">
              Writing & Translation
            </Link>
            <Link className="menuLink" to="/">
              AI Services
            </Link>
            <Link className="menuLink" to="/">
              Digital Marketing
            </Link>
            <Link className="menuLink" to="/">
              Music & Audio
            </Link>
            <Link className="menuLink" to="/">
              Programming & Tech
            </Link>
            <Link className="menuLink" to="/">
              Business
            </Link>
            <Link className="menuLink" to="/">
              Lifestyle
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
};

export default Navbar;
