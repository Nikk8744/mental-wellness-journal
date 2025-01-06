const Card = ({ title, desc }) => {
    return (
      <div className="flex justify-center p-4 sm:p-6 lg:p-8">
        <div className="relative w-full max-w-md sm:max-w-lg p-6 sm:p-8 border bg-white text-[#123524] border-[#3E7B27] shadow-xl rounded-xl">
          {/* Rating (commented out for now) */}
          {/* <span className="absolute right-4 top-4 rounded-full px-3 py-1.5 bg-green-100 text-green-600 font-medium text-xs">
            4.3
          </span> */}
          
          <div className="mt-4 text-[#123524] sm:pr-8">
            {/* Icon */}
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
              ></path>
            </svg>
  
            {/* Title */}
            <h5 className="mt-4 text-2xl sm:text-3xl font-bold font-mono text-[#123524]">{title}</h5>
  
            {/* Description */}
            <p className="mt-2 text-base sm:text-lg">{desc}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
  