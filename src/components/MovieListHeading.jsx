/* eslint-disable react/prop-types */
import { FaSearch } from "react-icons/fa";

const MovieListHeading = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <section className="">
        <div className="max-w-7xl mx-auto pt-10 pb-3 flex justify-between">
          <div className="px-5">
            <h1>Movies</h1>
          </div>
          <div className="flex gap-x-2 items-center border border-gray-600 rounded-md px-5 bg-white">
            <FaSearch className="fill-gray-600" />
            <input
              type="text"
              placeholder="Type to search....."
              className="border-none outline-none text-gray-600 bg-white"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieListHeading;
