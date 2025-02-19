import React, { useContext } from "react";
import { Modal, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import InstitutionContext from "../../resources/contexts/InstitutionContext";

type Props = {
    show: boolean
    handleClose: ()=>void
    toggle: (a: string, b: string)=>void
}

const AddHospital4: React.FC<Props> = ({show, handleClose, toggle})=>{
    const institutionContext = useContext(InstitutionContext);
    
    const submitForm = (e: React.FormEvent<HTMLFormElement>)=>{
                e.preventDefault();
        
                toggle("ADD", "ADDINST2")
            }

    return <Modal show={show} onHide={handleClose} className="instu-modal" size="lg" centered>
    <Modal.Header className="d-flex justify-content-around">
      <Modal.Title>Add Hospital</Modal.Title>
      <button className="danger-button" type="button" onClick={handleClose}>Close</button>
    </Modal.Header>
    <Modal.Body>
        <Form onSubmit={(e: React.FormEvent<HTMLFormElement>)=>submitForm(e)}>
            <Row className="my-2">
                <Col xs={12} md={12}>
                    <small>ADDRESS</small>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Country"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Country" value={institutionContext?.hospitalCountry} onChange={(e)=>institutionContext?.setHospitalCountry(e.target.value)} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Region"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Region" value={institutionContext?.hospitalRegion} onChange={(e)=>institutionContext?.setHospitalRegion(e.target.value)} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="City"
                        className="mb-3"
                    >
                        <Form.Control placeholder="City" value={institutionContext?.hospitalCity} onChange={(e)=>institutionContext?.setHospitalCity(e.target.value)} />
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
                        <Form.Control placeholder="Address" value={institutionContext?.hospitalAddress} onChange={(e)=>institutionContext?.setHospitalAddress(e.target.value)} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="District"
                        className="mb-3"
                    >
                        <Form.Control placeholder="District" value={institutionContext?.hospitalDistrict} onChange={(e)=>institutionContext?.setHospitalDistrict(e.target.value)} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="SubDistrict"
                        className="mb-3"
                    >
                        <Form.Control placeholder="SubDistrict" value={institutionContext?.hospitalSubDistrict} onChange={(e)=>institutionContext?.setHospitalSubDistrict(e.target.value)} />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col style={{justifyContent: 'right', display: 'flex'}}>
                    <Button className="primary-button" onClick={()=>toggle("ADD", "ADDHOSP4")}>Next</Button>
                </Col>
            </Row>
        </Form>
    </Modal.Body>
    </Modal>
}

export default AddHospital4