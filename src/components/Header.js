import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

export default function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="/">TruyenTranhAudio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home">Trang Chủ</Nav.Link>
                        <Nav.Link href="categories">Thể Loại</Nav.Link>
                        <Nav.Link href="history">Lịch Sử</Nav.Link>
                        <Nav.Link href="hot">Truyện Mới</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Button>Login</Button>
            </Container>
        </Navbar>
    );
}
