/* eslint-disable react/prop-types */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import AddFavourites from './AddFavourites';

const MovieList = ({ movies, handleFavouritesList }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <section className=''>
        <div className='max-w-7xl mx-auto py-20'>
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            infinite={true}
            // autoPlay={true}
            autoPlaySpeed={5000} // Speed up autoplay for better flow
            keyBoardControl={true}
            customTransition='transform 0.5s ease-in-out'
            transitionDuration={500} // 500ms duration for a smooth transition
            // containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            dotListClass='custom-dot-list-style'
            // itemClass="carousel-item-padding-20-px"
            slidesToSlide={1}
            customLeftArrow={
              <ChevronLeftIcon className='absolute top-1/2 left-8 max-w-9 cursor-pointer text-primary-400 !z-10 text-white bg-[rgba(0,0,0,.5)] hover:bg-[rgba(0,0,0,.8)] transition-all duration-500 border-0 rounded-[35px]' />
            }
            customRightArrow={
              <ChevronRightIcon className='absolute top-1/2 right-8 max-w-9 cursor-pointer text-primary-400 !z-10 text-white bg-[rgba(0,0,0,.5)] hover:bg-[rgba(0,0,0,.8)] transition-all duration-500 border-0 rounded-[35px]' />
            }
          >
            {movies &&
              movies.map((movie, index) => (
                <div className='flex justify-center py-5' key={index}>
                  <div
                    key={index}
                    className='w-[75%] shrink-0 flex justify-center relative hover:cursor-pointer transition-transform hover:scale-110'
                  >
                    <img src={movie.Poster} alt={movie.Type} className='' />
                    <div
                      onClick={() => handleFavouritesList(movie)}
                      className={`absolute bg-gray-500 w-full transition-all duration-500 opacity-0 hover:opacity-100 bottom-0 text-lg p-2 text-center flex justify-center 
                      }`}
                    >
                      <AddFavourites />
                    </div>
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
