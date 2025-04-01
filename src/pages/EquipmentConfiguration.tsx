import React, { useContext, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import QuickLinkCard2 from "./widgets/QuickLinkCard2";
import AddCostCenter from "./components/AddCostCenter";
import AddDeviceInclusion from "./components/AddDeviceInclusion";
import AddEquipmentClass from "./components/AddEquipmentClass";
import EquipmentContext from "../resources/contexts/EquipmentContext";
import ViewCostCentersModal from "./components/ViewCostCentersModal";
import ViewDeviceInclusionModal from "./components/ViewDeviceInclusions";
import ViewEquipmentClassesModal from "./components/ViewEquipmentClassesModal";
import ApplicationContext from "../resources/contexts/ApplicationContext";
import { get } from "http";

const EquipmentConfiguration: React.FC = () => {
    const equipmentContext = useContext(EquipmentContext);
    const appContext = useContext(ApplicationContext);
    
    const [showAddCostCenter, setShowAddCostCenter] = useState(false)
    const [showAddEquipmentClass, setShowAddEquipmentClass] = useState(false)
    const [showAddDeviceInclusion, setShowAddDeviceInclusion] = useState(false)

    const [showCostCenters, setCostCenters] = useState(false)
    const [showDeviceInclusions, setShowDeviceInclusions] = useState(false)
    const [showEquipmentClasses, setShowEquipmentClasses] = useState(false)

    useEffect(()=>{
        getCostCenters()
        getEquipmentClasses()
        getDeviceInclusions()
    },[])
    const getCostCenters = async () =>{
        await equipmentContext?.getCostCenters()
    }
    const getEquipmentClasses = async () =>{
        await equipmentContext?.getEquipmentClasses()
    }
    const getDeviceInclusions = async () =>{
        await equipmentContext?.getDeviceInclusions()
    }

    const handleShowAddCostCenter = ()=>{
        setShowAddCostCenter(true)
        handleCloseCostCenters()
    }
    const handleCloseAddCostCenter = ()=>setShowAddCostCenter(false)

    const handleShowAddEquipmentClass = ()=>{
        setShowAddEquipmentClass(true)
        handleCloseEquipmentClasses
    }
    const handleCloseAddEquipmentClass = ()=>setShowAddEquipmentClass(false)

    const handleShowAddDeviceInclusion = ()=>{
        setShowAddDeviceInclusion(true)
        handleCloseDeviceInclusions()
    }
    const handleCloseAddDeviceInclusion = ()=>setShowAddDeviceInclusion(false)

    const handleShowCostCenters = ()=>setCostCenters(true)
    const handleCloseCostCenters = ()=>setCostCenters(false)

    const handleShowEquipmentClasses = ()=>setShowEquipmentClasses(true)
    const handleCloseEquipmentClasses = ()=>setShowEquipmentClasses(false)

    const handleShowDeviceInclusions = ()=>setShowDeviceInclusions(true)
    const handleCloseDeviceInclusions = ()=>setShowDeviceInclusions(false)

    const addCostCenter = async ()=>{
        appContext?.loadingShow()
        var resp = await equipmentContext?.addCostCenter()
        appContext?.loadingClose()
        if(resp==true){
            getCostCenters()
            appContext?.setErrorMessage("Cost Center added successfully")
            handleCloseAddCostCenter()
        } else {
            appContext?.setErrorMessage("Error adding cost center")
        }
    }
    const addEquipmentClass = async ()=>{
        appContext?.loadingShow()
        var resp = await equipmentContext?.addEquipmentClass()
        appContext?.loadingClose()
        if(resp==true){
            getEquipmentClasses()
            appContext?.setErrorMessage("Equipment Class added successfully")
            handleCloseAddEquipmentClass()
        } else {
            appContext?.setErrorMessage("Error adding equipment class")
        }
    }
    const addDeviceInclusion = async ()=>{
        appContext?.loadingShow()
        var resp = await equipmentContext?.addDeviceInclusion()
        appContext?.loadingClose()
        if(resp==true){
            getDeviceInclusions()
            appContext?.setErrorMessage("Device Inclusion added successfully")
            handleCloseAddDeviceInclusion()
        } else {
            appContext?.setErrorMessage("Error adding device inclusion")
        }
    }

    return (
        <>
            <main className="main-content position-relative border-radius-lg ">
            <NavBar />
            <div className="container-fluid py-4">
            <div className="row mt-4">
                    <div className="col-12">
                        <div className="card mb-4">
                            <div className="card-body p-3">
                                <div className="row">
                                    <div className="col-lg-4 col-sm-6 card-right">
                                        <div className="occupy-card" onClick={()=>handleShowCostCenters()}></div>
                                        <QuickLinkCard2 action={()=>handleShowAddCostCenter()} name="Cost Center(s)" count={equipmentContext?.costCenters.length ?? 0} icon="fluent:add-20-filled" />
                                    </div>
                                    <div className="col-lg-4 col-sm-6 card-right" >
                                        <div className="occupy-card" onClick={()=>handleShowEquipmentClasses()}></div>
                                        <QuickLinkCard2 action={()=>handleShowAddEquipmentClass()} name="Equipment Classes" count={equipmentContext?.equipmentClasses.length ?? 0} icon="fluent:add-20-filled" />
                                    </div>
                                    <div className="col-lg-4 col-sm-12 card-left" >
                                        <div className="occupy-card" onClick={()=>handleShowDeviceInclusions()}></div>
                                        <QuickLinkCard2 action={()=>handleShowAddDeviceInclusion()} name="Device(s)" count={equipmentContext?.deviceInclusions.length ?? 0} icon="fluent:add-20-filled" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </main>
            <AddCostCenter show={showAddCostCenter} handleClose={handleCloseAddCostCenter} toggle={addCostCenter} />
            <AddDeviceInclusion show={showAddDeviceInclusion} handleClose={handleCloseAddDeviceInclusion} toggle={addDeviceInclusion} />    
            <AddEquipmentClass show={showAddEquipmentClass} handleClose={handleCloseAddEquipmentClass} toggle={addEquipmentClass} />

            <ViewCostCentersModal show={showCostCenters} handleClose={handleCloseCostCenters} />
            <ViewDeviceInclusionModal show={showDeviceInclusions} handleClose={handleCloseDeviceInclusions} />
            <ViewEquipmentClassesModal show={showEquipmentClasses} handleClose={handleCloseEquipmentClasses} />

        </>
    );
}

export default EquipmentConfiguration;