import React, { useState, useEffect } from "react";
import { Modal, Form, Row, Col, FloatingLabel, FormLabel, Button } from "react-bootstrap";
import Select from 'react-select'
import { equipment, engineers } from "../../utils/data/Data";
import { Device, Engineer } from "../../utils/types/Types";

type Props = {
    show: boolean
    handleClose: ()=>void
}

const CreateWorkOrder: React.FC<Props> = ({show, handleClose})=>{
    const [options, setOptions] = useState<{ label: string; value: string }[]>()
    const [availableEngineers, setAvailableEngineers] = useState<{ label: string; value: string }[]>()

    useEffect(()=>{
        var options_: { label: string; value: string }[] = []
        var engineers_: { label: string; value: string }[] = []

        equipment.map((eq: Device)=>{
            options_.push({"value": eq.SerialNo, "label": eq.ModelName})
        })

        engineers.map((ing: Engineer)=>{
            engineers_.push({"value": ing.EngineerId.toString(), "label": ing.FullName})
        })

        console.log("Work order options are ")
        console.log(options_)

        setOptions(options_)
        setAvailableEngineers(engineers_)
    },[])

    return <Modal show={show} onHide={handleClose} fullscreen={true}>
    <Modal.Header className="d-flex justify-content-around">
      <Modal.Title>Create Work Order</Modal.Title>
      <button className="danger-button" type="button" onClick={handleClose}>Close</button>
    </Modal.Header>
    <Modal.Body>
        <Form>
            <Row className="mt-2">
                <FloatingLabel
                        controlId="floatingInput"
                        label="Priority"
                        className="mb-3"
                    >
                    <Form.Select aria-label="Default select example">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </Form.Select>
                </FloatingLabel>
            </Row>
            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Title"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Title" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FloatingLabel controlId="floatingTextarea2" label="Description">
                        <Form.Control
                        as="textarea"
                        placeholder="Description"
                        style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="mt-2">
                <FormLabel>Select Equipment</FormLabel>
                <Select options={options!} value={{label: '', value: ''}} placeholder="Equipment" onBlur={()=>{}} onFocus={()=>{}} />
            </Row>
            <Row className="mt-2">
                <FormLabel>Assign to</FormLabel>
                <Select options={availableEngineers!} value={{label: '', value: ''}} placeholder="Equipment" onBlur={()=>{}} onFocus={()=>{}} />
            </Row>
    
            <Row className="mt-4">
                <Col>
                    <Button className="primary-button" onClick={handleClose}>Create Work Order</Button>
                </Col>
            </Row>
        </Form>
    </Modal.Body>
    </Modal>
}

export default CreateWorkOrder