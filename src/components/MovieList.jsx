import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      Title: "Star Wars: Episode IV - A New Hope",
      Year: "1977",
      imdbID: "tt0076759",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode V - The Empire Strikes Back",
      Year: "1980",
      imdbID: "tt0080684",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTkxNGFlNDktZmJkNC00MDdhLTg0MTEtZjZiYWI3MGE5NWIwXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode VI - Return of the Jedi",
      Year: "1983",
      imdbID: "tt0086190",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNWEwOTI0MmUtMGNmNy00ODViLTlkZDQtZTg1YmQ3MDgyNTUzXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode VII - The Force Awakens",
      Year: "2015",
      imdbID: "tt2488496",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode I - The Phantom Menace",
      Year: "1999",
      imdbID: "tt0120915",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODVhNGIxOGItYWNlMi00YTA0LWI3NTctZmQxZGUwZDEyZWI4XkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode III - Revenge of the Sith",
      Year: "2005",
      imdbID: "tt0121766",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode II - Attack of the Clones",
      Year: "2002",
      imdbID: "tt0121765",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTgxMjY2YzUtZmVmNC00YjAwLWJlODMtNDBhNzllNzIzMjgxXkEyXkFqcGc@._V1_SX300.jpg",
    },
    {
      Title: "Rogue One: A Star Wars Story",
      Year: "2016",
      imdbID: "tt3748528",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode VIII - The Last Jedi",
      Year: "2017",
      imdbID: "tt2527336",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode IX - The Rise of Skywalker",
      Year: "2019",
      imdbID: "tt2527338",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODg5ZTNmMTUtYThlNy00NjljLWE0MGUtYmQ1NDg4NWU5MjQ1XkEyXkFqcGc@._V1_SX300.jpg",
    },
  ]);
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
    {/* fhgfhgfj */}
      <section className="">
        <div className="max-w-7xl mx-auto py-20">
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000} // Speed up autoplay for better flow
            keyBoardControl={true}
            customTransition="transform 0.5s ease-in-out"
            transitionDuration={500} // 500ms duration for a smooth transition
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            slidesToSlide={1}
            customLeftArrow={
              <ChevronLeftIcon className="absolute top-1/2 left-8 max-w-9 cursor-pointer text-primary-400 !z-10 text-white bg-[rgba(0,0,0,.5)] hover:bg-[rgba(0,0,0,.8)] transition-all duration-500 border-0 rounded-[35px]" />
            }
            customRightArrow={
              <ChevronRightIcon className="absolute top-1/2 right-8 max-w-9 cursor-pointer text-primary-400 !z-10 text-white bg-[rgba(0,0,0,.5)] hover:bg-[rgba(0,0,0,.8)] transition-all duration-500 border-0 rounded-[35px]" />
            }
          >
            {movies &&
              movies.map((movie, index) => (
                <div className="flex justify-center py-5" key={index}>
                  <div
                    key={index}
                    className="w-[75%] shrink-0 flex justify-center"
                  >
                    <div></div>
                    <img src={movie.Poster} alt={movie.Type} />
                  </div>
                </div>
              ))}
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default MovieList;
