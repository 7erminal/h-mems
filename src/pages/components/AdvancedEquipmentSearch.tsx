import React from "react";
import { Button, Col, FloatingLabel, Form, Modal, Row } from "react-bootstrap";

type Props = {
    show: boolean
    handleClose: ()=>void
}

const AdvancedEquipmentSearch: React.FC<Props> = ({show, handleClose})=>{
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
                        label="Control #"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Control #" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Serial #"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Serial #" />
                    </FloatingLabel>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Equipment Type"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Equipment Type" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Device Inclusion"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Device Inclusion" />
                    </FloatingLabel>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Model #"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Model #" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Model Name"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Model Name" />
                    </FloatingLabel>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Manufacturer"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Manufacturer" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Supplier"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Supplier" />
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
                        <Form.Control placeholder="Department" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Cost Center #"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Cost Center #" />
                    </FloatingLabel>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="ECRI #"
                        className="mb-3"
                    >
                        <Form.Control placeholder="ECRI #" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="ECRI Name"
                        className="mb-3"
                    >
                        <Form.Control placeholder="ECRI Name" />
                    </FloatingLabel>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Class"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Class" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="System"
                        className="mb-3"
                    >
                        <Form.Control placeholder="System" />
                    </FloatingLabel>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Location"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Location" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Show only Active"
                        className="mb-3"
                    >
                        <Form.Select aria-label="Default select example">
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Show"
                        className="mb-3"
                    >
                        <Form.Select aria-label="Default select example">
                            <option value="1">All</option>
                            <option value="2">Some</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Group by"
                        className="mb-3"
                    >
                        <Form.Select aria-label="Default select example">
                            <option value="1">No Grouping</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col xs={12} md={6}>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Exact Match"
                        className="mb-3"
                    >
                        <Form.Select aria-label="Default select example">
                            <option value="1">No</option>
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

export default AdvancedEquipmentSearch