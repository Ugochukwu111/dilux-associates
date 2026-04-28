import { ArrowUpFromLine, Trash2, Pencil, MapPin } from "lucide-react";
import ListingCard  from '../../Components/ListingCard'

const businessName = import.meta.env.VITE_BUSINESS_NAME;

import "./AdminUploadListing.css";

export default function AdminUploadListing() {
  return (
    <div className="container  flex-1">
      <div className="flex justify-between items-center">
        <h2>{businessName} listings</h2>
        <button className="btn bg-secondary  text-inverse">
          Upload listings <ArrowUpFromLine size={15} />
        </button>
      </div>
      <br />
      <div className="card-container bg-muted ">
        <ListingCard/>
        <ListingCard/>
      </div>
    </div>
  );
}
