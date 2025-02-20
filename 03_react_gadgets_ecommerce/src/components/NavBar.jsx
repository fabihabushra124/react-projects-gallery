import { MdMenu } from 'react-icons/md';
// import { IoMdSearch } from 'react-icons/io';
import { RxCross1 } from 'react-icons/rx';
import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Link as SmoothScroll } from 'react-scroll';
import logo from '../assets/logo.png';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const lists = [
    { name: 'home', to: 'hero' },
    { name: 'new arrivals', to: 'newArrivals' },
    { name: 'popular', to: 'popular' },
    { name: 'feedbacks', to: 'feedbacks' },
    { name: 'contact', to: 'contact' },
  ];
  const toggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 0 ? setScroll(true) : setScroll(false)
    );
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 768 && setOpen(false)
    );
  }, [open]);

  return (
    <nav
      className={`fixed w-full z-10 ${
        scroll ? 'bg-purple-200 shadow-md shadow-gray-50' : ''
      } transition-all delay-150 duration-500 ease-in-out`}
    >
      <div className='relative'>
        <div className='container m-auto h-16 px-4 py-2 flex justify-between items-center'>
          <a className='cursor-pointer'>
            <img src={logo} className='h-8' alt='Book Shop Logo' />
          </a>

          {/* Desktop menu */}
          <ul className='md:flex hidden'>
            {lists.map((list) => (
              <li key={list.name} className='overflow-hidden me-2'>
                <a className='nav-link cursor-pointer'>{list.name}</a>
              </li>
            ))}
          </ul>
          <div className='flex'>
            {/* Menu button */}
            <button
              onClick={toggle}
              type='button'
              className='text-2xl rounded-lg md:hidden hover:text-purple-500 focus:outline-none text-purple-300 transition-all delay-150 duration-500 ease-in-out'
            >
              {!open ? <MdMenu /> : <RxCross1 />}
            </button>
          </div>

          {/* Mobile menu */}
          <div
            className={`absolute bg-purple-200 w-full h-[90vh] px-4 py-6 top-16 ${
              open ? 'right-0' : '-right-full'
            } transition-all delay-300 duration-500 ease-in-out`}
          >
            <ul className=''>
              {lists.map((list) => (
                <li key={list.name} className='overflow-hidden mb-3'>
                  <a
                    onClick={() => setOpen(false)}
                    className='nav-link cursor-pointer'
                  >
                    {list.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
