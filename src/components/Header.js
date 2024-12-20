import React from "react";
import { Button, Container, Nav, Navbar, NavLink } from "react-bootstrap";

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">Sân Bóng Đá Hà Nội</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/" end href="trangchu">
                            {" "}
                            Trang Chủ
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="" end href="danhsachsan">
                            Danh Sách Sân{" "}
                        </Nav.Link>
                        <Nav.Link href="dieukhoan">Điều Khoản</Nav.Link>
                        <Nav.Link href="lienhe">Liên Hệ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button>Login</Button>
            </Container>
        </Navbar>
    );
}
