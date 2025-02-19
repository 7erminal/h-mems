import React, { useContext, useEffect } from "react";
import { Modal, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import InstitutionContext from "../../resources/contexts/InstitutionContext";
import ApplicationContext from "../../resources/contexts/ApplicationContext";
import { Hospital, Institution } from "../../utils/types/Types";

type Props = {
    show: boolean
    handleClose: ()=>void
    toggle: (a: string, b: string)=>void
}

const AddDepartmentToHospital: React.FC<Props> = ({show, handleClose, toggle})=>{
    const institutionContext = useContext(InstitutionContext);
    const appContext = useContext(ApplicationContext);

    useEffect(()=>{
            if(institutionContext != undefined && institutionContext?.hospitals.length < 1){
                getHospitals()
            }

            if(institutionContext != undefined && institutionContext?.departments.length < 1){
                getDepartments()
            }
        },[])

    const submitForm = (e: React.FormEvent<HTMLFormElement>)=>{
                    e.preventDefault();
            
                    toggle("ADD", "ADDDEPTHOSP")
    }

    const getHospitals = async ()=>{
        appContext?.loadingShow()
        await institutionContext?.getHospitals()
        appContext?.loadingClose()
    }

    const getDepartments = async ()=>{
        appContext?.loadingShow()
        await institutionContext?.getDepartments()
        appContext?.loadingClose()
    }


    return <Modal show={show} onHide={handleClose} className="instu-modal" size="lg" centered>
    <Modal.Header className="d-flex justify-content-around">
      <Modal.Title>Add Departments to Hospital</Modal.Title>
      <button className="danger-button" type="button" onClick={handleClose}>Close</button>
    </Modal.Header>
    <Modal.Body>
        <Form onSubmit={(e: React.FormEvent<HTMLFormElement>)=>submitForm(e)}>
            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Name"
                        className="mb-3"
                    >
                        <Form.Select aria-label="Default select example" value={institutionContext?.selectedHospital?.id} onChange={(e)=>{console.log("Selected value is: "+e.target.value); institutionContext?.setInstitutionType(e.target.value)}} required>
                            <option value=""></option>
                            {
                                institutionContext != undefined && institutionContext?.hospitals.length > 0 ? institutionContext?.hospitals.map((hosp: Hospital, i: number)=>{
                                    return <option key={i} value={hosp.id}>{hosp.name}</option>
                                }) : ''
                            }
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Description"
                        className="mb-3"
                    >
                        <Form.Select aria-label="Default select example" value={institutionContext?.institutionType} onChange={(e)=>{console.log("Selected value is: "+e.target.value); institutionContext?.setInstitutionType(e.target.value)}} required>
                            <option value=""></option>
                            {
                                institutionContext != undefined && institutionContext?.institutions.length > 0 ? institutionContext?.institutions.map((inst: Institution, i: number)=>{
                                    return <option key={i} value={inst.id}>{inst.name}</option>
                                }) : ''
                            }
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
    
            <Row className="mt-4">
                <Col style={{justifyContent: 'right', display: 'flex'}}>
                    <Button className="primary-button" type="submit">Add Department</Button>
                </Col>
            </Row>
        </Form>
    </Modal.Body>
    </Modal>
}

export default AddDepartmentToHospital