import React, { useContext, useState } from "react";
import NavBar from "./components/NavBar";
import { Link } from "react-router-dom";
import ApplicationContext from "../resources/contexts/ApplicationContext";
import AddInstitution1 from "./components/AddInstitution1";
import AddInstitution2 from "./components/AddInstitution2";
import AddInstitution3 from "./components/AddInstitution3";
import AddInstitution4 from "./components/AddInstitution4";
import AddInstitution5 from "./components/AddInstitution5";
import AddHospital1 from "./components/AddHospital1";
import AddHospital2 from "./components/AddHospital2";
import AddHospital3 from "./components/AddHospital3";
import AddHospital4 from "./components/AddHospital4";
import AddHospital5 from "./components/AddHospital5";
import AddDepartment from "./components/AddDepartment";

const UserManagementPage: React.FC = ()=>{
    const appContext = useContext(ApplicationContext);
    const [showAddInstitution1, setShowAddInstitution1] = useState(false)
    const [showAddInstitution2, setShowAddInstitution2] = useState(false)
    const [showAddInstitution3, setShowAddInstitution3] = useState(false)
    const [showAddInstitution4, setShowAddInstitution4] = useState(false)
    const [showAddInstitution5, setShowAddInstitution5] = useState(false)

    const [showAddHospital1, setShowAddHospital1] = useState(false)
    const [showAddHospital2, setShowAddHospital2] = useState(false)
    const [showAddHospital3, setShowAddHospital3] = useState(false)
    const [showAddHospital4, setShowAddHospital4] = useState(false)
    const [showAddHospital5, setShowAddHospital5] = useState(false)

    const [showAddDepartment, setShowAddDepartment] = useState(false)

    const handleShowAddInstitution1 = ()=>setShowAddInstitution1(true)
    const handleCloseAddInstitution1 = ()=>setShowAddInstitution1(false)

    const handleShowAddInstitution2 = ()=>setShowAddInstitution2(true)
    const handleCloseAddInstitution2 = ()=>setShowAddInstitution2(false)

    const handleShowAddInstitution3 = ()=>setShowAddInstitution3(true)
    const handleCloseAddInstitution3 = ()=>setShowAddInstitution3(false)

    const handleShowAddInstitution4 = ()=>setShowAddInstitution4(true)
    const handleCloseAddInstitution4 = ()=>setShowAddInstitution4(false)

    const handleShowAddInstitution5 = ()=>setShowAddInstitution5(true)
    const handleCloseAddInstitution5 = ()=>setShowAddInstitution5(false)


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


    const handleShowAddDepartment = ()=>setShowAddDepartment(true)
    const handleCloseAddDepartment = ()=>setShowAddDepartment(false)

    const toggleInstitutionModals = (action: string, module: string)=>{
        if(action=="ADD"){
            if(module=="ADDINST1"){
                handleCloseAddInstitution1()
                handleShowAddInstitution2()
            }
            if(module=="ADDINST2"){
                handleCloseAddInstitution2()
                handleShowAddInstitution3()
            }
            if(module=="ADDINST3"){
                handleCloseAddInstitution3()
                handleShowAddInstitution4()
            }
            if(module=="ADDINST4"){
                handleCloseAddInstitution4()
                handleShowAddInstitution5()
            }
            if(module=="ADDINST5"){
                handleCloseAddInstitution5()
            }

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
                handleCloseAddHospital5()
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
                                <Link to="#" className="col-lg-3 col-sm-6 card-right" onClick={()=>handleShowAddInstitution1()}>
                                    <h6>Add Institution</h6>
                                </Link>
                                <Link to="#" className="col-lg-3 col-sm-6 card-right" onClick={()=>handleShowAddHospital1()}>
                                    <h6>Add Hospital</h6>
                                </Link>
                                <Link to="#" className="col-lg-3 col-sm-6 card-left" onClick={()=>handleShowAddDepartment()}>
                                    <h6>Add Department</h6>
                                </Link>
                                <Link to="#" className="col-lg-3 col-sm-6 card-left" onClick={()=>appContext?.toggleMenu('departments','')}>
                                    <h6>Add Department to Hospital</h6>
                                </Link>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                
                <div className="row mt-4">
                    <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-body px-0 pt-0 pb-2">
                        
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </main>
            <AddInstitution1 show={showAddInstitution1} handleClose={handleCloseAddInstitution1} toggle={toggleInstitutionModals} />
            <AddInstitution2 show={showAddInstitution2} handleClose={handleCloseAddInstitution2} toggle={toggleInstitutionModals} />
            <AddInstitution3 show={showAddInstitution3} handleClose={handleCloseAddInstitution3} toggle={toggleInstitutionModals} />
            <AddInstitution4 show={showAddInstitution4} handleClose={handleCloseAddInstitution4} toggle={toggleInstitutionModals} />
            <AddInstitution5 show={showAddInstitution5} handleClose={handleCloseAddInstitution5} toggle={toggleInstitutionModals} />

            <AddHospital1 show={showAddHospital1} handleClose={handleCloseAddHospital1} toggle={toggleInstitutionModals} />
            <AddHospital2 show={showAddHospital2} handleClose={handleCloseAddHospital2} toggle={toggleInstitutionModals} />
            <AddHospital3 show={showAddHospital3} handleClose={handleCloseAddHospital3} toggle={toggleInstitutionModals} />
            <AddHospital4 show={showAddHospital4} handleClose={handleCloseAddHospital4} toggle={toggleInstitutionModals} />
            <AddHospital5 show={showAddHospital5} handleClose={handleCloseAddHospital5} toggle={toggleInstitutionModals} />

            <AddDepartment show={showAddDepartment} handleClose={handleCloseAddDepartment} toggle={toggleInstitutionModals} />
        </>
}

export default UserManagementPage