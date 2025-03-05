import React, { useContext, useEffect } from "react";
import { Modal, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import InstitutionContext from "../../resources/contexts/InstitutionContext";
import ApplicationContext from "../../resources/contexts/ApplicationContext";
import { GroupC, PermissionC } from "../../utils/types/Types";

type Props = {
    show: boolean
    handleClose: ()=>void
    addPermission: ()=>void
}

const AddPermissionToGroup: React.FC<Props> = ({show, handleClose, addPermission})=>{
    const institutionContext = useContext(InstitutionContext);
    const appContext = useContext(ApplicationContext);

    useEffect(()=>{
        if(institutionContext != undefined && institutionContext?.groups.length < 1){
            getGroups()
        }
        if(institutionContext != undefined && institutionContext?.permissions.length < 1){
            getPermissions()
        }
    },[])

    const getGroups = async ()=>{
        appContext?.loadingShow()
        await institutionContext?.getGroups()
        appContext?.loadingClose()
    }

    const getPermissions = async ()=>{
        appContext?.loadingShow()
        await institutionContext?.getPermissions()
        appContext?.loadingClose()
    }

    const getSelectedItem = (id: string, type: string)=>{
        console.log("ID is "+id)
        if(type=="PERMISSION"){
            var p = institutionContext?.permissions.filter((pm: PermissionC)=>{
                return pm.id==id
            })

            console.log("Permission is ")
            console.log(p)
            p != undefined ? institutionContext?.setSelectedPermission(p[0]) : ''
        }

        if(type=="GROUP"){
            var g = institutionContext?.groups.filter((grp: GroupC)=>{
                return grp.id==id
            })

            console.log("Group is ")
            console.log(g)
            g != undefined ? institutionContext?.setSelectedGroup(g[0]) : ''
        }
    }
    
    const submitForm = (e: React.FormEvent<HTMLFormElement>)=>{
                e.preventDefault();
        
                addPermission()
            }

    return <Modal show={show} onHide={handleClose} className="instu-modal" size="lg" centered>
    <Modal.Header className="d-flex justify-content-around">
      <Modal.Title>Add Permission</Modal.Title>
      <button className="danger-button" type="button" onClick={handleClose}>Close</button>
    </Modal.Header>
    <Modal.Body>
        <Form onSubmit={(e: React.FormEvent<HTMLFormElement>)=>submitForm(e)}>
            <Row className="my-2">
                <Col xs={12} md={12}>
                    <small>ADD PERMISSION TO GROUP</small>
                </Col>
            </Row>
            {
                institutionContext?.selectedInstitution == undefined ? 
                <Row className="mt-2">
                <Col>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="Group"
                            className="mb-3"
                        >
                        <Form.Select aria-label="Default select example" value={institutionContext?.selectedGroup?.id} onChange={(e)=>{console.log("Selected value is: "+e.target.value); getSelectedItem(e.target.value, "GROUP") }} required>
                            <option value=""></option>
                            {
                                institutionContext != undefined && institutionContext?.groups.length > 0 ? institutionContext?.groups.map((grp: GroupC, i: number)=>{
                                    return <option key={i} value={grp.id}>{grp.name}</option>
                                }) : ''
                            }
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row> : ''
            }
            {
                institutionContext?.selectedInstitution == undefined ? 
                <Row className="mt-2">
                <Col>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="Permission"
                            className="mb-3"
                        >
                        <Form.Select aria-label="Default select example" value={institutionContext?.selectedPermission?.id} onChange={(e)=>{console.log("Selected value is: "+e.target.value); getSelectedItem(e.target.value, "PERMISSION") }} required>
                            <option value=""></option>
                            {
                                institutionContext != undefined && institutionContext?.permissions.length > 0 ? institutionContext?.permissions.map((perm: PermissionC, i: number)=>{
                                    return <option key={i} value={perm.id}>{perm.name}</option>
                                }) : ''
                            }
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row> : ''
            }
    
            <Row className="mt-4">
                <Col style={{justifyContent: 'right', display: 'flex'}}>
                    <Button className="primary-button" type="submit">Add Permission</Button>
                </Col>
            </Row>
        </Form>
    </Modal.Body>
    </Modal>
}

export default AddPermissionToGroup