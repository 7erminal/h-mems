import React, { useContext, useEffect } from "react";
import { Modal, Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
import InstitutionContext from "../../resources/contexts/InstitutionContext";
import ApplicationContext from "../../resources/contexts/ApplicationContext";
import { PermissionC, RoleC } from "../../utils/types/Types";

type Props = {
    show: boolean
    handleClose: ()=>void
    addPermission: (a: string, b: string)=>void
}

const AddPermissionToRole: React.FC<Props> = ({show, handleClose, addPermission})=>{
    const institutionContext = useContext(InstitutionContext);
    const appContext = useContext(ApplicationContext);

    useEffect(()=>{
        if(institutionContext != undefined && institutionContext?.roles.length < 1){
            getRoles()
        }
        if(institutionContext != undefined && institutionContext?.permissions.length < 1){
            getPermissions()
        }
    },[])

    const getRoles = async ()=>{
        appContext?.loadingShow()
        await institutionContext?.getRoles()
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
    
            if(type=="ROLE"){
                var r = institutionContext?.roles.filter((rl: RoleC)=>{
                    return rl.id==id
                })
    
                console.log("Role is ")
                console.log(r)
                r != undefined ? institutionContext?.setSelectedRole(r[0]) : ''
            }
        }
    
    const submitForm = (e: React.FormEvent<HTMLFormElement>)=>{
                e.preventDefault();
        
                addPermission("ADD", "ADDHOSP1")
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
                    <small>SELECT ROLE AND PERMISSION</small>
                </Col>
            </Row>
            {
                institutionContext?.selectedInstitution == undefined ? 
                <Row className="mt-2">
                <Col>
                    <FloatingLabel
                            controlId="floatingInput"
                            label="Role"
                            className="mb-3"
                        >
                        <Form.Select aria-label="Default select example" value={institutionContext?.selectedRole?.id} onChange={(e)=>{console.log("Selected value is: "+e.target.value); getSelectedItem(e.target.value, "ROLE") }} required>
                            <option value=""></option>
                            {
                                institutionContext != undefined && institutionContext?.roles.length > 0 ? institutionContext?.roles.map((rl: RoleC, i: number)=>{
                                    return <option key={i} value={rl.id}>{rl.name}</option>
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

export default AddPermissionToRole