import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function Signup() {
    return (
        <div>
            {" "}
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
                                    Create Your Account
                                </h2>
                            </div>

                            <Form>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicName"
                                >
                                    <Form.Label style={{ color: "white" }}>
                                        FullName
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="input-field"
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label style={{ color: "white" }}>
                                        Email
                                    </Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        className="input-field"
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                >
                                    <Form.Label style={{ color: "white" }}>
                                        Password
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter password"
                                        className="input-field"
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicConfirmPassword"
                                >
                                    <Form.Label style={{ color: "white" }}>
                                        Confirm Password
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Confirm password"
                                        className="input-field"
                                    />
                                </Form.Group>

                                <Button
                                    variant="success"
                                    type="submit"
                                    className="w-100 mb-3"
                                >
                                    SignUp
                                </Button>

                                <div className="mt-3 text-center">
                                    <p className="text-muted">
                                        Already have an account?{" "}
                                        <a
                                            href="/"
                                            className="text-decoration-none"
                                            style={{ color: "white" }}
                                        >
                                            Login here!
                                        </a>
                                    </p>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}
