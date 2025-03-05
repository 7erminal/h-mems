import React, { useContext, useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import { useNavigate } from "react-router-dom";
import ApplicationContext from "../resources/contexts/ApplicationContext";
import AddHospital1 from "./components/AddHospital1";
import AddHospital2 from "./components/AddHospital2";
import AddHospital3 from "./components/AddHospital3";
import AddHospital4 from "./components/AddHospital4";
import AddHospital5 from "./components/AddHospital5";
import InstitutionContext from "../resources/contexts/InstitutionContext";
import { Hospital } from "../utils/types/Types";
import AddDepartmentToHospital from "./components/AddDepartmentToHospital";
import QuickLinkCard2 from "./widgets/QuickLinkCard2";

const Hospitals: React.FC = ()=>{
    const navigate = useNavigate()
    const appContext = useContext(ApplicationContext);
    const institutionContext = useContext(InstitutionContext);

    const [showAddHospital1, setShowAddHospital1] = useState(false)
    const [showAddHospital2, setShowAddHospital2] = useState(false)
    const [showAddHospital3, setShowAddHospital3] = useState(false)
    const [showAddHospital4, setShowAddHospital4] = useState(false)
    const [showAddHospital5, setShowAddHospital5] = useState(false)

    const [showAddDepartmentToHospital, setShowAddDepartmentToHospital] = useState(false)


    // Hospitals
    const handleShowAddHospital1 = ()=>setShowAddHospital1(true)
    const handleCloseAddHospital1 = ()=>setShowAddHospital1(false)

    const handleShowAddHospital2 = ()=>setShowAddHospital2(true)
    const handleCloseAddHospital2 = ()=>setShowAddHospital2(false)

    const handleShowAddHospital3 = ()=>setShowAddHospital3(true)
    const handleCloseAddHospital3 = ()=>setShowAddHospital3(false)

    const handleShowAddHospital4 = ()=>setShowAddHospital4(true)
    const handleCloseAddHospital4 = ()=>setShowAddHospital4(false)

    const handleShowAddHospital5 = ()=>setShowAddHospital5(true)
    const handleCloseAddHospital5 = ()=>setShowAddHospital5(false)

    const handleShowAddDepartmentToHospital = ()=>setShowAddDepartmentToHospital(true)
    const handleCloseAddDepartmentToHospital = ()=>setShowAddDepartmentToHospital(false)

    useEffect(()=>{
        getHospitals()
    },[])

    const getHospitals = async () =>{
        appContext?.loadingShow()
        await institutionContext?.getHospitals()
        appContext?.loadingClose()
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
                    institutionContext?.getHospitals()
                    handleCloseAddHospital5()
                } else {
                    appContext?.setShowError(true)
                }
                
            }


            if(module=="ADDDEPTHOSP"){
                appContext?.loadingShow()
                var resp = await institutionContext?.addDepartmentToHospital()
                appContext?.loadingClose()

                if(resp==true){
                    institutionContext?.getInstitutions()
                    handleCloseAddDepartmentToHospital()
                } else {
                    appContext?.setShowError(true)
                }
                
            }
        }
    }
    return <>
            <main className="main-content position-relative border-radius-lg ">
            <NavBar />
            <div className="container-fluid py-4">
                <div className="row mt-4">
                    <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col-lg-4 col-sm-12 card-right">
                                    <QuickLinkCard2 action={()=>handleShowAddHospital1()} name="Hospital(s)" count={institutionContext?.hospitals.length ?? 0} icon="fluent:add-20-filled" />
                                </div>
                                <div className="col-lg-4 col-sm-12 card-right">
                                    <QuickLinkCard2 action={()=>handleShowAddHospital1()} name="Update Hospital" count={undefined} icon="fluent:add-20-filled" />
                                    <h6>Update Hospital</h6>
                                </div>
                                <div className="col-lg-4 col-sm-12 card-left">
                                    <QuickLinkCard2 action={()=>handleShowAddDepartmentToHospital()} name="Add Department to Hospital" count={undefined} icon="fluent:add-20-filled" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                {institutionContext != undefined && institutionContext?.hospitals.length > 0 ? <div className="row mt-4">
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
                                        institutionContext != undefined && institutionContext?.hospitals.length > 0 ? institutionContext?.hospitals.reverse().map((hosp: Hospital, i: number)=>{
                                            return <tr key={i}>
                                                        <td>
                                                            <div className="d-flex px-2">
                                                            <div>
                                                                <img src="/assets/img/logos/h-mems.png" className="avatar avatar-sm rounded-circle me-2" alt="spotify" />
                                                            </div>
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
                                                            <button className="btn btn-link text-secondary mb-0" onClick={ ()=>{institutionContext?.setSelectedHospital(hosp); navigate("/2/view-hospital") }}>
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
            </div>
            </main>
            {/* <AddInstitution1 show={showAddInstitution1} handleClose={handleCloseAddInstitution1} toggle={toggleInstitutionModals} />
            <AddInstitution2 show={showAddInstitution2} handleClose={handleCloseAddInstitution2} toggle={toggleInstitutionModals} />
            <AddInstitution3 show={showAddInstitution3} handleClose={handleCloseAddInstitution3} toggle={toggleInstitutionModals} />
            <AddInstitution4 show={showAddInstitution4} handleClose={handleCloseAddInstitution4} toggle={toggleInstitutionModals} />
            <AddInstitution5 show={showAddInstitution5} handleClose={handleCloseAddInstitution5} toggle={toggleInstitutionModals} /> */}

            <AddHospital1 show={showAddHospital1} handleClose={handleCloseAddHospital1} toggle={toggleInstitutionModals} />
            <AddHospital2 show={showAddHospital2} handleClose={handleCloseAddHospital2} toggle={toggleInstitutionModals} />
            <AddHospital3 show={showAddHospital3} handleClose={handleCloseAddHospital3} toggle={toggleInstitutionModals} />
            <AddHospital4 show={showAddHospital4} handleClose={handleCloseAddHospital4} toggle={toggleInstitutionModals} />
            <AddHospital5 show={showAddHospital5} handleClose={handleCloseAddHospital5} toggle={toggleInstitutionModals} />

            {/* <AddDepartment show={showAddDepartment} handleClose={handleCloseAddDepartment} toggle={toggleInstitutionModals} /> */}

            <AddDepartmentToHospital show={showAddDepartmentToHospital} handleClose={handleCloseAddDepartmentToHospital} toggle={toggleInstitutionModals} />
        </>
}

export default Hospitals