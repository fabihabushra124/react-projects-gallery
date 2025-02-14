import { Col, Container, Row } from 'react-bootstrap';
import surgeryImg from '../assets/surgery.jpg';
import checkMark from '../assets/icon/check-mark.png';
import arrow from '../assets/icon/arrow.png';

const WhyChoose = () => {
  return (
    <section className='pb-5'>
      <Container>
        <Row>
          <Col lg>
            <img src={surgeryImg} className='side-img' alt='' />
          </Col>
          <Col className='d-flex  align-items-center justify-content-lg-end mt-lg-0 mt-5'>
            <div>
              <h2 className='mb-4'>why you choose us?</h2>
              <ul>
                <li className='d-flex align-items-center mb-2'>
                  <img src={checkMark} height='16px' alt='' />
                  <p className='mb-0 ms-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </li>
                <li className='d-flex align-items-center mb-2'>
                  <img src={checkMark} height='16px' alt='' />
                  <p className='mb-0 ms-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </li>
                <li className='d-flex align-items-center mb-2'>
                  <img src={checkMark} height='16px' alt='' />
                  <p className='mb-0 ms-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </li>
                <li className='d-flex align-items-center mb-2'>
                  <img src={checkMark} height='16px' alt='' />
                  <p className='mb-0 ms-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </li>
                <li className='d-flex align-items-center mb-2'>
                  <img src={checkMark} height='16px' alt='' />
                  <p className='mb-0 ms-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </li>
              </ul>
              <div style={{ color: '#0360d9', cursor: 'pointer' }}>
                <span>Learn More </span>
                <img src={arrow} alt='' />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChoose;
