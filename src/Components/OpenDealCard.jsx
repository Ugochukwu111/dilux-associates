import { Link } from "react-router-dom";
import { useState } from "react";
import { User, Eye, EyeClosed, ArrowRight } from "lucide-react";

import ListingCard from "./ListingCard";
import "./OpenDealCard.css";

export default function OpenDealCard() {
  const [openDealDetails, setOpenDealDetail] = useState(false);

  return (
    <div className={`open-deals-card ${openDealDetails ? "box" : ""}`}>
      <div
        className={`flex justify-between items-center  ${openDealDetails ? "" : "box"} short-description-container flex-wrap `}
      >
        {/* Left Side: Info Group */}
        <div className="flex items-center gap-1">
          {!openDealDetails && (
            <figure className="listing-thumbnail">
              <img src="" alt="" />
            </figure>
          )}

          <div className="text-details">
            <h4 className="property-name">Epe Prime Estate</h4>
            <p className=" property-price text-secondary">₦5,000,000</p>
          </div>

          <div className="flex items-center gap-1 ">
            &nbsp;|&nbsp;
            <span className="text-red ">
              <User size={20} />
            </span>
            <Link> Joseph Pascal</Link>
          </div>
        </div>

        {/* Right Side: Action Group */}
        <div className=" flex items-center gap-1 action-group">
          <button
            className="btn text-primary "
            aria-label={
              openDealDetails ? "Hide deal details" : "Show deal details"
            }
            onClick={() => setOpenDealDetail((prev) => !prev)}
          >
            {openDealDetails ? <EyeClosed size={15} /> : <Eye size={15} />}
          </button>
          <a
            href="https://wa.me/234..."
            target="_blank"
            className=" flex items-center gap-1 text-inverse follow-up-btn"
          >
            Follow Up
            <ArrowRight size={17} />
          </a>
        </div>
      </div>
      <div
        className={`long-description-container ${openDealDetails ? "open" : ""}`}
      >
        <ListingCard isOpenDeal={true} />
      </div>
    </div>
  );
}
