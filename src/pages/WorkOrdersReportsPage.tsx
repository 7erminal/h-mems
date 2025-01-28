import React from "react";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import WorkOrderReportGraphs from "./components/WorkOrderReportGraphs";
import Stats from "./components/Stats";

const WorkOrdersReportsPage: React.FC = ()=>{

    return <>
    <div className="min-height-300 bg-primary position-absolute w-100"></div>
  <SideBar />
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