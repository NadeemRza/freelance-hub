import "./gigs.scss";
import downImg from "../../assets/down.png";
import { useEffect, useRef, useState } from "react";
import GigCard from "../../components/gigCard/GigCard";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useLocation } from "react-router-dom";

const Gigs = () => {
  const [openSort, setOpenSort] = useState(false);
  const [sort, setSort] = useState("sales");
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  const { isPending, error, data, refetch } = useQuery({
    queryKey: ["gigs"],
    queryFn: () =>
      newRequest
        .get(
          `/gigs?${search.slice(1)}&min=${minRef.current.value}&max=${
            maxRef.current.value
          }&sort=${sort}`
        )
        .then((res) => res.data),
  });

  const reSort = (type) => {
    setSort(type);
    setOpenSort(false);
  };

  useEffect(() => {
    refetch();
  }, [sort]);

  const apply = () => {
    refetch();
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
              ref={minRef}
              type="number"
              name="min_price"
              id="min_price"
              placeholder="min"
            />
            <input
              ref={maxRef}
              type="number"
              name="max_price"
              id="max_price"
              placeholder="max"
            />
            <button onClick={apply}>Apply</button>
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
          {isPending
            ? "Loading"
            : error
            ? "Something went wrong!"
            : data?.map((gig) => <GigCard key={gig._id} item={gig} />)}
        </div>
      </div>
    </div>
  );
};

export default Gigs;
