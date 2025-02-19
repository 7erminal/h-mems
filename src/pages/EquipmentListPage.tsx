import React, { useContext, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// @ts-ignore
import Search from "./widgets/search/search.jsx";
import { Form } from "react-bootstrap";
import ApplicationContext from "../resources/contexts/ApplicationContext";
import EquipmentListTable from "./components/EquipmentListTable";
import { Device, WorkOrder } from "../utils/types/Types.js";
import { workOrders } from "../utils/data/Data.js";

const EquipmentListPage: React.FC = ()=>{
    const [searchAdvanced, setSearchAdvanced] = useState(false)
    const appContext = useContext(ApplicationContext);
    const [equipment, setEquipment] = useState<Array<Device>>()

    useEffect(()=>{
        let tempEquipment: Array<Device> = []
        workOrders.map((wo: WorkOrder)=>{
            wo.WorkOrderType.Type == appContext?.workOrderFilters?.typeFilter ? 
                tempEquipment.push(wo.Device) : ""
        })

        setEquipment(tempEquipment)
    },[])

    const toggleAdvancedSearch = ()=>{
        setSearchAdvanced(!searchAdvanced)
    }

    const getValue = (value: string)=>{
        console.log("Value is "+value)
      }
      
    return <>
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
                <EquipmentListTable equipment={equipment} />
            </div>
          </div>
        </div>
      </div>
        {/* <AdvancedWorkOrdersSearch show={searchAdvanced} handleClose={handleClose} /> */}
      <Footer />
    </div>
  </main>
    </>
}

export default EquipmentListPage