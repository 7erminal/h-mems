import React from "react";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import QuickLinkCardMain from "./widgets/QuickLinkCardMain";
import WorkOrderReportGraphs from "./components/WorkOrderReportGraphs";
import EquipmentReportGraphs from "./components/EquipmentReportGraphs";

const HomePage: React.FC = ()=>{

    return <>
    <div className="min-height-300 bg-primary position-absolute w-100"></div>
  <SideBar />
  <main className="main-content position-relative border-radius-lg ">
    <NavBar />
    <div className="container-fluid py-4">
    <Stats />
    <QuickLinkCardMain />
    <WorkOrderReportGraphs />
      <EquipmentReportGraphs />
      <div className="row mt-4">
        {/* <div className="col-3">
            <QuickLinkCard title="Equipment Library" icon="flat-color-icons:steam" onClick={()=>onLinkClick('/equipment-library')} />
        </div>
        <div className="col-3">
            <QuickLinkCard title="Maintenance Contracts" icon="flat-color-icons:reading-ebook" onClick={()=>onLinkClick('/equipment-listing')} />
        </div>
        <div className="col-3">
            <QuickLinkCard title="Work Orders" icon="skill-icons:workers-light" onClick={()=>onLinkClick('/work-orders')} />
        </div>
        <div className="col-3">
            <QuickLinkCard title="Reports" icon="flat-color-icons:statistics" onClick={()=>onLinkClick('/clinical-engineering-report')} />
        </div>
        <div className="col-3">
            <QuickLinkCard title="Staff Management" icon="fa:users" onClick={()=>onLinkClick('/user-management')} />
        </div>
        <div className="col-3">
            <QuickLinkCard title="Cost Management" icon="flat-color-icons:money-transfer" onClick={()=>onLinkClick('/user-management')} />
        </div>
        <div className="col-3">
            <QuickLinkCard title="System Configurations" icon="fluent-emoji-flat:japanese-application-button" onClick={()=>onLinkClick('/user-management')} />
        </div>
        <div className="col-3">
            <QuickLinkCard title="Third Parties" icon="basil:other-1-outline" onClick={()=>onLinkClick('/user-management')} />
        </div> */}
        {/* <div className="col-3">
            <QuickLinkCard title="Preventative Maintenance (PM)" icon="vscode-icons:file-type-config" onClick={()=>onLinkClick('/preventative-maintenance')} />
        </div> */}
      </div>
      {/* <div className="row mt-4" style={{width: '100%'}}>
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h6>Equipment Inventory List Report</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <EquipmentListTable equipment={availableEquipment} />
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  </main>
    </>
}

export default HomePage