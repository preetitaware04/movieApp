/* eslint-disable react/prop-types */
import { FaHeart } from "react-icons/fa";
const AddFavourites = () => {
  return (
    <div className="flex gap-x-2">
      <span className="text-sm">Add to favourites </span>
      <FaHeart
        className={`fill-red-500 w-3 h-auto`}
      />
    </div>
  );
};

export default AddFavourites;
