import { Navbar, Nav, NavDropdown, Form, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const ChawkNavbar = () => {
  return (
    <Navbar bg="white" expand="lg" className="shadow-sm py-3 px-4">
      <Navbar.Brand href="/">
        <strong style={{ fontFamily: 'Impact, sans-serif' , fontSize: '25px' }}>BrandHouse.</strong>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          {/* <NavDropdown title="Demos" id="demos-dropdown">
            <NavDropdown.Item href="#">Demo 1</NavDropdown.Item>
            <NavDropdown.Item href="#">Demo 2</NavDropdown.Item>
          </NavDropdown> */}

          <NavDropdown title="Men Wear" id="menwear-dropdown" className="poppins-font">
            <NavDropdown.Item href="#">Shirts</NavDropdown.Item>
            <NavDropdown.Item href="#">T-Shirts</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Sports Wear" id="womenwear-dropdown" className="poppins-font">
            <NavDropdown.Item href="#">Jersey</NavDropdown.Item>
            <NavDropdown.Item href="#">Pants</NavDropdown.Item>
          </NavDropdown>

          {/* <Nav.Link href="#">Search</Nav.Link>
          <Nav.Link href="#">Shops</Nav.Link> */}

          <NavDropdown title="Pages" id="pages-dropdown" className="poppins-font">
            <NavDropdown.Item href="#">About Us</NavDropdown.Item>
            <NavDropdown.Item href="#">Contact</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Nav className="ms-auto align-items-center d-flex">
          {/* <Form.Select size="sm" className="me-3" defaultValue="en">
            <option value="en">English - EN</option>
            <option value="fr">Français - FR</option>
          </Form.Select> */}
{/* 
          <Nav.Link href="#" className="me-2">
            <i className="bi bi-search"></i>
          </Nav.Link> */}
          
          <Nav.Link href="#" className="text-nowrap poppins-font"><i class="bi bi-bag-check-fill"></i> Order Online</Nav.Link>
          <Nav.Link href="#" className="text-nowrap poppins-font"><i class="bi bi-geo-alt-fill"></i> Store</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default ChawkNavbar;
