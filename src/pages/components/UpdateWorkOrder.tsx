import React from "react";
import { Button, Col, Container, FloatingLabel, Form, Modal, Row } from "react-bootstrap";

type Props = {
    show: boolean
    handleClose: ()=>void
}

const UpdateWorkOrder: React.FC<Props> = ({show, handleClose})=>{
    return <Modal className="cust-modal-content" show={show} onHide={handleClose} size="lg" centered>
    <Modal.Header closeButton>
        {/* <Row><Col style={{justifyContent: 'left', display: 'flex', alignItems: 'left'}}><span className="align-right">Close</span></Col></Row> */}
      <Modal.Title>WO: 0000000</Modal.Title>
    </Modal.Header>
    <Modal.Body>
        <Form>
            <Container>
            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Comments"
                        className="mb-3"
                    >
                        <Form.Control as="textarea" placeholder="Comments" style={{ height: '100px' }} />
                    </FloatingLabel>
                </Col>
            </Row>

            <Row className="mt-2">
                <Col>
                    <Button className="btn-danger" onClick={handleClose}>Cancel</Button>
                </Col>
                <Col>
                    <Button className="btn-info" onClick={handleClose}>Update</Button>
                </Col>
                <Col>
                    <Button className="btn-primary" onClick={handleClose}>Close ticket</Button>
                </Col>
            </Row>
            </Container>
        </Form>
    </Modal.Body>
  </Modal>
}

export default UpdateWorkOrder