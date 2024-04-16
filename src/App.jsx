import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import { colleges } from './constant';

const App = () => {
  const [data, setData] = useState(colleges.slice(0, 10));
  const [sortConfig, setSortConfig] = useState(null);
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
  // const filteredData = data.filter((college) =>
  //   college.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  return (
    <div className='font-sans'>
      <Search />
      <div className='mt-6 w-full border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900'>
        <table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
          <thead className='bg-teal-500'>
            <tr>
              <th className='px-6 py-3 text-start text-xs font-medium text-slate-900 uppercase'>
                CD Rank
              </th>
              <th className='px-6 py-3 text-start text-xs font-medium text-slate-900 uppercase'>
                Colleges
              </th>
              <th className='px-6 py-3 text-start text-xs font-medium text-slate-900 uppercase'>
                Course Fees
              </th>
              <th className='px-6 py-3 text-start text-xs font-medium text-slate-900 uppercase'>
                Placement
              </th>
              <th className='px-6 py-3 text-start text-xs font-medium text-slate-900 uppercase'>
                User Reviews
              </th>
              <th className='px-6 py-3 text-start text-xs font-medium text-slate-900 uppercase'>
                Ranking
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-slate-700 align-top'>#1</td>
              <td className='border border-slate-700'>
                <div></div>
                <div></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
