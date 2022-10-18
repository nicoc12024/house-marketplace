import { Link } from "react-router-dom";
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg";
import bedIcon from "../assets/svg/bedIcon.svg";
import bathtubIcon from "../assets/svg/bathtubIcon.svg";
import { formatMoney } from "../helpers/formatMoney";

function ListingItem({ listing, id, onDelete }) {
  const {
    name,
    imageUrls,
    location,
    discountedPrice,
    regularPrice,
    type,
    bedrooms,
    bathrooms,
    offer,
  } = listing;

  return (
    <li className="categoryListing">
      <Link to={`/category/${type}/${id}`} className="categoryListingLink">
        <img src={imageUrls[0]} alt={name} className="categoryListingImg" />
        <div className="categoryListingDetails">
          <p className="categoryListingLocation">{location}</p>
          <p className="categoryListingName">{name}</p>
          <p className="categoryListingPrice">
            {offer ? formatMoney(discountedPrice) : formatMoney(regularPrice)}
            {type === "rent" && " /Month"}
          </p>
          <div className="categoryListingInfoDiv">
            <img src={bedIcon} alt="bed" />
            <p className="categoryListingInfoText">
              {bedrooms > 1 ? `${bedrooms} Bedrooms` : "1 Bedroom"}
            </p>
            <img src={bathtubIcon} alt="bath" />
            <p className="categoryListingInfoText">
              {bathrooms > 1 ? `${bathrooms} Bathrooms` : "1 Bathroom"}
            </p>
          </div>
        </div>
      </Link>

      {onDelete && (
        <DeleteIcon
          className="removeIcon"
          fill="rgb(231,76,60)"
          onClick={() => onDelete(id, name)}
        />
      )}
    </li>
  );
}
export default ListingItem;
