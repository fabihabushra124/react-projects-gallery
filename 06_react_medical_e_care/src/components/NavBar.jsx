import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
import { Button } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>
          <img src={logo} alt='' style={{ maxWidth: '100px' }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto mx-lg-auto text-capitalize'>
            <Nav.Link href='#home' className='active'>
              home
            </Nav.Link>
            <Nav.Link href='#about'>about</Nav.Link>
            <Nav.Link href='#application'>application</Nav.Link>
            <Nav.Link href='#history'>history</Nav.Link>
          </Nav>
          <Nav className='flex-row'>
            <Button variant='outline-primary' className='me-3'>
              log in
            </Button>
            <Button>sign up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
