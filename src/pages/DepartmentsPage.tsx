import React, { useContext, useState, useEffect } from "react"
import { Department, Hospital } from "../utils/types/Types";
import NavBar from "./components/NavBar";
import ApplicationContext from "../resources/contexts/ApplicationContext";
import InstitutionContext from "../resources/contexts/InstitutionContext";
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import QuickLinkCard2 from "./widgets/QuickLinkCard2";
import AddDepartment from "./components/AddDepartment";
import ItemSelectionList from "./components/ItemSelectionList";

const DepartmentsPage: React.FC = ()=>{
    const appContext = useContext(ApplicationContext);
    const institutionContext = useContext(InstitutionContext);

    const [showAddDepartment, setShowAddDepartment] = useState(false)
    const [showHospitalList, setShowHospitalList] = useState(false)

    const handleShowAddDepartment = ()=>setShowAddDepartment(true)
    const handleCloseAddDepartment = ()=>setShowAddDepartment(false)

    const handleShowHospitalList = ()=>setShowHospitalList(true)
    const handleCloseHospitalList = ()=>setShowHospitalList(false)


    useEffect(()=>{
            getInstitutions()
        },[])
    
        const getInstitutions = async () =>{
            appContext?.loadingShow()
            await institutionContext?.getDepartments()
            appContext?.loadingClose()
        }

        const toggleInstitutionModals = async (action: string, module: string)=>{
            if(action=="ADD"){
                if(module=="ADDDEPT"){
                    appContext?.loadingShow()
                    var resp = await institutionContext?.addDepartment()
                    appContext?.loadingClose()
    
                    if(resp==true){
                        institutionContext?.getDepartments()
                        handleCloseAddDepartment()
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
                    } else {
                        appContext?.setShowError(true)
                    }
                    
                }
            }
        }

        const addToHospital = async (hospitalId: string)=>{
            var p = institutionContext?.hospitals.filter((hosp: Hospital)=>{
                return hosp.id==hospitalId
            })

            console.log("Permission is ")
            console.log(p)
            p != undefined ? institutionContext?.setSelectedHospital(p[0]) : ''

            toggleInstitutionModals("ADD", "ADDDEPTHOSP")
        }

    return <>
    <main className="main-content position-relative border-radius-lg ">
        <NavBar />
        <div className="container-fluid py-4">
            
            {institutionContext != undefined && institutionContext?.institutions.length > 0 ? <div className="row mt-4">
                <div className="col-12">
                <div className="col-12">
                        <div className="card mb-4">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-lg-3 col-sm-6 card-left">
                                        <QuickLinkCard2 action={()=>handleShowAddDepartment()} name="Department(s)" count={institutionContext?.departments.length ?? 0} icon="fluent:add-20-filled" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="card mb-4">
                    <div className="card-body px-0 pt-0 pb-2" style={{paddingTop: '20px', paddingBottom: '20px'}}>
                        <div className="table-responsive p-0">
                            <table className="table align-items-center justify-content-center mb-0">
                            <thead>
                                <tr>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Description</th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Status</th>
                                <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Created Date</th>
                                <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    institutionContext != undefined && institutionContext?.departments.length > 0 ? institutionContext?.departments.reverse().map((dpt: Department, i: number)=>{
                                        return <tr key={i}>
                                                    <td>
                                                        <div className="d-flex px-2">
                                                        <div>
                                                            <img src="/assets/img/logos/h-mems.png" className="avatar avatar-sm rounded-circle me-2" alt="spotify" />
                                                        </div>
                                                        <div className="my-auto">
                                                            <h6 className="mb-0 text-sm">{dpt.name}</h6>
                                                        </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p className="text-sm font-weight-bold mb-0">{ dpt.description }</p>
                                                    </td>
                                                    <td className="align-middle text-center">
                                                        <div className="d-flex align-items-center justify-content-center">
                                                        <span className="me-2 text-xs font-weight-bold">{ dpt.status }</span>
                                                        {/* <div>
                                                            <div className="progress">
                                                            <div className="progress-bar bg-gradient-info" role="progressbar" style={{ width: '60%' }}></div>
                                                            </div>
                                                        </div> */}
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <span className="text-xs font-weight-bold">{ dpt.createdDate }</span>
                                                    </td>
                                                    <td className="align-middle">
                                                        <button className="btn btn-link text-secondary mb-0" onClick={ ()=>{institutionContext?.setSelectedDepartment(dpt); handleShowHospitalList(); }}>
                                                        <i className="fa fa-ellipsis-v text-xs">Add to hospital</i>
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
        <AddDepartment show={showAddDepartment} handleClose={handleCloseAddDepartment} toggle={toggleInstitutionModals} />
        <ItemSelectionList show={showHospitalList} handleClose={handleCloseHospitalList} title="Select Hospital" action={addToHospital} items={institutionContext?.hospitals} />
    </>
}

export default DepartmentsPage