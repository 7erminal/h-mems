import React, { useState } from "react"
import { DepartmentT, Facility, UserT } from "../utils/types/Types";
import NavBar from "./components/NavBar";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { facilities, users } from "../utils/data/Data";
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const DepartmentsPage: React.FC = ()=>{
    const [selectedFacility, setSelectedFacility] = useState<Facility>()
    return <>
    <main className="main-content position-relative border-radius-lg ">
        <NavBar />
        <Container className="py-4" fluid>
            <Row className="mt-4">
                <Col xs={12} sm={12} md={12}>
                    <div className="card z-index-2">
                        <div className="card-body p-3">
                            <Container>
                                <Row className="my-2">
                                    <Col>
                                        <div className="logo-area" style={{backgroundImage: "url('/assets/img/logos/Ghana_Health_Service_(GHS)_logo.jpg')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
                                        </div>
                                    </Col>
                                </Row>
                                <Row className="my-2">
                                    <Col>
                                        <p>
                                            Ghana Health Service
                                        </p>
                                        <p>
                                            Liberty Road, Accra.
                                            <br/>
                                            0247884992
                                            <br />
                                            ghanahealthservice@gmail.com
                                        </p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="mt-4">
                <Col xs={12} sm={12} md={12}>
                    <div className="card z-index-2">
                        <div className="card-body p-3">
                            <Row>
                                <Col style={{justifyContent: 'space-between', display: 'flex'}}>
                                    <h4>Facilities</h4>
                                    <h4>Add Facility</h4>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="my-4">
                                <Splide aria-label="Facilities" options={{ type: 'loop', perPage: 5, rewind: true, gap: 10}}>
                                {
                                    facilities.map((fc: Facility)=>{
                                        return <SplideSlide onClick={()=>setSelectedFacility(fc)} >
                                                    {
                                                        <div className="facility-box">{ fc.FacilityName }</div>
                                                    }
                                                </SplideSlide>
                                    })
                                }
                                </Splide>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                { selectedFacility != undefined ? <Col xs={12} sm={12} md={12} className="mt-4">
                    <div className="card z-index-2">
                        <h6>Departments</h6>
                    {
                        selectedFacility?.Departments.map((dp: DepartmentT)=>{
                            return <div className="col"><div className="row">
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
                                                users.map((usr: UserT)=>{
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
                                    </div></div>
                        })
                    }
                    </div>
                </Col> : <></> }
            </Row>
        </Container>
    </main>
    </>
}

export default DepartmentsPage