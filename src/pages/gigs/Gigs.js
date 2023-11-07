import "./gigs.scss";
import downImg from "../../assets/down.png";
import { useState } from "react";
import GigCard from "../../components/gigCard/GigCard";
import { gigs } from "../../data";

const Gigs = () => {
  const [openSort, setOpenSort] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpenSort(false);
  };

  return (
    <div className="gigs">
      <div className="gigsContainer">
        <span className="breadcrumbs">
          {"FreelanceHub > GRAPHICS & DESIGN >"}
        </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with FreelanceHub's AI
          artists.
        </p>
        <div className="gigsMenu">
          <div className="menuLeft">
            <span>Budget</span>
            <input
              type="text"
              name="min_price"
              id="min_price"
              placeholder="min"
            />
            <input
              type="text"
              name="max_price"
              id="max_price"
              placeholder="max"
            />
            <button>Apply</button>
          </div>
          <div className="menuRight">
            <span className="gigsSortby">SortBy</span>
            <span className="gigsSorttype">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img
              onClick={() => setOpenSort(!openSort)}
              src={downImg}
              alt="down_arrow"
            />
            {openSort && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="gigCards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
