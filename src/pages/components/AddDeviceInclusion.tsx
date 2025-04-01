import React, { useContext } from "react";
import { Modal, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import EquipmentContext from "../../resources/contexts/EquipmentContext";

type Props = {
    show: boolean
    handleClose: ()=>void
    toggle: ()=>void
}

const AddDeviceInclusion: React.FC<Props> = ({show, handleClose, toggle})=>{
    const equipmentContext = useContext(EquipmentContext);
    // const appContext = useContext(ApplicationContext);

    const submitForm = (e: React.FormEvent<HTMLFormElement>)=>{
                    e.preventDefault();
            
                    toggle()
    }

    return <Modal show={show} onHide={handleClose} className="instu-modal" size="lg" centered>
    <Modal.Header className="d-flex justify-content-around">
      <Modal.Title>Add Device</Modal.Title>
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
                        <Form.Control placeholder="Enter device name" value={equipmentContext?.deviceInclusionReq?.name} onChange={(e)=>equipmentContext?.setDeviceInclusionReq({name: e.target.value, description: equipmentContext?.deviceInclusionReq?.description ?? "", code: equipmentContext?.deviceInclusionReq?.code ?? ""})} required />
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
                            value={equipmentContext?.deviceInclusionReq?.description} onChange={(e)=>equipmentContext?.setDeviceInclusionReq({name: equipmentContext?.deviceInclusionReq?.name ?? "", description: e.target.value, code: equipmentContext?.deviceInclusionReq?.code ?? ""})}
                            required
                            /> 
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
                        <Form.Control
                            placeholder="Code"
                            value={equipmentContext?.deviceInclusionReq?.code} 
                            onChange={(e)=>equipmentContext?.setDeviceInclusionReq({name: equipmentContext?.deviceInclusionReq?.name ?? "", description: equipmentContext?.deviceInclusionReq?.description ?? "", code: e.target.value})}
                            required
                            /> 
                    </FloatingLabel>
                </Col>
            </Row>
    
            <Row className="mt-4">
                <Col style={{justifyContent: 'right', display: 'flex'}}>
                    <Button className="primary-button" type="submit">Add Device</Button>
                </Col>
            </Row>
        </Form>
    </Modal.Body>
    </Modal>
}

export default AddDeviceInclusion