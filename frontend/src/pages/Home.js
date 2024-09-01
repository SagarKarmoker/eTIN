import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex items-center justify-center mt-48">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="max-w-2xl mx-auto sm:max-w-xl md:max-w-2xl">
          <div className="text-center">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
              <div>
                <p className="inline-block px-3 py-[0.6rem] mb-10 text-xs font-semibold tracking-wider text-white uppercase rounded-xl bg-blue-500">
                  Welcome to
                </p>
              </div>
              <h2 className="w-full mb-10 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block ">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="b039bae0-fdd5-4311-b198-8557b064fce0"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#b039bae0-fdd5-4311-b198-8557b064fce0)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative w-full">Taxpayer's </span>
                </span>{" "}
                Identification Number (TIN) Registration / Cancellation
              </h2>
              <form className="flex flex-col mb-10 items-center w-full md:flex-row md:px-16">
                <input
                  placeholder="To do in case of security certificate problem"
                  required=""
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline centered-placeholder"
                />
              </form>
              <p className="text-sm text-red-600">
                Any fraudulent use of this site is punishable under The Income
                Tax Act, 2023, Information and Communication Technology Act,
                2006 or any other law prevailing in Bangladesh.
              </p>
            </div>
            <Link
              href="/"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-gray-600 duration-300 transform border border-gray-400 rounded-full hover:text-deep-purple-accent-400 hover:border-deep-purple-accent-400 hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
