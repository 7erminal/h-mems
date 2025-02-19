import React, { useContext } from "react";
import { Modal, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import InstitutionContext from "../../resources/contexts/InstitutionContext";

type Props = {
    show: boolean
    handleClose: ()=>void
    toggle: (a: string, b: string)=>void
}

const AddDepartment: React.FC<Props> = ({show, handleClose, toggle})=>{
    const institutionContext = useContext(InstitutionContext);
    // const appContext = useContext(ApplicationContext);

    const submitForm = (e: React.FormEvent<HTMLFormElement>)=>{
                    e.preventDefault();
            
                    toggle("ADD", "ADDDEPT")
    }

    return <Modal show={show} onHide={handleClose} className="instu-modal" size="lg" centered>
    <Modal.Header className="d-flex justify-content-around">
      <Modal.Title>Add Department</Modal.Title>
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
                        <Form.Control placeholder="Enter Department name" value={institutionContext?.departmentName} onChange={(e)=>institutionContext?.setDepartmentName(e.target.value)} required />
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
                        <Form.Control
                            as="textarea"
                            placeholder="Description"
                            style={{ height: '100px' }}
                            value={institutionContext?.departmentDescription} onChange={(e)=>institutionContext?.setDepartmentDescription(e.target.value)}
                            required
                            /> 
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

export default AddDepartment