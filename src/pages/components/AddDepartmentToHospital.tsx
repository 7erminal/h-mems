import React, { useContext, useEffect } from "react";
import { Modal, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import InstitutionContext from "../../resources/contexts/InstitutionContext";
import ApplicationContext from "../../resources/contexts/ApplicationContext";
import { Department, Hospital } from "../../utils/types/Types";

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

    const getSelectedItem = (id: string, type: string)=>{
            console.log("ID is "+id)
            if(type=="DEPARTMENT"){
                var p = institutionContext?.departments.filter((dpt: Department)=>{
                    return dpt.id==id
                })
    
                console.log("Department is ")
                console.log(p)
                p != undefined ? institutionContext?.setSelectedDepartment(p[0]) : ''
            }
    
            if(type=="HOSPITAL"){
                var q = institutionContext?.hospitals.filter((hsp: Hospital)=>{
                    return hsp.id==id
                })
    
                console.log("Hospital is ")
                console.log(q)
                q != undefined ? institutionContext?.setSelectedHospital(q[0]) : ''
            }
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
                        label="Hospital"
                        className="mb-3"
                    >
                        <Form.Select aria-label="Default select example" value={institutionContext?.selectedHospital?.id} onChange={(e)=>{console.log("Selected value is: "+e.target.value); getSelectedItem(e.target.value, "HOSPITAL")}} required>
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
                        label="Department"
                        className="mb-3"
                    >
                        <Form.Select aria-label="Default select example" value={institutionContext?.selectedDepartment?.id} onChange={(e)=>{console.log("Selected value is: "+e.target.value); getSelectedItem(e.target.value, "DEPARTMENT")}} required>
                            <option value=""></option>
                            {
                                institutionContext != undefined && institutionContext?.departments.length > 0 ? institutionContext?.departments.map((dpt: Department, i: number)=>{
                                    return <option key={i} value={dpt.id}>{dpt.name}</option>
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