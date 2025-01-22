import React, { useContext, useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
// @ts-ignore
import Search from "./widgets/search/search.jsx";
import { Form, ListGroup } from "react-bootstrap";
import EquipmentListTable from "./components/EquipmentListTable.js";
import AdvancedEquipmentSearch from "./components/AdvancedEquipmentSearch.js";
import { equipment, workOrders } from "../utils/data/Data";
import { Device, WorkOrder } from "../utils/types/Types";
import EquipmentSideBar from "./components/EquipmentSideBar.js";
import EquipmentStats from "./components/EquipmentStats.js";
import AddEquipment from "./components/AddEquipment.js";
import { Link } from "react-router-dom";
import AddSparePart from "./components/AddSparePart.js";
import ApplicationContext from "../resources/contexts/ApplicationContext.js";

const EquipmentListing: React.FC = ()=>{
  const appContext = useContext(ApplicationContext);
  const [addEquipmentModal, setAddEquipmentModal] = useState(false)
  const [addSparePartModal, setSparePartModal] = useState(false)
    const [searchAdvanced, setSearchAdvanced] = useState(false)
    const [availableEquipment, setAvailableEquipment] = useState<Array<Device>>()

    useEffect(()=>{
        setAvailableEquipment(equipment);
    },[])
    
    const handleClose = () => setSearchAdvanced(false);
    // const handleShow = () => setSearchAdvanced(true);

    const handleAddEquipmentModalClose = () => setAddEquipmentModal(false);
    const handleAddEquipmentModalShow = () => setAddEquipmentModal(true);

    const handleSparePartModalClose = () => setSparePartModal(false);
    const handleSparePartModalShow = () => setSparePartModal(true);

    const toggleAdvancedSearch = ()=>{
        setSearchAdvanced(!searchAdvanced)
    }

    const getValue = (value: string)=>{
      console.log("Value is "+value)
    }

    const colors = ['#e74c3c', '#34495e', '#8e44ad']

    return <>
    <div className="min-height-300 bg-primary position-absolute w-100" style={{width: '100vw', top: '0'}}></div>
  <EquipmentSideBar />
  <main className="main-content position-relative border-radius-lg">
  <NavBar />
    <div className="container-fluid py-4" >
        <div className="row mb-4" >
            <div className="col-xl-12 col-sm-12 mb-xl-0 mb-4">
                <EquipmentStats 
                    total={availableEquipment?.length} 
                    totalActive={availableEquipment?.filter((eq: Device)=> eq.Status.StatusId = 1).length}
                        oldE={availableEquipment?.length} 
                        newE={availableEquipment?.length}
                />
            </div>
        </div>
        <div className="row mt-4">
        <div className="col-lg-7 mb-lg-0 mb-4">
          <div className="card z-index-2 h-100">
            <div className="card-header pb-0 pt-3 bg-transparent">
              <h6 className="text-capitalize">Menu</h6>
              <p className="text-sm mb-0">
                {/* <i className="fa fa-arrow-up text-success"></i> */}
                {/* <span className="font-weight-bold">4% more</span> in 2021 */}
              </p>
            </div>
            <div className="card-body p-3">
                <ListGroup variant="flush">
                    <ListGroup.Item action onClick={handleAddEquipmentModalShow}>Add Equipment</ListGroup.Item>
                    <ListGroup.Item action onClick={handleSparePartModalShow}>Add Spare Part</ListGroup.Item>
                    <ListGroup.Item action onClick={()=>appContext?.showSideNav('equipment-listing', 'maintenance')}><Link to="/equipment-list">Maintenance</Link></ListGroup.Item>
                </ListGroup>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card card-carousel overflow-hidden h-100 p-0">
            <div id="carouselExampleCaptions" className="carousel slide h-100" data-bs-ride="carousel">
              <div className="carousel-inner border-radius-lg h-100">
                {
                  workOrders.filter((wo: WorkOrder)=>wo.Status.StatusId != 5).slice(0, 3).map((wo: WorkOrder, i: number)=>{
                    let classname = "carousel-item h-100"
                    i==0 ? classname = "carousel-item h-100 active" : classname = "carousel-item h-100"

                    const random = Math.floor(Math.random() * colors.length)

                    return <div className={classname} style={{ backgroundColor: colors[random],
                      backgroundSize: "cover" }}>
                                  <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                                    <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                                      <i className="ni ni-camera-compact text-dark opacity-10"></i>
                                    </div>
                                    <h5 className="text-white mb-1">{ wo.Title }</h5>
                                    <p>{ wo.Description }</p>
                                    <p>{ wo.OpenedDate }</p>
                                  </div>
                                </div>
                  })
                }
              </div>
              <button className="carousel-control-prev w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next w-5 me-3" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-4" >
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
              <h6>Equipment Inventory List Report</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <EquipmentListTable equipment={availableEquipment} />
            </div>
          </div>
        </div>
      </div>
        <AdvancedEquipmentSearch show={searchAdvanced} handleClose={handleClose} />
        <AddEquipment show={addEquipmentModal} handleClose={handleAddEquipmentModalClose} />
        <AddSparePart show={addSparePartModal} handleClose={handleSparePartModalClose} />
      <Footer />
    </div>
  </main>
    </>
}

export default EquipmentListing