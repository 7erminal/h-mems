import React, { useContext } from "react";
import { Modal, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import { departments, facilities, locations, users, priorityList } from "../../utils/data/Data";
import { DepartmentT, DeviceInclusion, EquipmentClass, Facility, FLocation, Priority, UserT } from "../../utils/types/Types";
import EquipmentContext from "../../resources/contexts/EquipmentContext";
import ApplicationContext from "../../resources/contexts/ApplicationContext";

type Props = {
    show: boolean
    handleClose: ()=>void
}

const AddEquipment: React.FC<Props> = ({show, handleClose})=>{
    const equipmentContext = useContext(EquipmentContext);
    const appContext = useContext(ApplicationContext);

    const submitForm = async (e: React.FormEvent<HTMLFormElement>)=> {
                    e.preventDefault();
                    appContext?.loadingShow()
        var resp = await equipmentContext?.addEquipment()
        appContext?.loadingClose()
        if(resp==true){
            equipmentContext?.getEquipment()
            appContext?.setErrorMessage("Cost Center added successfully")
            handleClose()
        } else {
            appContext?.setErrorMessage("Error adding cost center")
        }
    }
    
    return <Modal show={show} onHide={handleClose} fullscreen={true}>
    <Modal.Header className="d-flex justify-content-around">
      <Modal.Title>Add Equipment</Modal.Title>
      <button className="danger-button" type="button" onClick={handleClose}>Close</button>
    </Modal.Header>
    <Modal.Body>
        <Form onSubmit={(e: React.FormEvent<HTMLFormElement>)=>submitForm(e)}>
            <Row className="mt-2">
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Asset Number"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Asset #" value={equipmentContext?.equipmentReq.assetNumber} onChange={(e)=>equipmentContext?.setEquipmentReq({...equipmentContext.equipmentReq, assetNumber: e.target.value})} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Serial Number"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Serial #" value={equipmentContext?.equipmentReq.serialNumber} onChange={(e)=>equipmentContext?.setEquipmentReq({...equipmentContext.equipmentReq, serialNumber: e.target.value})}/>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Class"
                        className="mb-3"
                    >
                        <Form.Select aria-label="Default select example" onChange={(e)=>equipmentContext?.setEquipmentReq({...equipmentContext.equipmentReq, classId: e.target.value})}>
                            {
                                equipmentContext?.equipmentClasses.map((eq: EquipmentClass)=>{
                                    return <option value={eq.name}>{eq.name}</option>
                                })
                            }
                        </Form.Select>
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
                        <Form.Control placeholder="Make" value={equipmentContext?.equipmentReq.make} onChange={(e)=>equipmentContext?.setEquipmentReq({...equipmentContext.equipmentReq, make: e.target.value})}/>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Equipment model"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Model" value={equipmentContext?.equipmentReq.model} onChange={(e)=>equipmentContext?.setEquipmentReq({...equipmentContext.equipmentReq, model: e.target.value})}/>
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
                        <Form.Control placeholder="ECRI #" value={equipmentContext?.equipmentReq.ecriNumber} onChange={(e)=>equipmentContext?.setEquipmentReq({...equipmentContext.equipmentReq, ecriNumber: e.target.value})}/>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Equipment manufacturer"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Manufacturer" value={equipmentContext?.equipmentReq.manufacturer} onChange={(e)=>equipmentContext?.setEquipmentReq({...equipmentContext.equipmentReq, manufacturer: e.target.value})}/>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Equipment supplier"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Serial #" value={equipmentContext?.equipmentReq.supplier} onChange={(e)=>equipmentContext?.setEquipmentReq({...equipmentContext.equipmentReq, supplier: e.target.value})}/>
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
                        <Form.Control placeholder="Serial #" value={equipmentContext?.equipmentReq.system} onChange={(e)=>equipmentContext?.setEquipmentReq({...equipmentContext.equipmentReq, system: e.target.value})}/>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="Device Inclusion"
                            className="mb-3"
                        >
                        <Form.Select aria-label="Default select example">
                            {
                                equipmentContext?.deviceInclusions.map((dv: DeviceInclusion)=>{
                                    return <option value={dv.id}>{dv.name}</option>
                                })
                            }
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
                        <Form.Select aria-label="">
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
                        <Form.Control placeholder="ECRI Revision" value={equipmentContext?.equipmentReq.ecriRevisionNumber} onChange={(e)=>equipmentContext?.setEquipmentReq({...equipmentContext.equipmentReq, ecriRevisionNumber: e.target.value})}/>
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Purchase date"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Purchase date" value={equipmentContext?.equipmentReq.purchaseDate} onChange={(e)=>equipmentContext?.setEquipmentReq({...equipmentContext.equipmentReq, purchaseDate: e.target.value})} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Warranty expiry date"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Warranty expiry date" value={equipmentContext?.equipmentReq.warrantyExpiryDate} onChange={(e)=>equipmentContext?.setEquipmentReq({...equipmentContext.equipmentReq, warrantyExpiryDate: e.target.value})} />
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
                        <Form.Control placeholder="Service start date" value={equipmentContext?.equipmentReq.serviceStartDate} onChange={(e)=>equipmentContext?.setEquipmentReq({...equipmentContext.equipmentReq, serviceStartDate: e.target.value})} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Service expirty date"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Service expiry date" value={equipmentContext?.equipmentReq.serviceExpiryDate} onChange={(e)=>equipmentContext?.setEquipmentReq({...equipmentContext.equipmentReq, serviceExpiryDate: e.target.value})} />
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
                        <Form.Control placeholder="Cost" value={equipmentContext?.equipmentReq.cost} onChange={(e)=>equipmentContext?.setEquipmentReq({...equipmentContext.equipmentReq, cost: parseFloat(e.target.value) || 0})} />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Device Life expectancy"
                        className="mb-3"
                    >
                        <Form.Control placeholder="Life expectancy" value={equipmentContext?.equipmentReq.lifeExpectancy} onChange={(e)=>equipmentContext?.setEquipmentReq({...equipmentContext.equipmentReq, lifeExpectancy: e.target.value})} />
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
                        <Form.Select aria-label="Default select example" 
                        onChange={(e)=>equipmentContext?.setEquipmentReq({...equipmentContext.equipmentReq, country: e.target.value})}
                        >
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
                        <Form.Select aria-label="Default select example"
                        onChange={(e)=>equipmentContext?.setEquipmentReq({...equipmentContext.equipmentReq, region: e.target.value})}
                        >
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
                        <Form.Select aria-label="Default select example"
                        value={equipmentContext?.equipmentReq.district} onChange={(e)=>equipmentContext?.setEquipmentReq({...equipmentContext.equipmentReq, district: e.target.value})}
                        >
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
                        <Form.Select aria-label="Default select example"
                        value={equipmentContext?.equipmentReq.subDistrict} onChange={(e)=>equipmentContext?.setEquipmentReq({...equipmentContext.equipmentReq, subDistrict: e.target.value})}
                        >
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
                        <Form.Select aria-label="Default select example" >
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
                                departments.map((dp: DepartmentT)=>{
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
                        <Form.Select aria-label="Default select example"
                        value={equipmentContext?.equipmentReq.location} onChange={(e)=>equipmentContext?.setEquipmentReq({...equipmentContext.equipmentReq, location: e.target.value})}
                        >
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
                                users.map((us: UserT)=>{
                                    return <option value={us.UserId}>{us.FullName}</option>
                                })
                            }
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>
    
            <Row className="mt-4">
                <Col>
                    <Button className="primary-button" type="submit">Add Equipment</Button>
                </Col>
            </Row>
        </Form>
    </Modal.Body>
    </Modal>
}

export default AddEquipment