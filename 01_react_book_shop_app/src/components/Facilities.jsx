import { FaShuttleVan } from 'react-icons/fa';
import { IoIosLock } from 'react-icons/io';
import { IoReloadCircle } from 'react-icons/io5';
import { RiCustomerService2Fill } from 'react-icons/ri';

const Facilities = () => {
  const facilityList = [
    { title: 'free delivery', info: 'over order $100', icon: FaShuttleVan },
    { title: 'payment security', info: '100% secure payment', icon: IoIosLock },
    { title: 'easy return', info: '7 days to return', icon: IoReloadCircle },
    {
      title: '24/7 support',
      info: 'call us anytime',
      icon: RiCustomerService2Fill,
    },
  ];
  return (
    <section className='py-16 b-line'>
      <div className='container m-auto grid grid-cols-1 lg:grid-cols-4  md:grid-cols-2 gap-3'>
        {facilityList.map((list) => (
          <div
            key={list.title}
            className='flex justify-center bg-gray-700 m-auto py-6 rounded-lg w-72'
          >
            <list.icon className='text-purple-500 text-6xl mr-3' />
            <div className='text-white'>
              <h2 className='font-semibold text-xl capitalize'>{list.title}</h2>
              <p className='text-gray-400 capitalize'>{list.info}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Facilities;
