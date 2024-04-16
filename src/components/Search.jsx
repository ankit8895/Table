import React from 'react';

const Search = () => {
  return (
    <section className='mt-6 lg:mt-12 font-sans'>
      <div className='bg-teal-500 text-white -skew-y-1'>
        <div className='container mx-auto skew-y-1'>
          <div className='flex flex-col items-center py-10 text-center lg:py-20'>
            <div className='w-full px-4 lg:w-1/2 lg:px-0'>
              <div className='mb-8'>
                <h2 className='text-3xl lg:text-4xl font-bold mb-3'>
                  Looking for a Colleges ?
                </h2>
                <p className='text-lg lg:text-xl opacity-80'>
                  Search the forum for the answer
                </p>
              </div>

              <div className='mb-10'>
                <div className='relative'>
                  <div>
                    <input
                      class='rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-teal-200 focus:border-teal-200'
                      type='text'
                      name='query'
                      id='query'
                    />
                    <button
                      type='submit'
                      class='absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-teal-600 sm:px-6 sm:text-base sm:font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
                    >
                      <svg
                        class='-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          stroke-linecap='round'
                          stroke-linejoin='round'
                          stroke-width='2'
                          d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                        ></path>
                      </svg>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search;
