import React, { useContext, useEffect, useState } from "react"
import NavBar from "./components/NavBar";
import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import InstitutionContext from "../resources/contexts/InstitutionContext";
import { Department } from "../utils/types/Types";
import ApplicationContext from "../resources/contexts/ApplicationContext";
// @ts-ignore
import Api from '../apis/apis';
// @ts-ignore
import { ROUTES } from '../apis/bkEndpoints'
import Pill from "./widgets/Pill";

const ViewHospitalPage: React.FC = ()=>{
    const institutionContext = useContext(InstitutionContext);
    const appContext = useContext(ApplicationContext);

    const [departments, setDepartments] = useState<Array<Department>>([])
    const [hospitalDepartments, setHospitalDepartments] = useState<Array<Department>>([])

    useEffect(()=>{
        getDepartments()
        getHospitalDepartments()
    },[])


    const getDepartments = async ()=>{
            let resp = false;
            setDepartments([])
    
            // appContext?.loadingShow()
            await new Api().get_(ROUTES.getDepartmentsApi).then((response: any)=>{
                // appContext?.loadingClose()
                console.log("Response is ...")
                console.log(response)
    
                if(response.status==200){
                  if(response.data.isSuccess == true){
                    console.log("Response for departments is ")
                    console.log(response.data.result)
                    // for(var i=0; i<response.data.result.length; i++){
                    //     console.log("Each institution to be inserted is ")
                    //     console.log(response.data.result[i])
                    //     console.log(institutions)
                    //     setInstitutions((prevList)=>[...prevList, response.data.result[i]])
                    // }
                    setDepartments([...response.data.result])
                    resp = true
                  } else {
                    appContext?.setErrorMessage("Error getting hospitals: "+response.data.errorMessage)
                }
                } else {
                    console.log("An error occurred adding institution. 200 not returned.")
                    appContext?.setErrorMessage("Error adding institution")
                }
              }).catch((error: any) => {
              // appContext?.setIsLoading(false)
                appContext?.loadingClose()
                console.log("Error returned is ... ")
                console.log(error)
                appContext?.setErrorMessage("Error getting hospitals")
            })
    
            return resp;
        }

        const getHospitalDepartments = async ()=>{
            let resp = false;
            institutionContext?.setHospitalId(institutionContext?.selectedHospital?.id ?? "")
            setHospitalDepartments([])
    
            appContext?.loadingShow()
            await new Api().get_(ROUTES.getHospitalDepartmentsApi(institutionContext?.selectedHospital?.id)).then((response: any)=>{
                appContext?.loadingClose()
                console.log("Response is ...")
                console.log(response)
    
                if(response.status==200){
                  if(response.data.isSuccess == true){
                    console.log("Response for hospitals is ")
                    console.log(response.data.result)
                    // for(var i=0; i<response.data.result.length; i++){
                    //     console.log("Each institution to be inserted is ")
                    //     console.log(response.data.result[i])
                    //     console.log(institutions)
                    //     setInstitutions((prevList)=>[...prevList, response.data.result[i]])
                    // }
                    setHospitalDepartments([...response.data.result.departments])
                    resp = true
                  } else {
                    appContext?.setErrorMessage("Error getting hospitals: "+response.data.errorMessage)
                }
                } else {
                    console.log("An error occurred adding institution. 200 not returned.")
                    appContext?.setErrorMessage("Error adding institution")
                }
              }).catch((error: any) => {
              // appContext?.setIsLoading(false)
                appContext?.loadingClose()
                console.log("Error returned is ... ")
                console.log(error)
                appContext?.setErrorMessage("Error getting hospitals")
            })
    
            return resp;
        }

    const addOrRemoveDepartment = async (action: string, departmentid: string)=>{
        console.log("Adding department "+departmentid)
        if(action=="ADD"){

            institutionContext?.setDepartmentId(departmentid)
            var p = institutionContext?.departments.filter((dpt: Department)=>{
                return dpt.id==departmentid
            })

            console.log("Department is ")
            console.log(p)
            p != undefined ? institutionContext?.setSelectedDepartment(p[0]) : ''
            p != undefined ? institutionContext?.setDepartmentId(p[0].id) : ''
            
            appContext?.loadingShow()
            setTimeout(async function () {
                //your code to be executed after 1 second
                var resp = await institutionContext?.addDepartmentToHospital()
                appContext?.loadingClose()
                if(resp==true){
                    getHospitalDepartments()
                    // handleCloseAddDepartmentToHospital()
                } else {
                    appContext?.setShowError(true)
                }
              }, 1000);
            

            
        }
    }
    
    return <>
    <main className="main-content position-relative border-radius-lg ">
        <NavBar />
        <Container className="py-4" fluid>
            <Row className="mt-4">
                <Col xs={12} sm={12} md={6}>
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
                                            <b>{ institutionContext?.selectedHospital?.institutionName }</b>
                                        </p>
                                        <p>
                                            { institutionContext?.selectedHospital?.name }
                                        </p>
                                        <p>
                                        { institutionContext?.selectedHospital?.address?.address }
                                            <br/>
                                            { institutionContext?.selectedHospital?.contact?.phoneNumber }
                                            <br />
                                            { institutionContext?.selectedHospital?.contact?.email }
                                        </p>
                                    </Col>
                                </Row>
                                <Row className="my-4">
                                    <div className="pill-holder">
                                    {
                                        hospitalDepartments != undefined && hospitalDepartments.length > 0 ? hospitalDepartments.map((dept: Department, i: number)=>{
                                            return <Pill key={i} name={dept.name} onClick={()=>{}} id={dept.id} />
                                        }) : ''
                                    }
                                    </div>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Col>
            
            
            { institutionContext != undefined && departments.length > 0 ?
                                <div className="col-6">
                                <div className="card mb-4">
                                    <div className="card-body px-0 pt-0 pb-2">
                                        <div className="pill-holder">
                                        {
                                            departments != undefined && departments.length > 0 ? departments.map((dept: Department, i: number)=>{
                                                return <Pill key={i} name={dept.name} onClick={addOrRemoveDepartment} id={dept.id} />
                                            }) : ''
                                        }
                                        </div>
                                    </div>
                                </div>
                                </div> : ""
                    }
                    </Row>
        </Container>
    </main>
    </>
}

export default ViewHospitalPage