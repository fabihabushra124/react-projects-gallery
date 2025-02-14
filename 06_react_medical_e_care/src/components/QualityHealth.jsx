import qualityHealth from '../assets/quality-health.jpg';
import arrow from '../assets/icon/arrow.png';
import { Col, Container, Row } from 'react-bootstrap';

const QualityHealth = () => {
  return (
    <section className='py-5'>
      <Container>
        <Row>
          <Col lg className='d-flex justify-content-center flex-column'>
            {' '}
            <h2 className='mb-4'>
              the future <br />
              of <span className='blue-text'>quality health</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
              feugiat lectus risus sed ullamcorper. Auctor semper fermentum
              volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed.
              Nibh est sit lobortis id semper.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
              feugiat lectus risus sed ullamcorper. Auctor semper fermentum
              volutpat integer vel. In rhoncus elementum nunc, malesuada mi sed.
              Nibh est sit lobortis id semper.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nec risus
              feugiat lectus risus sed ullamcorper. sed. Nibh est sit lobortis
              id semper.
            </p>
            <div style={{ color: '#0360d9', cursor: 'pointer' }}>
              <span>Learn More </span>
              <img src={arrow} alt='' />
            </div>
          </Col>
          <Col className='mt-lg-0 mt-5'>
            <img src={qualityHealth} className='side-img' alt='' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QualityHealth;
