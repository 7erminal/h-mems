import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import WorkOrderReportGraphs from "./components/WorkOrderReportGraphs";
import Stats from "./components/Stats";

const WorkOrdersReportsPage: React.FC = ()=>{

    return <>
  <main className="main-content position-relative border-radius-lg ">
  <NavBar />
    <div className="container-fluid py-4">
    <Stats />
      <WorkOrderReportGraphs />
      <Footer />
    </div>
  </main>
    </>
}

export default WorkOrdersReportsPage