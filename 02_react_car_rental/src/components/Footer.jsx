import { Link } from 'react-scroll';
import whiteLogo from '../assets/images/white_logo.png';
import { CiLocationOn } from 'react-icons/ci';
import { IoCallOutline } from 'react-icons/io5';
import { BsEnvelope } from 'react-icons/bs';
import {
  RiFacebookBoxLine,
  RiInstagramLine,
  RiYoutubeLine,
} from 'react-icons/ri';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-7 d-sm-block d-flex justify-content-center mb-3">
            <div>
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                style={{ cursor: 'pointer' }}
              >
                <img src={whiteLogo} alt="" className="img-fluid mb-3" />
              </Link>
              <div className="d-flex align-items-center mb-3">
                <CiLocationOn className="fs-2 me-2" />
                <p className="m-0">
                  25566 Hc 1, Glenallen, <br />
                  Alaska, 99588, USA
                </p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <IoCallOutline className="fs-3 me-2" />
                <p className="m-0">+603 4784 273 12</p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <BsEnvelope className="fs-4 me-2" />
                <p className="m-0">rentcars@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-5 d-sm-block d-flex justify-content-center mb-3">
            <div>
              <h5>our product</h5>
              <ul>
                <li>
                  <a href="#">career</a>
                </li>
                <li>
                  <a href="#">car</a>
                </li>
                <li>
                  <a href="#">packages</a>
                </li>
                <li>
                  <a href="#">features</a>
                </li>
                <li>
                  <a href="#">priceline</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4 d-sm-block d-flex justify-content-center mb-3">
            <div>
              <h5>resources</h5>
              <ul>
                <li>
                  <a href="#">download</a>
                </li>
                <li>
                  <a href="#">help centre</a>
                </li>
                <li>
                  <a href="#">guides</a>
                </li>
                <li>
                  <a href="#">partner network</a>
                </li>
                <li>
                  <a href="#">cruises</a>
                </li>
                <li>
                  <a href="#">developer</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4 d-sm-block d-flex justify-content-center mb-3">
            <div>
              <h5>about rentCar</h5>
              <ul>
                <li>
                  <a href="#">why choose us</a>
                </li>
                <li>
                  <a href="#">our story</a>
                </li>
                <li>
                  <a href="#">investor relations</a>
                </li>
                <li>
                  <a href="#">press center</a>
                </li>
                <li>
                  <a href="#">advertise</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-4 d-sm-block d-flex justify-content-center mb-3">
            <div>
              <h5>follow us</h5>
              <div className="d-flex">
                <RiFacebookBoxLine className="social-icon" />
                <RiInstagramLine className="social-icon" />
                <RiYoutubeLine className="social-icon" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-capitalize mt-5" style={{ fontSize: '12px' }}>
          copyright 2023 ・ RentCars, all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
