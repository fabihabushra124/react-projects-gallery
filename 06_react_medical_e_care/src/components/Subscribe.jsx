import { Button, Container, Form } from 'react-bootstrap';
import arrow from '../assets/icon/arrow-w.png';

const Subscribe = () => {
  return (
    <section className='py-5'>
      <Container>
        <div
          className='p-md-5 p-4'
          style={{ background: '#0360d9', borderRadius: '20px' }}
        >
          <h2 className='subscribe-h'>subscribe to our newsletter</h2>
          <div className='bg-white p-2 rounded-pill'>
            <Form className='d-flex'>
              <Form.Control type='email' />
              <Button
                className='rounded-circle d-flex align-items-center p-2'
                style={{ background: '#0360d9' }}
              >
                <img src={arrow} width='12' height='12' alt='' />
              </Button>
            </Form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Subscribe;
