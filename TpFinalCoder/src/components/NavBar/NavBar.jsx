
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'


function NavBar() {
  return (
  //control + espacio ver lista props.
  <Navbar bg='success'>
    <Container>
        <Nav>
          <NavLink to={"/"}>LOGITECH</NavLink>
          
        </Nav>
        <Nav>
          <NavLink to={"/categoria/Mouses"}>Mouses </NavLink>
          <NavLink to={"/categoria/Teclados"}>Teclados</NavLink>
          <NavLink to={"/categoria/Auriculares"}>Auricular  </NavLink>
          <CartWidget></CartWidget>
        </Nav>
        
    </Container>
  </Navbar>
    )
}

export default NavBar
