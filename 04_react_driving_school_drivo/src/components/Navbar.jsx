import { useEffect, useState } from 'react';
import logoB from '../assets/img/logo-b.png';
import logoW from '../assets/img/logo-w.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  // const [isActive, setIsActive] = useState('hero');
  const lists = [
    { name: 'home', to: 'hero' },
    { name: 'about', to: 'aboutUs' },
    { name: 'trending', to: 'trendingCourses' },
    { name: 'why us', to: 'whyChooseUs' },
    { name: 'instructors', to: 'instructors' },
    { name: 'testimonials', to: 'testimonials' },
  ];
  const toggle = () => {
    open ? setOpen(false) : setOpen(true);
  };
  // const activeToggle = (id) => {
  //   setIsActive(id);
  // };

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
      className={`fixed w-full z-50 ${
        scroll ? 'bg-white shadow-lg' : 'bg-slate-700 bg-opacity-50'
      } transition-all delay-150 duration-500 ease-in-out`}
    >
      <div className='relative'>
        <div className='container m-auto h-16 px-4 py-2 flex justify-between items-center transition'>
          <Link
            to='hero'
            spy={true}
            smooth={true}
            duration={500}
            className='cursor-pointer'
          >
            <img
              src={scroll ? logoB : logoW}
              className='h-8'
              alt='Drivo Logo'
            />
          </Link>

          {/* Desktop menu */}
          <ul className='md:flex hidden'>
            {lists.map((list) => (
              <li key={list.to} className='overflow-hidden me-2'>
                <Link
                  to={list.to}
                  spy={true}
                  smooth={true}
                  duration={500}
                  className={`nav-link cursor-pointer ${
                    scroll ? 'text-black' : 'text-white'
                  }`}
                >
                  {list.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Menu button */}
          <button
            onClick={toggle}
            type='button'
            className={`text-2xl rounded-lg md:hidden hover:text-[#6485a6] focus:outline-none ${
              scroll ? 'text-black' : 'text-white'
            } transition-all delay-100 duration-200 ease-in-out`}
          >
            {!open ? (
              <i className='fa-solid fa-bars'></i>
            ) : (
              <i className='fa-solid fa-xmark'></i>
            )}
          </button>

          {/* Mobile menu */}
          <div
            className={`absolute bg-white w-full h-[90vh] px-4 py-6 top-16 ${
              open ? 'right-0' : '-right-full'
            } transition-all delay-300 duration-500 ease-in-out`}
          >
            <ul className=''>
              {lists.map((list) => (
                <li key={list.to} className='overflow-hidden mb-3'>
                  <Link
                    onClick={() => setOpen(false)}
                    to={list.to}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className='nav-link cursor-pointer'
                  >
                    {list.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
