import { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import Button from './Button';
import { Link as SmoothScroll } from 'react-scroll';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [show, setShow] = useState(false);
  const handelShow = () => setShow(true);
  const handelClose = () => setShow(false);

  const menuList = [
    { text: 'home', link: 'home' },
    { text: 'How it works', link: 'itswork' },
    { text: 'Why choose us', link: 'whychoose' },
    { text: 'Popular rental deals', link: 'popular' },
    { text: 'Testimonials', link: 'testimonials' },
  ];

  useEffect(() => {
    window.addEventListener('scroll', () =>
      window.scrollY > 0 ? setScroll(true) : setScroll(false)
    );
  }, []);

  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg ${
        scroll ? 'scrolled' : ''
      }`}
    >
      <div className='container'>
        <a className='navbar-brand' href='#home'>
          <img src={logo} alt='Rent cars logo' className='logo' />
        </a>
        <button
          onClick={handelShow}
          className='navbar-toggler border-0 shadow-none'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasNavbar'
          aria-controls='offcanvasNavbar'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className={`offcanvas offcanvas-end ${show ? 'show' : ''}`}
          tabIndex='-1'
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
        >
          <div className='offcanvas-header'>
            <SmoothScroll
              to='hero'
              spy={true}
              smooth={true}
              duration={500}
              className='navbar-brand cursor-pointer'
            >
              <img src={logo} alt='Rent cars logo' className='logo' />
            </SmoothScroll>
            <button
              type='button'
              className='btn-close shadow-none'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            ></button>
          </div>
          <div className='offcanvas-body'>
            <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
              {menuList.map((list, inx) => (
                <li key={inx} className='nav-item me-lg-3'>
                  <SmoothScroll
                    onClick={handelClose}
                    to={list.link}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className='nav-link'
                  >
                    {list.text}
                  </SmoothScroll>
                </li>
              ))}
            </ul>
            <Button
              name={'sign in'}
              className={'d-block bg-none me-lg-3 mb-3 mb-lg-0'}
            />
            <Button name={'register'} className={'d-block mb-3 mb-lg-0'} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
