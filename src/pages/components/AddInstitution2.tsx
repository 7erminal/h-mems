import React, { useContext } from "react";
import { Modal, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import InstitutionContext from "../../resources/contexts/InstitutionContext";

type Props = {
    show: boolean
    handleClose: ()=>void
    toggle: (a: string, b: string)=>void
}

const AddInstitution2: React.FC<Props> = ({show, handleClose, toggle})=>{
    const institutionContext = useContext(InstitutionContext);
    
    const submitForm = (e: React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault();
    
            toggle("ADD", "ADDINST2")
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
                    <small>SELECT INSTITUTION TYPE AND GIVE A BRIEF DESCRIPTION</small>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="Type"
                            className="mb-3"
                        >
                        <Form.Select aria-label="Default select example" value={institutionContext?.institutionType} onChange={(e)=>{console.log("Selected value is: "+e.target.value); institutionContext?.setInstitutionType(e.target.value)}} required>
                            <option value="Government">Government</option>
                            <option value="Private">Private</option>
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
                        <Form.Control
                            as="textarea"
                            placeholder="Description"
                            style={{ height: '100px' }}
                            required
                            value={institutionContext?.institutionDescription} onChange={(e)=>institutionContext?.setInstitutionDescription(e.target.value)}
                            /> 
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

export default AddInstitution2