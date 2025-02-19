import React, { useContext, useEffect, useState } from "react"
import NavBar from "./components/NavBar";
import { Col, Container, Row } from "react-bootstrap";
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import InstitutionContext from "../resources/contexts/InstitutionContext";
import { Hospital } from "../utils/types/Types";
import { Link, useNavigate } from "react-router-dom";
import AddHospital1 from "./components/AddHospital1";
import AddHospital2 from "./components/AddHospital2";
import AddHospital3 from "./components/AddHospital3";
import AddHospital4 from "./components/AddHospital4";
import AddHospital5 from "./components/AddHospital5";
import ApplicationContext from "../resources/contexts/ApplicationContext";
// @ts-ignore
import Api from '../apis/apis';
// @ts-ignore
import { ROUTES } from '../apis/bkEndpoints'

const ViewInstitutionPage: React.FC = ()=>{
    const institutionContext = useContext(InstitutionContext);
    const appContext = useContext(ApplicationContext);
    const navigate = useNavigate()

    const [hospitals, setHospitals] = useState<Array<Hospital>>([])
    
    const [showAddHospital1, setShowAddHospital1] = useState(false)
    const [showAddHospital2, setShowAddHospital2] = useState(false)
    const [showAddHospital3, setShowAddHospital3] = useState(false)
    const [showAddHospital4, setShowAddHospital4] = useState(false)
    const [showAddHospital5, setShowAddHospital5] = useState(false)

    const handleShowAddHospital1 = ()=>{
        institutionContext?.setHospitalInstitution(institutionContext?.selectedInstitution?.id ?? "")
        setShowAddHospital1(true);
    }
    const handleCloseAddHospital1 = ()=>setShowAddHospital1(false)

    const handleShowAddHospital2 = ()=>setShowAddHospital2(true)
    const handleCloseAddHospital2 = ()=>setShowAddHospital2(false)

    const handleShowAddHospital3 = ()=>setShowAddHospital3(true)
    const handleCloseAddHospital3 = ()=>setShowAddHospital3(false)

    const handleShowAddHospital4 = ()=>setShowAddHospital4(true)
    const handleCloseAddHospital4 = ()=>setShowAddHospital4(false)

    const handleShowAddHospital5 = ()=>setShowAddHospital5(true)
    const handleCloseAddHospital5 = ()=>setShowAddHospital5(false)

    useEffect(()=>{
        getHospitals()
    },[])


    const getHospitals = async ()=>{
            let resp = false;
            setHospitals([])
    
            appContext?.loadingShow()
            await new Api().get_(ROUTES.getInstitutionHospitalsApi(institutionContext?.selectedInstitution?.id)).then((response: any)=>{
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
                    setHospitals([...response.data.result])
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

    const toggleInstitutionModals = async (action: string, module: string)=>{
        if(action=="ADD"){

            if(module=="ADDHOSP1"){
                handleCloseAddHospital1()
                handleShowAddHospital2()
            }
            if(module=="ADDHOSP2"){
                handleCloseAddHospital2()
                handleShowAddHospital3()
            }
            if(module=="ADDHOSP3"){
                handleCloseAddHospital3()
                handleShowAddHospital4()
            }
            if(module=="ADDHOSP4"){
                handleCloseAddHospital4()
                handleShowAddHospital5()
            }
            if(module=="ADDHOSP5"){
                appContext?.loadingShow()
                var resp = await institutionContext?.addHospital()
                appContext?.loadingClose()

                if(resp==true){
                    getHospitals()
                    handleCloseAddHospital5()
                } else {
                    appContext?.setShowError(true)
                }
                
            }
        }
    }
    
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
                                            { institutionContext?.selectedInstitution?.name }
                                        </p>
                                        <p>
                                        { institutionContext?.selectedInstitution?.address?.address }
                                            <br/>
                                            { institutionContext?.selectedInstitution?.contact?.phoneNumber }
                                            <br />
                                            { institutionContext?.selectedInstitution?.contact?.email }
                                        </p>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                </Col>
            </Row>

            <div className="row mt-4">
                <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-body p-3">
                            <div className="row">
                                <Link to="#" className="col-lg-6 col-sm-6 card-right" onClick={()=>handleShowAddHospital1()}>
                                    <h6>Add Hospital</h6>
                                </Link>
                                <Link to="#" className="col-lg-6 col-sm-6 card-left" onClick={()=>{}}>
                                    <h6>Update Hospital</h6>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            { institutionContext != undefined && hospitals.length > 0 ? <div className="row mt-4">
                                <div className="col-12">
                                <div className="card mb-4">
                                    <div className="card-body px-0 pt-0 pb-2" style={{paddingTop: '20px', paddingBottom: '20px'}}>
                                        <div className="table-responsive p-0">
                                            <table className="table align-items-center justify-content-center mb-0">
                                            <thead>
                                                <tr>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Email</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Phone Number</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Status</th>
                                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Created Date</th>
                                                <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    hospitals != undefined && hospitals.length > 0 ? hospitals.map((hosp: Hospital, i: number)=>{
                                                        return <tr key={i}>
                                                                    <td>
                                                                        <div className="d-flex px-2">
                                                                        {/* <div>
                                                                            <img src="../assets/img/small-logos/logo-spotify.svg" class="avatar avatar-sm rounded-circle me-2" alt="spotify">
                                                                        </div> */}
                                                                        <div className="my-auto">
                                                                            <h6 className="mb-0 text-sm">{hosp.name}</h6>
                                                                        </div>
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <p className="text-sm font-weight-bold mb-0">{ hosp.contact?.email }</p>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-xs font-weight-bold">{ hosp.contact?.phoneNumber }</span>
                                                                    </td>
                                                                    <td className="align-middle text-center">
                                                                        <div className="d-flex align-items-center justify-content-center">
                                                                        <span className="me-2 text-xs font-weight-bold">{ hosp.status }</span>
                                                                        {/* <div>
                                                                            <div className="progress">
                                                                            <div className="progress-bar bg-gradient-info" role="progressbar" style={{ width: '60%' }}></div>
                                                                            </div>
                                                                        </div> */}
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <span className="text-xs font-weight-bold">{ hosp.createdDate }</span>
                                                                    </td>
                                                                    <td className="align-middle">
                                                                        <button className="btn btn-link text-secondary mb-0" onClick={()=>{institutionContext?.setSelectedHospital(hosp); navigate("/2/view-hospital")}}>
                                                                        <i className="fa fa-ellipsis-v text-xs">View</i>
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                    }) : ''
                                                }
                                            </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div> : ""
                    }
        </Container>
    </main>

            <AddHospital1 show={showAddHospital1} handleClose={handleCloseAddHospital1} toggle={toggleInstitutionModals} />
            <AddHospital2 show={showAddHospital2} handleClose={handleCloseAddHospital2} toggle={toggleInstitutionModals} />
            <AddHospital3 show={showAddHospital3} handleClose={handleCloseAddHospital3} toggle={toggleInstitutionModals} />
            <AddHospital4 show={showAddHospital4} handleClose={handleCloseAddHospital4} toggle={toggleInstitutionModals} />
            <AddHospital5 show={showAddHospital5} handleClose={handleCloseAddHospital5} toggle={toggleInstitutionModals} />
    </>
}

export default ViewInstitutionPage