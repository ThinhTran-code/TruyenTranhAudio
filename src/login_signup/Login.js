import React from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";

function Login() {
    return (
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
                                Login to Your Account
                            </h2>
                            <p className="text-muted">
                                Welcome back! Please log in to continue.
                            </p>
                        </div>
                        <Row>
                            <div className="d-flex justify-content-center mb-4">
                                <Button
                                    variant="outline-light"
                                    className="me-2 social-btn"
                                >
                                    <i className="bi bi-google"></i> Continue
                                    with Google
                                </Button>
                            </div>
                        </Row>
                        <Row>
                            <div className="d-flex justify-content-center mb-4">
                                <Button
                                    variant="outline-light"
                                    className="me-2 social-btn"
                                >
                                    <i className="bi bi-facebook"></i> Continue
                                    with Facebook
                                </Button>
                            </div>
                        </Row>

                        <div className="divider mb-4">
                            <span>OR</span>
                        </div>

                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Email or username</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email or username"
                                    className="input-field"
                                />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    className="input-field"
                                />
                            </Form.Group>

                            <Button
                                variant="success"
                                type="submit"
                                className="w-100 mb-3"
                            >
                                Login
                            </Button>

                            <div className="mt-3 text-center">
                                <a href="/" className="text-decoration-none">
                                    Forgot your password?
                                </a>
                            </div>

                            <div
                                className="mt-3 text-center"
                                style={{ color: "white" }}
                            >
                                Don't have an account?{" "}
                                <a href="/" className="text-decoration-none">
                                    Sign up
                                </a>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}

export default Login;
