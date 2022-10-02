import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
        <Navbar variant='dark'>
          <Container>
            <Navbar.Brand href="/">FILM LAYAR LEBAR</Navbar.Brand>
           <Nav>
            <Nav.Link href="#Trending">TRENDING</Nav.Link>
            <Nav.Link href="#Indonesia">INDONESIA</Nav.Link>
           </Nav>
           </Container>
        </Navbar>
        </div>
    )
}
export default NavigationBar