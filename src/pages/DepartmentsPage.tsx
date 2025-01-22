import React, { useState } from "react"
import { Department, Facility, User } from "../utils/types/Types";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { facilities, users } from "../utils/data/Data";

const DepartmentsPage: React.FC = ()=>{
    const [selectedFacility, setSelectedFacility] = useState<Facility>()
    return <>
    <div className="min-height-300 bg-primary position-absolute w-100"></div>
    <SideBar />
    <main className="main-content position-relative border-radius-lg ">
        <NavBar />
        <Container className="py-4" fluid>
            <Row className="mt-4">
                <Col xs={12} sm={12} md={6}>
                    <div className="card-body p-3 customCardH">
                        Facilities
                    </div>
                    {
                        facilities.map((fc: Facility)=>{
                            return <div className="card-body p-3 my-3 customCardF" onClick={()=>setSelectedFacility(fc)}>
                                        {
                                            fc.FacilityName
                                        }
                                    </div>
                        })
                    }
                </Col>
                <Col xs={12} sm={12} md={6}>
                    <div className="card-body p-3 customCardH">
                        Departments
                    </div>
                    {
                        selectedFacility?.Departments.map((dp: Department)=>{
                            return <div className="card-body p-3 my-3 customCard">
                                        {
                                            dp.Department
                                        }
                                        <p>
                                            {
                                                dp.DepartmentPhone
                                            }
                                        </p>
                                        <ListGroup>
                                            {
                                                users.map((usr: User)=>{
                                                    return usr.Department.DepartmentId == dp.DepartmentId ? 
                                                    <ListGroup.Item>
                                                        {usr.FullName}
                                                        <p>
                                                            {usr.Phone}
                                                        </p>
                                                    </ListGroup.Item>
                                                    : ""
                                                })
                                            }
                                        </ListGroup>
                                    </div>
                        })
                    }
                </Col>
            </Row>
        </Container>
    </main>
    </>
}

export default DepartmentsPage