import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Icon } from "semantic-ui-react";
import HeaderCallBtn from "../Buttons/HeaderCallBtn";

const Header = () => {
  return (
    <div className="myHeader">
      {/* Nav from React Bootstrap */}
      <Navbar collapseOnSelect expand="md" bg="my-color" variant="light">
        <Container>
          <Link to="/" className="navbar-brand">
            Keith Brown, D.D.S.
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto myNavLinks">
              <Link className="nav-link" to="/about">About Us</Link>
              <Link className="nav-link" to="/financing">Financing</Link>
              <Link className="nav-link" to="/location">Location</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
              <Link className="nav-link" to="/faqs">FAQs</Link>
              <NavDropdown title="Services" id="collasible-nav-dropdown">
                <Link className="dropdown-item" to="/services">General Dentistry</Link>
                <Link className="dropdown-item" to="/services">Cosmetic Dentistry</Link>
                <Link className="dropdown-item" to="/services">Surgical Dentistry</Link>
              </NavDropdown>
            </Nav>
            {/* Buttons from Sematnic UI  */}
            <Nav>
              <Button as={Link} to="/appointment" className="myButton" animated id="apptBtn">
                <Button.Content visible>
                  <Icon name="calendar" /> Make an Appointment
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
              <HeaderCallBtn />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
