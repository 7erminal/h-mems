import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ApplicationContext from "../../resources/contexts/ApplicationContext";
import { Icon } from '@iconify/react';

const EquipmentSideBar: React.FC = ()=>{
    const appContext = useContext(ApplicationContext);
    
    return <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
    <div className="sidenav-header">
      <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a className="navbar-brand m-0" href="/" target="_blank">
        <img src="/assets/img/logos/h-mems.png" className="navbar-brand-img h-100" alt="main_logo" />
        <span className="ms-1 font-weight-bold">B-MEMS</span>
      </a>
    </div>
    <hr className="horizontal dark mt-0" />
    <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={ appContext?.currentPage=="home" ? "nav-link  active" : "nav-link"} to="/equipment-library" onClick={()=>appContext?.showSideNav('equipment-listing','')}>
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Equipment Management</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={ appContext?.currentPage=="equipment-listing" ? "nav-link  active" : "nav-link"} to="/equipment-listing" onClick={()=>appContext?.showSideNav('equipment-listing','')}>
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Equipment Listing</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={ appContext?.currentSubPage=="pending equipment work orders" ? "nav-link  active" : "nav-link"} onClick={()=>appContext?.showSideNav('equipment-listing', 'maintenance')} to="/equipment-list">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <Icon icon="skill-icons:workers-light" height={400} />
            </div>
            <span className="nav-link-text ms-1">Incoming Maintenance</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={ appContext?.currentSubPage=="pending equipment work orders" ? "nav-link  active" : "nav-link"} onClick={()=>appContext?.showSideNav('equipment-listing', 'faulty')} to="/equipment-list">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <Icon icon="skill-icons:workers-light" height={400} />
            </div>
            <span className="nav-link-text ms-1">Faulty Equipment</span>
          </Link>
        </li>
        <li className="nav-item mt-3">
          <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">Account</h6>
        </li>
        <li className="nav-item">
          <Link className={ appContext?.currentPage=="profile" ? "nav-link  active" : "nav-link"} onClick={()=>appContext?.showSideNav('profile','')} to="/profile">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-single-02 text-dark text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Profile</span>
          </Link>
        </li>
      </ul>
    </div>
    <div className="sidenav-footer mx-3 ">
      <div className="card card-plain shadow-none" id="sidenavCard">
        {/* <div className="card-body text-center p-3 w-100 pt-0">
          <div className="docs-info">
            <h6 className="mb-0">Go Back</h6>
            <p className="text-xs font-weight-bold mb-0">Please check our docs</p>
          </div>
        </div> */}
      </div>
      <Link to="/home" onClick={()=>appContext?.showSideNav('home','')} className="btn btn-dark btn-sm w-100 mb-3"><Icon icon="fluent-mdl2:skype-arrow" height={20} /> Back</Link>
      {/* <a className="btn btn-primary btn-sm mb-0 w-100" href="https://www.creative-tim.com/product/argon-dashboard-pro?ref=sidebarfree" type="button">Upgrade to pro</a> */}
    </div>
  </aside>
}

export default EquipmentSideBar