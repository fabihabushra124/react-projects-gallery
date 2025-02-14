import logo from '../assets/images/logo.png';
import menuBar from '../assets/icons/menu_bar.png';
import cart from '../assets/icons/cart.png';
import user from '../assets/icons/user.png';

const NabBar = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-lg bg-blue'>
        <div className='container justify-content-lg-center'>
          <a className='navbar-brand' href='#'>
            <img className='img-fluid logo' src={logo} alt='Logo' />
          </a>
          <button
            className='navbar-toggler shadow-none'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='menu-bar'>
              <img src={menuBar} alt='Menu Bar' />
            </span>
          </button>
          <div
            className='collapse navbar-collapse flex-lg-grow-0'
            id='navbarSupportedContent'
          >
            <ul className='navbar-nav me-auto mb-2 mb-lg-0 order-lg-2'>
              <li className='nav-item'>
                <a className='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='#'>
                  Contact Us
                </a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <img src={cart} alt='Icon' />
                </a>
              </li>
              <li className='nav-item'>
                <a href='#' className='nav-link'>
                  <img src={user} alt='Icon' />
                </a>
              </li>
            </ul>
            <form className='d-flex order-lg-1' role='search'>
              <input
                className='form-control me-2 shadow-none'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NabBar;
