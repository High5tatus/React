import {Navbar, Container, Nav} from 'react-bootstrap';

const Navigation = () =>{
    return(
        <Navbar bg="dark" variant="dark">
            <Container>  {/*app.js의 Route path와 같은 주소값 연결*/}
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/insert">추가</Nav.Link>
                    <Nav.Link href="/findAll">보기</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Navigation;