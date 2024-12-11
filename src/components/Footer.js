import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <div>
                {" "}
                <Container fluid>
                    <Row>
                        {" "}
                        <Col md={6} sm={12} className="footer-left">
                            <div className="introduce-info">
                                <h5>Giới Thiệu:</h5>
                                <p>
                                    {" "}
                                    Đây là 1 trang web tôi muốn clone lại trong
                                    lúc tìm công việc Intern Web.
                                </p>
                            </div>
                        </Col>
                        <Col md={6} sm={12} className="footer-right">
                            <div className="contact-info">
                                <h5>Liên Hệ:</h5>
                                <p>
                                    <strong>Email:</strong> thinhkesat@gmail.com
                                </p>
                                <p>
                                    <strong>Facebook:</strong>
                                    <a
                                        href="https://www.facebook.com/Hi.imThinhh/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        https://www.facebook.com/Hi.imThinhh/
                                    </a>
                                </p>
                                <p>
                                    <strong>Phone:</strong> 0911541898
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <p>&copy; TruyenTranhAudio</p>
            </div>
        </footer>
    );
}

export default Footer;
