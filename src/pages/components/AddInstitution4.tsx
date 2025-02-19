import React, { useContext } from "react";
import { Modal, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import InstitutionContext from "../../resources/contexts/InstitutionContext";

type Props = {
    show: boolean
    handleClose: ()=>void
    toggle: (a: string, b: string)=>void
}

const AddInstitution4: React.FC<Props> = ({show, handleClose, toggle})=>{
    const institutionContext = useContext(InstitutionContext);
    
    const submitForm = (e: React.FormEvent<HTMLFormElement>)=>{
                e.preventDefault();
        
                toggle("ADD", "ADDINST4")
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
                    <small>ADDRESS</small>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Country"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Country" value={institutionContext?.institutionCountry} onChange={(e)=>institutionContext?.setInstitutionCountry(e.target.value)} required/>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Region"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Region" value={institutionContext?.institutionRegion} onChange={(e)=>institutionContext?.setInstitutionRegion(e.target.value)} required/>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="City"
                        className="mb-3"
                    >
                        <Form.Control placeholder="City" value={institutionContext?.institutionCity} onChange={(e)=>institutionContext?.setInstitutionCity(e.target.value)} required/>
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Address"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Address" value={institutionContext?.institutionAddress} onChange={(e)=>institutionContext?.setInstitutionAddress(e.target.value)} required />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="District"
                        className="mb-3"
                    >
                        <Form.Control placeholder="District" value={institutionContext?.institutionDistrict} onChange={(e)=>institutionContext?.setInstitutionDistrict(e.target.value)} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="SubDistrict"
                        className="mb-3"
                    >
                        <Form.Control placeholder="SubDistrict" value={institutionContext?.institutionSubDistrict} onChange={(e)=>institutionContext?.setInstitutionSubDistrict(e.target.value)} />
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

export default AddInstitution4