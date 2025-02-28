/* eslint-disable react/prop-types */
import { FaSearch } from 'react-icons/fa';

const SearchBox = ({ searchValue, setSearchValue,}) => {
  return (
    <div>
      <div className='flex gap-x-2 items-center border border-gray-600 rounded-md px-5 py-3 mx-5 bg-white'>
        <FaSearch className='fill-gray-600' />
        <input
          type='text'
          placeholder='Type to search.....'
          className='border-none outline-none text-gray-600 bg-white'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
