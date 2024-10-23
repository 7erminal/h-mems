import React, { useState } from "react";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// @ts-ignore
import Search from "./widgets/search/search.jsx";
import { Form } from "react-bootstrap";
import EquipmentListTable from "./components/EquipmentListTable.js";
import AdvancedEquipmentSearch from "./components/AdvancedEquipmentSearch.js";

const EquipmentListing: React.FC = ()=>{
    const [searchAdvanced, setSearchAdvanced] = useState(false)
    
    const handleClose = () => setSearchAdvanced(false);
    // const handleShow = () => setSearchAdvanced(true);

    const toggleAdvancedSearch = ()=>{
        setSearchAdvanced(!searchAdvanced)
    }

    return <>
    <div className="min-height-300 bg-primary position-absolute w-100" style={{width: '100vw', top: '0'}}></div>
  <SideBar />
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
                    <Search />

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
              <h6>Equipment Inventory List Report</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <EquipmentListTable />
            </div>
          </div>
        </div>
      </div>
        <AdvancedEquipmentSearch show={searchAdvanced} handleClose={handleClose} />
      <Footer />
    </div>
  </main>
    </>
}

export default EquipmentListing