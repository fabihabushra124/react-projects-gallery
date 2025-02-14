import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap';
import doctors from '../assets/hero-doctors-image.png';
import curveLine from '../assets/h1-curve-line.png';
import user from '../assets/icon/user.png';
import location from '../assets/icon/location.png';
import search from '../assets/icon/search.png';
import downArrow from '../assets/icon/down-arrow.png';
import { useEffect, useState } from 'react';

let timer;
const Hero = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    clearInterval(timer);
    timer = setInterval(() => {
      if (counter === 100) {
        clearInterval(timer);
        return;
      }
      setCounter((prev) => prev + 1);
    }, 50);

    return () => clearInterval(timer);
  }, [counter]);

  return (
    <section className='hero position-relative'>
      <Container>
        <Row>
          <Col
            lg
            className='d-flex flex-column justify-content-center mt-md-0 mt-4 mb-md-5'
          >
            <div className='position-relative'>
              <h1 className='dark-blue-h'>
                find and search your
                <br />
                <span className='blue-text '>favorite</span> doctor
              </h1>
              <img src={curveLine} className='curve-line' alt='' />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Sem velit viverra amet faucibus.
            </p>
            <div
              className='my-3 d-flex bg-white p-1 justify-content-between align-items-center shadow'
              style={{ borderRadius: '50px' }}
            >
              <Dropdown className='ps-3'>
                <Dropdown.Toggle
                  className='bg-transparent border-0 text-black d-flex align-items-center p-0'
                  id='dropdown-basic'
                >
                  <img src={user} alt='' className='me-1' /> Doctors{' '}
                  <img src={downArrow} alt='' className='ms-1 mt-1' />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href='#'>Dr. Jhon Doe</Dropdown.Item>
                  <Dropdown.Item href='#'>Dr. Jhon Doe</Dropdown.Item>
                  <Dropdown.Item href='#'>Dr. Jhon Doe</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Toggle
                  className='bg-transparent border-0 text-black d-flex align-items-center p-0'
                  id='dropdown-basic'
                >
                  <img src={location} alt='' className='me-1' />
                  Location <img src={downArrow} alt='' className='ms-1 mt-1' />
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href='#'>New York</Dropdown.Item>
                  <Dropdown.Item href='#'>New York</Dropdown.Item>
                  <Dropdown.Item href='#'>New York</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button
                className='rounded-circle d-flex p-2'
                style={{ background: '#0360d9' }}
              >
                <img src={search} alt='' />
              </Button>
            </div>
          </Col>
          <Col className='d-flex'>
            <img src={doctors} className='hero-img img-fluid' alt='' />
            <div className='half-circle'></div>
          </Col>
        </Row>
      </Container>
      <div className='counter-box'>
        <Container className='d-flex text-white justify-content-lg-start justify-content-center'>
          <div className='pe-lg-3 my-lg-3 pe-2 my-1 border-end border-white text-center'>
            <h4>24/7</h4>
            <p>Online support</p>
          </div>
          <div className='px-lg-3 my-lg-3 px-2 my-1  border-end border-white text-center'>
            <h4>{counter}+</h4>
            <p>doctors</p>
          </div>
          <div className='px-lg-3 px-2 my-lg-3 my-1 text-center'>
            <h4>1M+</h4>
            <p>active patients</p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Hero;
