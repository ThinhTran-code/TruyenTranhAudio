import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function ForgotPassword() {
    return (
        <div>
            <Container
                style={{
                    height: "100vh",
                    backgroundColor: "#333333",
                    maxWidth: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    className="d-flex justify-content-center"
                    style={{
                        maxWidth: "500px",
                        backgroundColor: "#222222",
                        borderRadius: "8px",
                        padding: "20px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        width: "100%",
                    }}
                >
                    <Row className="justify-content-center">
                        <Col md={12}>
                            <div className="text-center mb-4">
                                <h2 style={{ color: "white" }}>
                                    Forgot Your Password?
                                </h2>
                                <p className="text-muted">
                                    Enter your email address to receive a link
                                    to reset your password.
                                </p>
                            </div>

                            <Form>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label style={{ color: "white" }}>
                                        Enter your email address
                                    </Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        className="input-field"
                                    />
                                </Form.Group>

                                <Button
                                    variant="success"
                                    type="submit"
                                    className="w-100 mb-3"
                                >
                                    Submit
                                </Button>

                                <div className="mt-3 text-center">
                                    <a
                                        href="/"
                                        className="text-decoration-none"
                                        style={{ color: "white" }}
                                    >
                                        Back to Login
                                    </a>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}
