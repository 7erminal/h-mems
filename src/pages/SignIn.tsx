import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ApplicationContext from "../resources/contexts/ApplicationContext";
import AuthContext from "../resources/contexts/AuthContext";

const SignIn: React.FC = ()=>{
    const navigate = useNavigate();
    const appContext = useContext(ApplicationContext);
    const authContext = useContext(AuthContext);

    const [showError, setShowError] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        // appContext?.loadingShow()
        var resp = await authContext?.signIn()
        // appContext?.loadingClose()
        if(resp == true){
            navigate("/2/home")
        } else {
            setTimeout(()=>{
                setShowError(false)
              },5000)
            setShowError(true)
        }
    }

    return <div className="sign-in-page">
        <div className="sign-in-background" style={{backgroundImage: "url('/assets/img/microscope-772297_1280.jpg')", backgroundPosition: 'center', backgroundSize: 'cover', filter: "brightness(30%)"}}></div>
        <Container style={{height: '100%'}}>
            <Row style={{height: '100%'}}>
                <Col xs={12} md={4} style={{justifyContent: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    {/* <div className="sign-in-pic" style={{backgroundImage: "url('/assets/img/microscope-772297_1280.jpg')", backgroundPosition: 'center', backgroundSize: 'cover'}}>

                    </div> */}
                </Col>
                <Col xs={12} md={4} style={{justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Container>
                        <Row>
                            <Col xs={12} md={12}>
                                <div className="card z-index-2 sign-in-card">
                                    <Row>
                                        <Col style={{justifyContent: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                            <div className="my-4">
                                                <img src="/assets/img/logos/h-mems.png" className="navbar-brand-img" alt="main_logo" style={{width: '120px'}} />
                                            </div>
                                        </Col>
                                    </Row>
                                    {
                                        showError == true ?
                                        <Row>
                                            <Col style={{justifyContent: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                                                <p style={{color: 'red'}}>{appContext?.errorMessage}</p>
                                            </Col>
                                        </Row> : ''
                                    }
                                    <Form onSubmit={(e)=>handleSubmit(e)}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control value={authContext?.email} onChange={(e)=>authContext?.setEmail(e.target.value)} type="email" placeholder="Enter email" required />
                                            <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3" controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control value={authContext?.password} onChange={(e)=>authContext?.setPassword(e.target.value)} type="password" placeholder="Password" required/>
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
                <Col xs={12} md={4} style={{justifyContent: 'center', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    {/* <div className="sign-in-pic" style={{backgroundImage: "url('/assets/img/microscope-772297_1280.jpg')", backgroundPosition: 'center', backgroundSize: 'cover'}}>

                    </div> */}
                </Col>
            </Row>
        </Container>
    </div>
}

export default SignIn