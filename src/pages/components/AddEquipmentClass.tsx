import React, { useContext } from "react";
import { Modal, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import EquipmentContext from "../../resources/contexts/EquipmentContext";

type Props = {
    show: boolean
    handleClose: ()=>void
    toggle: ()=>void
}

const AddEquipmentClass: React.FC<Props> = ({show, handleClose, toggle})=>{
    const equipmentContext = useContext(EquipmentContext);
    // const appContext = useContext(ApplicationContext);

    const submitForm = (e: React.FormEvent<HTMLFormElement>)=>{
                    e.preventDefault();
            
                    toggle()
    }

    return <Modal show={show} onHide={handleClose} className="instu-modal" size="lg" centered>
    <Modal.Header className="d-flex justify-content-around">
      <Modal.Title>Add Equipment Class</Modal.Title>
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
                        <Form.Control placeholder="Enter equipment name" value={equipmentContext?.equipmentClassReq?.name} onChange={(e)=>equipmentContext?.setEquipmentClassReq({name: e.target.value, description: equipmentContext?.equipmentClassReq?.description ?? "", code: equipmentContext?.equipmentClassReq?.code ?? "", priority: equipmentContext?.equipmentClassReq?.priority ?? "", workWindow: equipmentContext?.equipmentClassReq?.workWindow ?? ""})} required />
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
                            value={equipmentContext?.equipmentClassReq?.description} onChange={(e)=>equipmentContext?.setEquipmentClassReq({name: equipmentContext?.equipmentClassReq?.name ?? "", description: e.target.value, code: equipmentContext?.equipmentClassReq?.code ?? "", priority: equipmentContext?.equipmentClassReq?.priority ?? "", workWindow: equipmentContext?.equipmentClassReq?.workWindow ?? ""})}
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
                            value={equipmentContext?.equipmentClassReq?.code} 
                            onChange={(e)=>equipmentContext?.setEquipmentClassReq({name: equipmentContext?.equipmentClassReq?.name ?? "", description: equipmentContext?.equipmentClassReq?.description ?? "", code: e.target.value, priority: equipmentContext?.equipmentClassReq?.priority ?? "", workWindow: equipmentContext?.equipmentClassReq?.workWindow ?? ""})}
                            required
                            /> 
                    </FloatingLabel>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Priority"
                        className="mb-3"
                    >
                        <Form.Control
                            placeholder="Priority"
                            value={equipmentContext?.equipmentClassReq?.priority} 
                            onChange={(e)=>equipmentContext?.setEquipmentClassReq({name: equipmentContext?.equipmentClassReq?.name ?? "", description: equipmentContext?.equipmentClassReq?.description ?? "", code: equipmentContext?.equipmentClassReq?.code ?? "", priority: e.target.value, workWindow: equipmentContext?.equipmentClassReq?.workWindow ?? ""})}
                            required
                            /> 
                    </FloatingLabel>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Work Window"
                        className="mb-3"
                    >
                        <Form.Control
                            placeholder="Work Window"
                            value={equipmentContext?.equipmentClassReq?.workWindow} 
                            onChange={(e)=>equipmentContext?.setEquipmentClassReq({name: equipmentContext?.equipmentClassReq?.name ?? "", description: equipmentContext?.equipmentClassReq?.description ?? "", code: equipmentContext?.equipmentClassReq?.code ?? "", priority: equipmentContext?.equipmentClassReq?.workWindow ?? "", workWindow: e.target.value})}
                            required
                            /> 
                    </FloatingLabel>
                </Col>
            </Row>
    
            <Row className="mt-4">
                <Col style={{justifyContent: 'right', display: 'flex'}}>
                    <Button className="primary-button" type="submit">Add Equipment Class</Button>
                </Col>
            </Row>
        </Form>
    </Modal.Body>
    </Modal>
}

export default AddEquipmentClass