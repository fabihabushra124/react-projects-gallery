import { Col, Container, Row } from 'react-bootstrap';
import logoW from '../assets/logo-w.png';
import facebook from '../assets/icon/facebook.png';
import insta from '../assets/icon/insta.png';
import twitter from '../assets/icon/twitter.png';

const Footer = () => {
  return (
    <footer className='py-5' style={{ background: '#0360d9', color: 'white' }}>
      <Container>
        <Row>
          <Col lg className='px-lg-5 mb-lg-0 mb-4'>
            <img className='mb-4' src={logoW} width='73' alt='' />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
              feugiat lectus risus sed ullamcorper. Auctor semper fermentum
            </p>
            <p>
              volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed.
              Nibh est sit lobortis id semper.
            </p>
            <div>
              <a href='#' className='me-2'>
                <img src={facebook} alt='' />
              </a>
              <a href='#' className='me-2'>
                <img src={insta} alt='' />
              </a>
              <a href='#' className='me-2'>
                <img src={twitter} alt='' />
              </a>
            </div>
          </Col>
          <Col sm className='px-lg-5 mb-lg-0 mb-4'>
            <h5 className='mb-4'>useful links</h5>
            <ul>
              <li>
                <a href='#' className='text-capitalize'>
                  about us
                </a>
              </li>
              <li>
                <a href='#' className='text-capitalize'>
                  privacy policy
                </a>
              </li>
              <li>
                <a href='#' className='text-capitalize'>
                  our mission
                </a>
              </li>
              <li>
                <a href='#' className='text-capitalize'>
                  our team
                </a>
              </li>
            </ul>
          </Col>
          <Col className='ps-lg-5'>
            <h5 className='mb-4'>address</h5>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115681.29592731265!2d-77.47713270775661!3d25.0326996781907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x892f7c99b981dbc9%3A0x2aef01d3485e50d2!2sNassau%2C%20Bahamy!5e0!3m2!1spl!2spl!4v1624445118063!5m2!1spl!2spl'
              className='w-100'
              style={{ borderRadius: '10px' }}
              loading='lazy'
            ></iframe>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
