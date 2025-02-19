import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import WorkOrderReportGraphs from "./components/WorkOrderReportGraphs";
import EquipmentReportGraphs from "./components/EquipmentReportGraphs";


const ClinicalEngineeringMonthlyReport: React.FC = ()=>{
  
  return <>
  <main className="main-content position-relative border-radius-lg ">
  <NavBar />
    <div className="container-fluid py-4">
        <Stats />
      <WorkOrderReportGraphs />
      <EquipmentReportGraphs />
      <Footer />
    </div>
  </main>
    </>
}

export default ClinicalEngineeringMonthlyReport