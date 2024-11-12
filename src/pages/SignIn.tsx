import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const SignIn: React.FC = ()=>{
    return <div className="sign-in-page">
        <Container style={{height: '100%'}}>
            <Row style={{height: '100%'}}>
                <Col xs={12} md={6} style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Container>
                        <Row>
                            <Col style={{justifyContent: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                <div className="my-4">
                                    <img src="/assets/img/logos/h-mems.png" className="navbar-brand-img" alt="main_logo" style={{width: '120px'}} />
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={12}>
                                <div className="card z-index-2 sign-in-card">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control type="email" placeholder="Enter email" />
                                            <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" />
                                        </Form.Group>
                                        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Check me out" />
                                        </Form.Group> */}
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col xs={12} md={6} style={{justifyContent: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <div className="sign-in-pic" style={{backgroundImage: "url('/assets/img/microscope-772297_1280.jpg')", backgroundPosition: 'center', backgroundSize: 'cover'}}>

                    </div>
                </Col>
            </Row>
        </Container>
    </div>
}

export default SignIn