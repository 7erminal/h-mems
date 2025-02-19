import React, { useContext } from "react";
import { Modal, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import InstitutionContext from "../../resources/contexts/InstitutionContext";

type Props = {
    show: boolean
    handleClose: ()=>void
    toggle: (a: string, b: string)=>void
}

const AddInstitution3: React.FC<Props> = ({show, handleClose, toggle})=>{
    const institutionContext = useContext(InstitutionContext);
    
    const submitForm = (e: React.FormEvent<HTMLFormElement>)=>{
                e.preventDefault();
        
                toggle("ADD", "ADDINST3")
            }

    return <Modal show={show} onHide={handleClose} className="instu-modal" size="lg" centered>
    <Modal.Header className="d-flex justify-content-around">
      <Modal.Title>Add Institution</Modal.Title>
      <button className="danger-button" type="button" onClick={handleClose}>Close</button>
    </Modal.Header>
    <Modal.Body>
        <Form onSubmit={(e: React.FormEvent<HTMLFormElement>)=>submitForm(e)}>
            <Row className="my-2">
                <Col xs={12} md={12}>
                    <small>CONTACT</small>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Email" type="email" value={institutionContext?.institutionEmail} onChange={(e)=>institutionContext?.setInstitutionEmail(e.target.value)} required/>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Phone Number"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Phone Number" value={institutionContext?.institutionPhoneNumber} onChange={(e)=>institutionContext?.setInstitutionPhoneNumber(e.target.value)} required />
                    </FloatingLabel>
                </Col>
            </Row>
    
            <Row className="mt-4">
                <Col style={{justifyContent: 'right', display: 'flex'}}>
                    <Button className="primary-button" type="submit">Next</Button>
                </Col>
            </Row>
        </Form>
    </Modal.Body>
    </Modal>
}

export default AddInstitution3