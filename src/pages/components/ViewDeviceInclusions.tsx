import React, { useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import EquipmentContext from "../../resources/contexts/EquipmentContext";

type Props = {
    show: boolean
    handleClose: ()=>void
}

const ViewDeviceInclusionModal: React.FC<Props> = ({show, handleClose})=>{
    const equipmentContext = useContext(EquipmentContext);
    
    return <Modal show={show} onHide={handleClose} className="instu-modal" size="lg" centered>
        <Modal.Header className="d-flex justify-content-around">
            <Modal.Title>Devices</Modal.Title>
            <button className="danger-button" type="button" onClick={handleClose}>Close</button>
        </Modal.Header>
        <Modal.Body>
            <div className="text-center">
                <h5>Devices</h5>
                <p>
                    {
                        equipmentContext?.deviceInclusions?.map((deviceInclusion, index) => (
                            <div key={index} style={{alignItems: "end", textAlign: "right"}}>
                                <h6>{deviceInclusion.name}</h6>
                                <span>{deviceInclusion.description}</span>
                            </div>
                        ))
                    }
                </p>
            </div>
        </Modal.Body>
    </Modal>
}

export default ViewDeviceInclusionModal;