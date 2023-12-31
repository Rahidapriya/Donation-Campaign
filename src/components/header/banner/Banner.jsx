import { useState } from 'react';
import './banner.css';

const Banner = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setSearchTerm(newValue);

    onSearch(newValue);
  };

  return (
    <div
      className="relative h-28 md:h-52 lg:h-full xl:h-full 2xl:h-full"
      style={{
        backgroundImage: `url('https://i.ibb.co/k6FWn7S/Rectangle-4281.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-95 mix-blend-lighten"></div>

      <div className="mb-3 py-3 md:py-16 lg:py-52 flex flex-col gap-1 lg:gap-6 font-bold justify-center items-center relative z-10 mx-5 lg:mx-0">
        <h1 className="text-md md:text-3xl lg:text-4xl text-center md:mb-4">
          I Grow By Helping People In Need
        </h1>
        <div className="relative mb-4 flex w-8/12  lg:w-4/12 md:w-1/2 flex-wrap justify-center items-stretch">
          <input
            id="searchInput"
            onChange={handleInputChange}
            type="text"
            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto justify-center rounded-l border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search here"
            aria-label="Search"
            value={searchTerm}
            aria-describedby="button-addon1"
          />

          <button
            className="relative z-20 flex items-center rounded-r search px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
