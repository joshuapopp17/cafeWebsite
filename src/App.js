import { BrowserRouter as Router, Routes, Route, Link   } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import Home from './screens/Home/Home';
import Locations from './screens/Locations/Locations';
import Shop from './screens/Shop/Shop';
import Contact from './screens/Contact/Contact';
import LogoBlack from './assets/LogoBlack.png';

function App() {
  return (
    <div>
    <Router>
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
              <Image style={{width: 55}} src={LogoBlack}></Image>
              <span style={{fontSize: 40, marginLeft: 10}}><b>Hellwach</b></span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to='/'><span style={{fontSize: 25}}>Home</span></Nav.Link>
              <Nav.Link as={Link} to='/shop'><span style={{fontSize: 25}}>Shop</span></Nav.Link>
              <Nav.Link as={Link} to='/locations'><span style={{fontSize: 25}}>Locations</span></Nav.Link>
              <Nav.Link as={Link} to='/contact'><span style={{fontSize: 25}}>Contact</span></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
