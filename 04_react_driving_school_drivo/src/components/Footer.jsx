import logoW from '../assets/img/logo-w.png';
import Button from './Button';

const Footer = () => {
  return (
    <footer className=''>
      <div className='py-16 bg-[#6485a6]'>
        <div className='container px-2 grid lg:grid-cols-4 md:grid-cols-2 gap-8 mx-auto'>
          <div className='text-white'>
            <h3>get in touch</h3>
            <img src={logoW} alt='' className='max-w-60 mb-3' />
            <div className='flex items-center mb-2'>
              <i className='fa-solid fa-location-dot'></i>
              <p>123 Street, New York, USA</p>
            </div>
            <div className='flex items-center mb-2'>
              <i className='fa-solid fa-phone'></i>
              <p>+012 345 67890</p>
            </div>
            <div className='flex items-center mb-2'>
              <i className='fa-solid fa-envelope'></i>
              <p>info@example.com</p>
            </div>
          </div>
          <div className='text-white'>
            <h3>quick links</h3>
            <ul>
              <li className='flex items-center'>
                <i className='fa-solid fa-angle-right'></i>
                <a href='#'>home</a>
              </li>
              <li className='flex items-center'>
                <i className='fa-solid fa-angle-right'></i>
                <a href='#'>about</a>
              </li>
              <li className='flex items-center'>
                <i className='fa-solid fa-angle-right'></i>
                <a href='#'>trending</a>
              </li>
              <li className='flex items-center'>
                <i className='fa-solid fa-angle-right'></i>
                <a href='#'>why us</a>
              </li>
              <li className='flex items-center'>
                <i className='fa-solid fa-angle-right'></i>
                <a href='#'>instructors</a>
              </li>
            </ul>
          </div>
          <div className='text-white'>
            <h3>popular links</h3>
            <ul>
              <li className='flex items-center'>
                <i className='fa-solid fa-angle-right'></i>
                <a href='#'>home</a>
              </li>
              <li className='flex items-center'>
                <i className='fa-solid fa-angle-right'></i>
                <a href='#'>about</a>
              </li>
              <li className='flex items-center'>
                <i className='fa-solid fa-angle-right'></i>
                <a href='#'>trending</a>
              </li>
              <li className='flex items-center'>
                <i className='fa-solid fa-angle-right'></i>
                <a href='#'>why us</a>
              </li>
              <li className='flex items-center'>
                <i className='fa-solid fa-angle-right'></i>
                <a href='#'>instructors</a>
              </li>
            </ul>
          </div>
          <div className='text-white'>
            <h3>newsletter</h3>
            <form className='flex items-center mb-3 w-full'>
              <input
                className='rounded-tr-none rounded-br-none w-[60%] placeholder:capitalize text-black'
                type='email'
                name='email'
                placeholder='your email'
              />
              <Button
                className='bg-slate-200 text-black hover:bg-white rounded-tl-none rounded-bl-none p-2'
                text='sign up'
              />
            </form>
            <h4 className='text-lg mb-1'>follow us</h4>
            <div className='flex'>
              <a
                href='#'
                className='text-2xl border-2 p-2 flex mr-3 rounded-md hover:bg-white hover:text-[#6485a6] transition duration-500 ease-in-out'
              >
                <i className='fa-brands fa-facebook-f mr-0'></i>
              </a>
              <a
                href='#'
                className='text-2xl border-2 p-2 flex mr-3 rounded-md hover:bg-white hover:text-[#6485a6] transition duration-500 ease-in-out'
              >
                <i className='fa-brands fa-x-twitter mr-0'></i>
              </a>
              <a
                href='#'
                className='text-2xl border-2 p-2 flex mr-3 rounded-md hover:bg-white hover:text-[#6485a6] transition duration-500 ease-in-out'
              >
                <i className='fa-brands fa-linkedin-in mr-0'></i>
              </a>
              <a
                href='#'
                className='text-2xl border-2 p-2 flex mr-3 rounded-md hover:bg-white hover:text-[#6485a6] transition duration-500 ease-in-out'
              >
                <i className='fa-brands fa-instagram mr-0'></i>
              </a>
              <a
                href='#'
                className='text-2xl border-2 p-2 flex mr-3 rounded-md hover:bg-white hover:text-[#6485a6] transition duration-500 ease-in-out'
              >
                <i className='fa-brands fa-youtube mr-0'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-black'>
        <div className='container mx-auto flex md:flex-row flex-col md:justify-between justify-center items-center px-2 py-8 text-white'>
          <p className='capitalize'>
            &#169;{' '}
            <a href='#' className='text-[#6485a6] hover:text-[#7fabd7]'>
              sight name
            </a>
            , all right reserved.
          </p>
          <p className='capitalize'>
            designed by{' '}
            <a href='#' className='text-[#6485a6] hover:text-[#7fabd7]'>
              fabiha bushra
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
