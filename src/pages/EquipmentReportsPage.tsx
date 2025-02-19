import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import EquipmentStats from "./components/EquipmentStats";
import { equipment } from "../utils/data/Data";
import { Device } from "../utils/types/Types";
import EquipmentReportGraphs from "./components/EquipmentReportGraphs";
import Footer from "./components/Footer";

const EquipmentReportsPage: React.FC = ()=>{
    const [availableEquipment, setAvailableEquipment] = useState<Array<Device>>()
    
    useEffect(()=>{
        setAvailableEquipment(equipment);
    },[])

    return <>
  <main className="main-content position-relative border-radius-lg ">
  <NavBar />
    <div className="container-fluid py-4">
    <EquipmentStats 
                    total={availableEquipment?.length} 
                    totalActive={availableEquipment?.filter((eq: Device)=> eq.Status.StatusId = 1).length}
                        oldE={availableEquipment?.length} 
                        newE={availableEquipment?.length}
                />
      <EquipmentReportGraphs />
      <Footer />
    </div>
  </main>
    </>
}

export default EquipmentReportsPage