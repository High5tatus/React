import {Navbar, Container, Nav} from 'react-bootstrap';

const Navigation = () =>{
    return(
        <Navbar bg="dark" variant="dark">
            <Container>  {/*app.js의 Route path와 같은 주소값 연결*/}
                <Navbar.Brand href="/index">Home</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/list">Movies</Nav.Link>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/insert">추가</Nav.Link>
                    <Nav.Link href="/findAll">전체보기</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default Navigation;