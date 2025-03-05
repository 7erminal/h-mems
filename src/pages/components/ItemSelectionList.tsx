import React from "react";
import { ListGroup, Modal } from "react-bootstrap";

type Props = {
    title: string
    show: boolean
    handleClose: ()=>void
    action: (id: string)=>void
    items: Array<any | undefined> | undefined
}

const ItemSelectionList: React.FC<Props> = ({show, handleClose, action, title, items})=>{
    return <Modal show={show} onHide={handleClose} className="instu-modal" size="lg" centered>
        <Modal.Header className="d-flex justify-content-around">
            <Modal.Title>{title}</Modal.Title>
            <button className="danger-button" type="button" onClick={handleClose}>Close</button>
        </Modal.Header>
        <Modal.Body>
            <ListGroup variant="flush">
                {
                    items != undefined ? items.map((it: any, i: number)=>{
                        return <ListGroup.Item key={i} action onClick={()=>{action(it.id); handleClose()}}>{it.name}</ListGroup.Item>
                    }) : ''
                }
            </ListGroup>
        </Modal.Body>
    </Modal>
}

export default ItemSelectionList