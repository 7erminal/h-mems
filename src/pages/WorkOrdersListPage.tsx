import React, { useContext, useEffect, useState } from "react";
import WorkOrderSideBar from "./components/WorkOrderSideBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// @ts-ignore
import Search from "./widgets/search/search.jsx";
import { Form } from "react-bootstrap";
import ApplicationContext from "../resources/contexts/ApplicationContext";
import AdvancedWorkOrdersSearch from "./components/AdvancedWorkOrdersSearch.js";
import WorkOrdersTable from "./components/WorkOrdersTable.js";
import { WorkOrder } from "../utils/types/Types.js";
import { workOrders } from "../utils/data/Data";

const WorkOrdersListing: React.FC = ()=>{
    const appContext = useContext(ApplicationContext);
    const [searchAdvanced, setSearchAdvanced] = useState(false)
    const [availableWorkOrders, setAvailableWorkOrders] = useState<Array<WorkOrder>>()

    useEffect(()=>{
        setAvailableWorkOrders(workOrders)
    },[])
    
    const handleClose = () => setSearchAdvanced(false);
    // const handleShow = () => setSearchAdvanced(true);

    const toggleAdvancedSearch = ()=>{
        setSearchAdvanced(!searchAdvanced)
    }

    useEffect(()=>{
        console.log("Filters are ...")
        console.log(appContext?.workOrderFilters)
    },[])

    const getValue = (value: string)=>{
      console.log("Value is "+value)
    }

    return <>
    <div className="min-height-300 bg-primary position-absolute w-100" style={{width: '100vw', top: '0'}}></div>
  <WorkOrderSideBar />
  <main className="main-content position-relative border-radius-lg">
  <NavBar />
    <div className="container-fluid py-4" style={{width: '100%'}}>
      <div className="row" style={{width: '100%'}}>
        <div className="col-xl-12 col-sm-12 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-12">
                    {/* <p>Search</p> */}
                    <Search getValue={getValue} />

                    <Form.Check // prettier-ignore
                        type="switch"
                        id="custom-switch"
                        label="Advanced search"
                        className="mt-3"
                        onChange={toggleAdvancedSearch}
                        checked={searchAdvanced}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4" style={{width: '100%'}}>
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h6>{appContext?.workOrderFilters?.title}</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
                <WorkOrdersTable workOrders={availableWorkOrders} filters={appContext?.workOrderFilters} />
            </div>
          </div>
        </div>
      </div>
        <AdvancedWorkOrdersSearch show={searchAdvanced} handleClose={handleClose} />
      <Footer />
    </div>
  </main>
    </>
}

export default WorkOrdersListing