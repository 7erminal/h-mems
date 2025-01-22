import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ApplicationContext from "../../resources/contexts/ApplicationContext";
import { Icon } from '@iconify/react';

const SideBar: React.FC = ()=>{
    const appContext = useContext(ApplicationContext);
    
    return <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
    <div className="sidenav-header">
      <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a className="navbar-brand m-0" href="/homd" target="_blank">
        <img src="/assets/img/logos/h-mems.png" className="navbar-brand-img h-100" alt="main_logo" />
        <span className="ms-1 font-weight-bold">B-MEMS</span>
      </a>
    </div>
    <hr className="horizontal dark mt-0" />
    <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={ appContext?.currentPage=="home" ? "nav-link  active" : "nav-link"} to="/" onClick={()=>appContext?.showSideNav('home','')}>
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={ appContext?.currentPage=="equipment-listing" ? "nav-link  active" : "nav-link"} onClick={()=>appContext?.showSideNav('equipment-listing','')} to="/equipment-listing">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <Icon icon="flat-color-icons:steam" height={400} />
            </div>
            <span className="nav-link-text ms-1">Equipment Library</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={ appContext?.currentPage=="cemr" ? "nav-link  active" : "nav-link"} onClick={()=>appContext?.showSideNav('cemr','')} to="/clinical-engineering-report">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <Icon icon="flat-color-icons:statistics" height={400} />
            </div>
            <span className="nav-link-text ms-1">Reports</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={ appContext?.currentPage=="wo" ? "nav-link  active" : "nav-link"} onClick={()=>appContext?.showSideNav('wo','')} to="/work-orders">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <Icon icon="skill-icons:workers-light" height={400} />
            </div>
            <span className="nav-link-text ms-1">Work Orders</span>
          </Link>
        </li>
        <li className="nav-item mt-3">
          <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">System</h6>
        </li>
        <li className="nav-item">
          <Link className={ appContext?.currentPage=="departments" ? "nav-link  active" : "nav-link"} onClick={()=>appContext?.showSideNav('departments','')} to="/departments">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <Icon icon="fluent-emoji-flat:department-store" height={400} />
            </div>
            <span className="nav-link-text ms-1">Departments</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={ appContext?.currentPage=="departments" ? "nav-link  active" : "nav-link"} onClick={()=>appContext?.showSideNav('departments','')} to="/departments">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <Icon icon="fa:users" height={400} />
            </div>
            <span className="nav-link-text ms-1">Staff Management</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={ appContext?.currentPage=="departments" ? "nav-link  active" : "nav-link"} onClick={()=>appContext?.showSideNav('departments','')} to="/departments">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <Icon icon="fluent-emoji-flat:japanese-application-button" height={400} />
            </div>
            <span className="nav-link-text ms-1">System Configurations</span>
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link className={ appContext?.currentPage=="staff" ? "nav-link  active" : "nav-link"} onClick={()=>appContext?.showSideNav('profile','')} to="/profile">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-single-02 text-dark text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Staff</span>
          </Link>
        </li> */}
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
        <li className="nav-item">
          <Link className={ appContext?.currentPage=="sign-in" ? "nav-link  active" : "nav-link"} onClick={()=>appContext?.showSideNav('sign-in','')} to="/sign-in">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-single-copy-04 text-warning text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Sign In</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={ appContext?.currentPage=="sign-up" ? "nav-link  active" : "nav-link"} onClick={()=>appContext?.showSideNav('sign-up','')} to="/sign-up">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-collection text-info text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Sign Up</span>
          </Link>
        </li>
      </ul>
    </div>
    <div className="sidenav-footer mx-3 ">
      <div className="card card-plain shadow-none" id="sidenavCard">
        {/* <img className="w-50 mx-auto" src="/assets/img/illustrations/icon-documentation.svg" alt="sidebar_illustration" /> */}
        <Icon icon="fa-solid:book" className="w-50 mx-auto" height={40} />
        <div className="card-body text-center p-3 w-100 pt-0">
          <div className="docs-info">
            <h6 className="mb-0">Need help?</h6>
            <p className="text-xs font-weight-bold mb-0">Please check our docs</p>
          </div>
        </div>
      </div>
      <a href="#" target="_blank" className="btn btn-dark btn-sm w-100 mb-3">Documentation</a>
      {/* <a className="btn btn-primary btn-sm mb-0 w-100" href="https://www.creative-tim.com/product/argon-dashboard-pro?ref=sidebarfree" type="button">Upgrade to pro</a> */}
    </div>
  </aside>
}

export default SideBar