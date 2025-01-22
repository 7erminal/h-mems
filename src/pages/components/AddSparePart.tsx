import React from "react";
import { Modal, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import { departments, facilities, locations, users, priorityList } from "../../utils/data/Data";
import { Department, Facility, FLocation, Priority, User } from "../../utils/types/Types";

type Props = {
    show: boolean
    handleClose: ()=>void
}

const AddSparePart: React.FC<Props> = ({show, handleClose})=>{
    return <Modal show={show} onHide={handleClose} fullscreen={true}>
    <Modal.Header className="d-flex justify-content-around">
      <Modal.Title>Add Part</Modal.Title>
      <button className="danger-button" type="button" onClick={handleClose}>Close</button>
    </Modal.Header>
    <Modal.Body>
        <Form>
            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Control Number"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Control #" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Serial Number"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Serial #" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Class"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Class" />
                    </FloatingLabel>
                </Col>
            </Row>
            <hr style={{border: "0.3px solid black"}} />
            <Row className="mt-4">
                <Col>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="Equipment Type"
                            className="mb-3"
                        >
                        <Form.Select aria-label="Default select example">
                            {
                                priorityList.map((pr: Priority)=>{
                                    return <option value={pr.PriorityCode}>{pr.PriorityName}</option>
                                })
                            }
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Equipment make"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Name" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Equipment model"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Name" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="ECRI Number"
                        className="mb-3"
                    >
                        <Form.Control placeholder="ECRI #" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Equipment manufacturer"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Manufacturer" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Equipment supplier"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Supplier" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="System"
                        className="mb-3"
                    >
                        <Form.Control placeholder="System" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="Device Inclusion"
                            className="mb-3"
                        >
                        <Form.Select aria-label="Default select example">
                            <option value="PPM">PPM</option>
                            {/* <option value="NONE_LIFE_SUPPORTING">Non Life Supporting</option>
                            <option value="HIGH_RISK">High Risk</option> */}
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="Device Inclusion type"
                            className="mb-3"
                        >
                        <Form.Select aria-label="Default select example">
                            <option value="MONTHLY">Monthly</option>
                            <option value="QUARTERLY">Quarterly</option>
                            <option value="HALF_A_YEAR">Half a year</option>
                            <option value="YEARLY">Yearly</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="ECRI Revision"
                        className="mb-3"
                    >
                        <Form.Control placeholder="ECRI Revision" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Purchase date"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Purchase date" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Warranty expiry date"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Warranty expiry date" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Service start date"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Service start date" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Service expirty date"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Service expiry date" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Cost"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Cost" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Device Life expectancy"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Life expectancy" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="Country"
                            className="mb-3"
                        >
                        <Form.Select aria-label="Default select example">
                            <option value="GHANA">Ghana</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="Region"
                            className="mb-3"
                        >
                        <Form.Select aria-label="Default select example">
                            <option value="GREATER_ACCRA">Greater Accra</option>
                            <option value="ASHANTI">Ashanti</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="District"
                            className="mb-3"
                        >
                        <Form.Select aria-label="Default select example">
                            <option value="ADENTAN">Adenta</option>
                            <option value="KOKOMLEMLE">Kokomlemle</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="Sub District"
                            className="mb-3"
                        >
                        <Form.Select aria-label="Default select example">
                            <option value="ADENTAN">Adenta</option>
                            <option value="KOKOMLEMLE">Kokomlemle</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="Facility"
                            className="mb-3"
                        >
                        <Form.Select aria-label="Default select example">
                            {
                                facilities.map((fc: Facility)=>{
                                    return <option value={fc.FacilityId}>{fc.FacilityName}</option>
                                })
                            }
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="Department"
                            className="mb-3"
                        >
                        <Form.Select aria-label="Default select example">
                            {
                                departments.map((dp: Department)=>{
                                    return <option value={dp.DepartmentId}>{dp.Department}</option>
                                })
                            }
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="Location"
                            className="mb-3"
                        >
                        <Form.Select aria-label="Default select example">
                            {
                                locations.map((lc: FLocation)=>{
                                    return <option value={lc.Location}>{lc.Location}</option>
                                })
                            }
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="Assign to"
                            className="mb-3"
                        >
                        <Form.Select aria-label="Default select example">
                            {
                                users.map((us: User)=>{
                                    return <option value={us.UserId}>{us.FullName}</option>
                                })
                            }
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
    
            <Row className="mt-4">
                <Col>
                    <Button className="primary-button" onClick={handleClose}>Add Part</Button>
                </Col>
            </Row>
        </Form>
    </Modal.Body>
    </Modal>
}

export default AddSparePart