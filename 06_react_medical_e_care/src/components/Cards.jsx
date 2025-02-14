import { Col, Container, Row } from 'react-bootstrap';
import SingleCard from './SingleCard';
import img1 from '../assets/icon/covid.png';
import img2 from '../assets/icon/lungs.png';
import img3 from '../assets/icon/supplement.png';
import img4 from '../assets/icon/mental-health.png';

const Cards = () => {
  return (
    <section className='py-5'>
      <Container>
        <h2>our consulting specialists</h2>
        <Row lg={4} sm={2} xs={1} className='mt-5'>
          <Col>
            <SingleCard
              img={img1}
              title='covid-19 test'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.'
            />
          </Col>
          <Col>
            <SingleCard
              img={img2}
              title='heart lungs'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.'
            />
          </Col>
          <Col>
            <SingleCard
              img={img3}
              title='supplement'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.'
            />
          </Col>
          <Col>
            <SingleCard
              img={img4}
              title='mental health'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.'
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cards;
