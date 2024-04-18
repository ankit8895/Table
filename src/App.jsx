import React, { useState, useEffect } from 'react';
import { colleges } from './constant';

const App = () => {
  const [data, setData] = useState(colleges.slice(0, 10));
  const [sortConfig, setSortConfig] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Handling infinite scroll
  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMoreData();
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [data]);

  const loadMoreData = () => {
    if (data.length >= colleges.length) return;
    const moreData = colleges.slice(data.length, data.length + 10);
    setData([...data, ...moreData]);
  };

  // Sorting functionality
  const sortData = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    const sortedData = [...data].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });
    setData(sortedData);
    setSortConfig({ key, direction });
  };

  // Search functionality
  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  const filteredData = data.filter((college) =>
    college.collegeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='font-sans md:px-4'>
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
                        className='rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-teal-200 focus:border-teal-200'
                        type='text'
                        name='query'
                        id='query'
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                      />
                      <button
                        onClick={handleSearch}
                        type='submit'
                        className='absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-teal-600 sm:px-6 sm:text-base sm:font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
                      >
                        <svg
                          className='-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
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
      <div className='flex flex-row mt-8 items-center gap-2'>
        <div className='flex flex-row items-center'>
          <input type='checkbox' id='sort' className='hidden' />
          <label htmlFor='sort' className='font-bold text-sm md:text-base '>
            Sort By:{' '}
          </label>
        </div>
        <div
          className='flex flex-row gap-2 items-center'
          onClick={() => sortData('collegeName')}
        >
          <input
            type='checkbox'
            id='name'
            className='peer relative appearance-none w-4 h-4 border border-gray-600 rounded-full cursor-pointer checked:bg-orange-600'
          />
          <label htmlFor='name' className='text-xs md:text-base'>
            Name
          </label>
        </div>
        <div
          className='flex flex-row gap-2 items-center'
          onClick={() => sortData('ratingNumber')}
        >
          <input
            type='checkbox'
            id='rating'
            className='peer relative appearance-none w-4 h-4 border border-gray-600 rounded-full cursor-pointer checked:bg-orange-600'
          />
          <label htmlFor='rating' className='text-xs md:text-base'>
            Rating
          </label>
        </div>
        <div
          className='flex flex-row gap-2 items-center'
          onClick={() => sortData('feesAmount')}
        >
          <input
            type='checkbox'
            id='fees'
            className='peer relative appearance-none w-4 h-4 border border-gray-600 rounded-full cursor-pointer checked:bg-orange-600'
          />
          <label htmlFor='fees' className='text-xs md:text-base'>
            Fees
          </label>
        </div>
        <div
          className='flex flex-row gap-2 items-center'
          onClick={() => sortData('userReview')}
        >
          <input
            type='checkbox'
            id='userReview'
            className='peer relative appearance-none w-4 h-4 border border-gray-600 rounded-full cursor-pointer checked:bg-orange-600'
          />
          <label htmlFor='userReview' className='text-xs md:text-base'>
            User Review
          </label>
        </div>
      </div>
      <div className='mt-6 overflow-scroll'>
        <table className='min-w-[83rem] divide-y divide-gray-200 dark:divide-gray-700 border-2 border-gray-300'>
          <thead className='bg-[#88BDC4]'>
            <tr>
              <th className='px-6 py-3 text-start text-sm font-medium text-white capitalize border border-white'>
                CD Rank
              </th>
              <th className='px-6 py-3 text-start text-sm font-medium text-white capitalize border border-white'>
                Colleges
              </th>
              <th className='px-6 py-3 text-start text-sm font-medium text-white capitalize border border-white'>
                Course Fees
              </th>
              <th className='px-6 py-3 text-start text-sm font-medium text-white capitalize border border-white'>
                Placement
              </th>
              <th className='px-6 py-3 text-start text-sm font-medium text-white capitalize border border-white'>
                User Reviews
              </th>
              <th className='px-6 py-3 text-start text-xs font-medium text-white capitalize border border-white'>
                Ranking
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td className='border border-slate-300 align-top p-2'>
                  #{item.id}
                </td>
                <td className='border border-slate-300 p-2 max-w-96'>
                  <div className='flex flex-row items-center gap-2 mb-2'>
                    <img
                      src={item.icon}
                      alt={item.icon}
                      className='w-12 h-12'
                    />
                    <p className='text-lg text-[#88BDC4]'>
                      {item.college.name}
                    </p>
                  </div>
                  <div className='pl-14 text-xs mb-4'>
                    <p className='mb-1 text-slate-600'>
                      {item.college.address}
                    </p>
                    <div className='border-l-4 border-orange-600 px-1 py-1 bg-[#FFF9E4] max-w-max cursor-pointer'>
                      <p className='text-orange-600 align-middle'>
                        Btech {item.cutoff.branch}
                      </p>
                      <p>JEE-Advanced 2023 Cutoff: {item.cutoff.marks}</p>
                    </div>
                  </div>
                  <div className='flex flex-row justify-between items-center text-xs mb-2 px-2'>
                    <p className='text-orange-600 cursor-pointer'>
                      &#8594; Apply Now
                    </p>
                    <p className='text-green-600 cursor-pointer'>
                      Download Brochure
                    </p>
                    <p className='flex flex-row items-center cursor-pointer'>
                      <input
                        type='checkbox'
                        id={`check-${item.id}`}
                        className='mr-1 cursor-pointer'
                      />
                      <label
                        htmlFor={`check-${item.id}`}
                        className='cursor-pointer'
                      >
                        Add To Compare
                      </label>
                    </p>
                  </div>
                </td>
                <td className='p-2 border border-slate-300 text-left align-top'>
                  <a href='/' className='hover:underline'>
                    <p className='text-lg mb-1 text-green-600'>
                      &#8377; {item.fees.amount}
                    </p>
                    <p className='text-xs mb-1 text-slate-600'>
                      {item.fees.course}
                    </p>
                    <p className='text-xs mb-2 text-slate-600'>
                      {' '}
                      -1st Year Fees
                    </p>
                  </a>

                  <p className='text-xs text-orange-600'>
                    &#8651; Compare Fees
                  </p>
                </td>
                <td className='p-2 border border-slate-300 text-left align-top'>
                  <a href='/' className='hover:underline mb-2'>
                    <p className='text-base text-green-600'>
                      &#8377; {item.placement.avg}
                    </p>
                    <p className='text-xs text-slate-600'>Average Package</p>
                  </a>

                  <a href='/' className='hover:underline mb-2'>
                    <p className='text-base text-green-600'>
                      &#8377; {item.placement.highest}
                    </p>
                    <p className='text-xs text-slate-600'>Highest Package</p>
                  </a>

                  <p className='text-xs text-orange-600 mt-2'>
                    &#8651; Compare Placement
                  </p>
                </td>
                <td className='p-2 border border-slate-300 text-left align-top'>
                  <div className='hover:underline cursor-pointer'>
                    <div className='flex flex-row items-center justify-start gap-2 mb-2'>
                      <div className='w-2 h-2 rounded-full bg-orange-600'></div>
                      <p className='text-lg text-slate-600 decoration-0'>
                        {item.reviews.rating}/10
                      </p>
                    </div>
                    <p className='text-xs text-slate-600 mb-2 w-40'>
                      Based on {item.reviews.users} User Reviews
                    </p>
                  </div>
                  <p className='text-xs p-1 text-orange-600 bg-[#FFF9E4] max-w-max'>
                    &#10003; Best in Social Life
                  </p>
                </td>
                <td className='p-2 border border-slate-300 text-left align-top'>
                  <p className='text-lg mb-2 text-slate-600'>
                    #{item.ranking.rank} in India
                  </p>
                  <div className='flex flex-row gap-2 items-center'>
                    <img src='./week.jpg' alt='week' className='h-6 w-10' />
                    <p className='text-slate-600'>2021</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
