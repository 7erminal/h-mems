import React from "react";
import { Button, Col, FloatingLabel, Form, Modal, Row } from "react-bootstrap";
import { engineers, equipment, workOrderTypes, statuses } from "../../utils/data/Data";
import { Device, Engineer, Status, WorkOrderType } from "../../utils/types/Types";

type Props = {
    show: boolean
    handleClose: ()=>void
}

const AdvancedWorkOrdersSearch: React.FC<Props> = ({show, handleClose})=>{
    return <Modal show={show} onHide={handleClose} fullscreen={true}>
    <Modal.Header className="d-flex justify-content-around">
        {/* <Row><Col style={{justifyContent: 'left', display: 'flex', alignItems: 'left'}}><span className="align-right">Close</span></Col></Row> */}
      <Modal.Title>Advanced Search</Modal.Title>
      <button className="danger-button" type="button" onClick={handleClose}>Close</button>
    </Modal.Header>
    <Modal.Body>
        <Form>
            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Title"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Work Order Title" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Status"
                        className="mb-3"
                    >
                        <Form.Select aria-label="Default select example">
                            {
                                statuses != undefined && statuses != null ? statuses.map((stat: Status, i: number)=>{
                                    return <option key={i} value={stat.Status}>{stat.Status}</option>
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
                        label="Priority"
                        className="mb-3"
                    >
                        <Form.Select aria-label="Default select example">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Assigned Engineer"
                        className="mb-3"
                    >
                        <Form.Select aria-label="Default select example">
                            {
                                engineers != undefined && engineers != null ? engineers.map((eng: Engineer, i: number)=>{
                                    return <option key={i} value={eng.FullName}>{eng.FullName}</option>
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
                        label="Equipment"
                        className="mb-3"
                    >
                        <Form.Select aria-label="Default select example">
                            {
                                equipment != undefined && equipment != null ? equipment.map((eqp: Device, i: number)=>{
                                    return <option key={i} value={eqp.ModelName}>{eqp.ModelName}</option>
                                }) : ''
                            }
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Work Order Type"
                        className="mb-3"
                    >
                        <Form.Select aria-label="Default select example">
                            {
                                workOrderTypes != undefined && workOrderTypes != null ? workOrderTypes.map((wkot: WorkOrderType, i: number)=>{
                                    return <option key={i} value={wkot.WorkOrderTypeId}>{wkot.Type}</option>
                                }) : ''
                            }
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <Button className="primary-button" onClick={handleClose}>Search</Button>
                </Col>
            </Row>

        </Form>
    </Modal.Body>
  </Modal>
}

export default AdvancedWorkOrdersSearch