import React, { useContext, useEffect } from "react";
import { Modal, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import InstitutionContext from "../../resources/contexts/InstitutionContext";
import ApplicationContext from "../../resources/contexts/ApplicationContext";
import { Institution } from "../../utils/types/Types";

type Props = {
    show: boolean
    handleClose: ()=>void
    toggle: (a: string, b: string)=>void
}

const AddHospital1: React.FC<Props> = ({show, handleClose, toggle})=>{
    const institutionContext = useContext(InstitutionContext);
    const appContext = useContext(ApplicationContext);

    useEffect(()=>{
        if(institutionContext != undefined && institutionContext?.institutions.length < 1){
            getInstitutions()
        }
    },[])

    const getInstitutions = async ()=>{
        appContext?.loadingShow()
        await institutionContext?.getInstitutions()
        appContext?.loadingClose()
    }
    
    const submitForm = (e: React.FormEvent<HTMLFormElement>)=>{
                e.preventDefault();
        
                toggle("ADD", "ADDHOSP1")
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
                    <small>ENTER NAME AND CODE</small>
                </Col>
            </Row>
            {
                institutionContext?.selectedInstitution == undefined ? 
                <Row className="mt-2">
                <Col>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="Institution"
                            className="mb-3"
                        >
                        <Form.Select aria-label="Default select example" value={institutionContext?.hospitalInstitution} onChange={(e)=>{console.log("Selected value is: "+e.target.value); institutionContext?.setHospitalInstitution(e.target.value) }} required>
                            <option value=""></option>
                            {
                                institutionContext != undefined && institutionContext?.institutions.length > 0 ? institutionContext?.institutions.map((inst: Institution, i: number)=>{
                                    return <option key={i} value={inst.id}>{inst.name}</option>
                                }) : ''
                            }
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row> : ''
            }
            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Enter Hospital's name" value={institutionContext?.hospitalName} onChange={(e)=>institutionContext?.setHospitalName(e.target.value)} required />
                    </FloatingLabel>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Code"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Enter Hospital's Code" value={institutionContext?.hospitalCode} onChange={(e)=>institutionContext?.setHospitalCode(e.target.value)} required />
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

export default AddHospital1