import { CiCircleRemove } from "react-icons/ci";

const RemoveFavourites = () => {
  return (
    <div className="flex gap-x-2">
          <span className="text-sm">Remove favourites </span>
          <CiCircleRemove
            className={`font-extrabold text-white w-5 h-auto`}
          />
        </div>
  )
}

export default RemoveFavourites