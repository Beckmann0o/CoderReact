
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'


function NavBar() {
  return (
  //control + espacio ver lista props.
  <Navbar bg='success'>
    <Container>
        <NavbarBrand>MiTienda</NavbarBrand>
        <Nav>
            <Nav.Link href="#home">Perfumes</Nav.Link>
            <Nav.Link href="#features">Cremas</Nav.Link>
            <Nav.Link href="#pricing">Jabones</Nav.Link>
            <Nav.Link>
                <CartWidget numItems={7}></CartWidget>
            </Nav.Link>
        </Nav>
        
    </Container>
  </Navbar>
    )
}

export default NavBar
