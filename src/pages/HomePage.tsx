import React from "react";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import EquipmentListTable from "./components/EquipmentListTable";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage: React.FC = ()=>{
    return <>
    <div className="min-height-300 bg-primary position-absolute w-100"></div>
  <SideBar />
  <main className="main-content position-relative border-radius-lg ">
    <NavBar />
    <div className="container-fluid py-4">
      <div className="row">
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-uppercase font-weight-bold">Total Equipment</p>
                    <h5 className="font-weight-bolder">
                      1,205
                    </h5>
                    <p className="mb-0">
                      <span className="text-success text-sm font-weight-bolder">+0% </span>
                      since yesterday
                    </p>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-primary shadow-primary text-center rounded-circle">
                    <i className="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-uppercase font-weight-bold">Total Active Equipment</p>
                    <h5 className="font-weight-bolder">
                      1,141
                    </h5>
                    <p className="mb-0">
                      <span className="text-success text-sm font-weight-bolder">+0% </span>
                      since last week
                    </p>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-danger shadow-danger text-center rounded-circle">
                    <i className="ni ni-world text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-uppercase font-weight-bold">New Equipment</p>
                    <h5 className="font-weight-bolder">
                      84
                    </h5>
                    <p className="mb-0">
                      <span className="text-danger text-sm font-weight-bolder">+12% </span>
                      since last quarter
                    </p>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-success shadow-success text-center rounded-circle">
                    <i className="ni ni-paper-diploma text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6">
          <div className="card">
            <div className="card-body p-3">
              <div className="row">
                <div className="col-8">
                  <div className="numbers">
                    <p className="text-sm mb-0 text-uppercase font-weight-bold">Near half life</p>
                    <h5 className="font-weight-bolder">
                      23
                    </h5>
                    <p className="mb-0">
                      <span className="text-success text-sm font-weight-bolder">Equipment</span> near half life
                    </p>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <div className="icon icon-shape bg-gradient-warning shadow-warning text-center rounded-circle">
                    <i className="ni ni-cart text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-lg-7 mb-lg-0 mb-4">
          <div className="card z-index-2 h-100">
            <div className="card-header pb-0 pt-3 bg-transparent">
              <h6 className="text-capitalize">Quick links</h6>
              <p className="text-sm mb-0">
                {/* <i className="fa fa-arrow-up text-success"></i> */}
                {/* <span className="font-weight-bold">4% more</span> in 2021 */}
              </p>
            </div>
            <div className="card-body p-3">
                <ListGroup variant="flush">
                    <ListGroup.Item action><Link to="/equipment-listing">Equipment Listing</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/clinical-engineering-report">Clinical Engineering Report</Link></ListGroup.Item>
                </ListGroup>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="card card-carousel overflow-hidden h-100 p-0">
            <div id="carouselExampleCaptions" className="carousel slide h-100" data-bs-ride="carousel">
              <div className="carousel-inner border-radius-lg h-100">
                <div className="carousel-item h-100 active" style={{ backgroundImage: "url('../assets/img/carousel-1.jpg')",
      backgroundSize: "cover" }}>
                  <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                    <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                      <i className="ni ni-camera-compact text-dark opacity-10"></i>
                    </div>
                    <h5 className="text-white mb-1">Get started with B-Mems</h5>
                    <p>Explore equipment data with detailed information to keep track of performance</p>
                  </div>
                </div>
                <div className="carousel-item h-100" style={{ backgroundImage: "url('/assets/img/carousel-2.jpg')",
      backgroundSize: "cover"}}>
                  <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                    <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                      <i className="ni ni-bulb-61 text-dark opacity-10"></i>
                    </div>
                    <h5 className="text-white mb-1">Faster way to create web pages</h5>
                    <p>That’s my skill. I’m not really specifically talented at anything except for the ability to learn.</p>
                  </div>
                </div>
                <div className="carousel-item h-100" style={{backgroundImage: "url('/assets/img/carousel-3.jpg')",
      backgroundSize: "cover"}}>
                  <div className="carousel-caption d-none d-md-block bottom-0 text-start start-0 ms-5">
                    <div className="icon icon-shape icon-sm bg-white text-center border-radius-md mb-3">
                      <i className="ni ni-trophy text-dark opacity-10"></i>
                    </div>
                    <h5 className="text-white mb-1">Share with us your design tips!</h5>
                    <p>Don’t be afraid to be wrong because you can’t learn anything from a compliment.</p>
                  </div>
                </div>
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
      <div className="row mt-4" style={{width: '100%'}}>
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-header pb-0">
              <h6>Recently added Equipment</h6>
            </div>
            <div className="card-body px-0 pt-0 pb-2">
              <EquipmentListTable />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </main>
    </>
}

export default HomePage