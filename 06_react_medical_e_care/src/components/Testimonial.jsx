import { Col, Container, Row } from 'react-bootstrap';
import person1 from '../assets/person-1.png';
import person2 from '../assets/person-2.png';
import person3 from '../assets/person-3.png';
import person4 from '../assets/person-4.png';
import person5 from '../assets/person-5.png';
import person6 from '../assets/person-6.png';
import star from '../assets/icon/star.png';

const persons = [person1, person2, person3, person4, person5, person6];
const Testimonial = () => {
  return (
    <section className='py-5' style={{ background: '#e1eeff' }}>
      <Container>
        <Row>
          <Col lg className='d-flex flex-column justify-content-center'>
            <h2 className='dark-blue-h'>
              what <span className='blue-text'>our member&apos;s</span> <br />
              sating about us
            </h2>
            <p className='my-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Sem velit viverra amet faucibus.
            </p>
            <div className='img-list'>
              {persons.map((person, inx) => (
                <img key={inx} src={person} alt='' />
              ))}
              <span className='reviews'>100+ reviews</span>
            </div>
          </Col>
          <Col className='mt-lg-0 mt-5'>
            <div className='bg-white p-md-5 p-4 testimonial-card'>
              <div className='d-flex justify-content-between align-items-center mb-5'>
                <div className='d-flex'>
                  <img
                    src={person4}
                    className='me-2'
                    width='52'
                    height='52'
                    alt=''
                  />
                  <div className='d-flex justify-content-center flex-column'>
                    <h6 className='mb-1'>jane cooper</h6>
                    <p className='mb-0' style={{ fontSize: '12px' }}>
                      12/12/24
                    </p>
                  </div>
                </div>
                <div>
                  {[...Array(5)].map(
                    (_, inx) =>
                      inx < 5 && (
                        <img
                          key={inx}
                          src={star}
                          width='25'
                          className='ms-1'
                          alt=''
                        />
                      )
                  )}
                </div>
              </div>
              <p className='mb-0'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                velit viverra amet faucibus. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sem velit viverra amet faucibus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem
                velit viverra amet faucibus.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonial;
