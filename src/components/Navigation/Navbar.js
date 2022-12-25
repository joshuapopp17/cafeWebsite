import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image'
import LogoBlack from './assets/logoBlack.png'

function NavigationBar() {
  return (
    <Navbar bg="transparent" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <Image style={{width: 150}} src={LogoBlack}></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
                {/* <Link to="/">Home</Link> */}
            </Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link>Team</Nav.Link>
            <Nav.Link>Socials</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;