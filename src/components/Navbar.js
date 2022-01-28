import React,{ Component} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav,Container,Button,Form,FormControl } from 'react-bootstrap';

class NavBar extends Component
{
    render(){
        return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container fluid>
    <Navbar.Brand href="#">Logo</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link as={Link} to='/signup' >signup</Nav.Link>
        <Nav.Link as={Link} to='/login' >Login</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
       );

    }
}

export default NavBar;
