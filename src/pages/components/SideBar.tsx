import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import ApplicationContext from "../../resources/contexts/ApplicationContext";
import { Icon } from '@iconify/react';
import { ListGroup } from "react-bootstrap";

const SideBar: React.FC = ()=>{
    const appContext = useContext(ApplicationContext);


    useEffect(()=>{
      console.log("Current page changed "+appContext?.currentPage+" Page track is "+appContext?.pageTrack)
      if(appContext?.currentPage!=appContext?.pageTrack){
        console.log("Current page "+appContext?.currentPage+" and page track "+appContext?.pageTrack+" are different")
        appContext?.setPageTrack(appContext?.currentPage)
        appContext?.setSubpageTrack(appContext?.currentSubPage)
        appContext?.setSideBarStateChange(true)
      }
    },[appContext?.currentPage])

    useEffect(()=>{
      console.log("Page track after change is "+appContext?.pageTrack)
    },[appContext?.pageTrack])

    const toggleMenu = (page: string, subPage: string)=>{
      console.log("Setting page track to "+page+" with sub page "+subPage+". Current page track is "+appContext?.pageTrack)
      if(page==appContext?.pageTrack){
        console.log("toggle menu: Current page and page track are not different. Same thing selected. Change state view "+!appContext?.sideBarStateChange)
        if(subPage == ""){
          appContext?.setSideBarStateChange(!appContext?.sideBarStateChange)
        }
      }

      appContext?.showSideNav(page, subPage)
      console.log("Changing page track to "+page)
    }
    
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
          <Link className={ appContext?.currentPage=="home" ? "nav-link  active" : "nav-link"} to="/home" onClick={()=>toggleMenu('home','')}>
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-tv-2 text-primary text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Home</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={ appContext?.currentPage=="equipment-library" ? "nav-link  active" : "nav-link"} onClick={()=>toggleMenu('equipment-library','')} to="/equipment-library">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <Icon icon="flat-color-icons:steam" height={400} />
            </div>
            <span className="nav-link-text ms-1">Equipment <br/>Management</span> &nbsp;&nbsp;{ appContext?.currentPage=="equipment-library" && appContext?.sideBarStateChange == true ? <Icon icon="basil:caret-up-outline" height={25} /> : <Icon icon="basil:caret-down-outline" height={25} /> }
          </Link>
          <div className={ appContext?.currentPage=="equipment-library" && appContext?.sideBarStateChange == true ? "menu-items-show menu-items text-sm" : "menu-items-hidden menu-items text-sm" }>
              <ListGroup variant="flush">
                <ListGroup.Item action><Link className={ appContext?.currentSubPage=="equipment-listing" ? "nav-link  active" : "nav-link"} onClick={()=>toggleMenu("equipment-library","equipment-listing")} to="/equipment-listing"><Icon icon="fluent-color:library-24" height={15} /> &nbsp;&nbsp;Equipment library</Link></ListGroup.Item>
                <ListGroup.Item action><Link className={ appContext?.currentSubPage=="maintenance" ? "nav-link  active" : "nav-link"} onClick={()=>toggleMenu('equipment-library','maintenance')} to="/equipment-work-orders"><Icon icon="flowbite:fix-tables-outline" height={15} /> &nbsp;&nbsp;Asset Maintenance</Link></ListGroup.Item>
                <hr />
              </ListGroup>
            </div>
        </li>
        <li className="nav-item">
          <Link className={ appContext?.currentPage=="reports" ? "nav-link  active" : "nav-link"} onClick={()=>toggleMenu('reports','')} to="/clinical-engineering-report">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <Icon icon="flat-color-icons:statistics" height={400} />
            </div>
            <span className="nav-link-text ms-1">Reports</span> &nbsp;&nbsp;{ appContext?.currentPage=="reports" && appContext?.sideBarStateChange == true ? <Icon icon="basil:caret-up-outline" height={25} /> : <Icon icon="basil:caret-down-outline" height={25} /> }
          </Link>
          <div className={ appContext?.currentPage=="reports" && appContext?.sideBarStateChange == true ? "menu-items-show menu-items text-sm" : "menu-items-hidden menu-items text-sm" }>
              <ListGroup variant="flush">
                <ListGroup.Item><Link className={ appContext?.currentSubPage=="equipment-reports" ? "nav-link  active" : "nav-link"} onClick={()=>toggleMenu("reports","equipment-reports")} to="/equipment-reports"><Icon icon="file-icons:graphite" height={15} /> &nbsp;&nbsp;Equipment reports</Link></ListGroup.Item>
                <ListGroup.Item><Link className={ appContext?.currentSubPage=="work-orders-reports" ? "nav-link  active" : "nav-link"} onClick={()=>toggleMenu("reports","work-orders-reports")} to="/work-orders-reports"><Icon icon="skill-icons:graphql-light" height={15} /> &nbsp;&nbsp;Work order reports</Link></ListGroup.Item>
                <ListGroup.Item><Link className={ appContext?.currentSubPage=="stock-reports" ? "nav-link  active" : "nav-link"} onClick={()=>toggleMenu("reports","equipment-listing")} to="/equipment-listing"><Icon icon="fxemoji:stockchart" height={15} /> &nbsp;&nbsp;Stock reports</Link></ListGroup.Item>
                <ListGroup.Item><Link className={ appContext?.currentSubPage=="cost-reports" ? "nav-link  active" : "nav-link"} onClick={()=>toggleMenu("reports","equipment-listing")} to="/equipment-listing"><Icon icon="file-icons:grapher" height={15} /> &nbsp;&nbsp;Cost reports</Link></ListGroup.Item>
              </ListGroup>
            </div>
        </li>
        <li className="nav-item">
          <Link className={ appContext?.currentPage=="wo" ? "nav-link  active" : "nav-link"} onClick={()=>toggleMenu('wo','')} to="/work-orders">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <Icon icon="skill-icons:workers-light" height={400} />
            </div>
            <span className="nav-link-text ms-1">Work Orders</span> &nbsp;&nbsp;{ appContext?.currentPage=="wo" && appContext?.sideBarStateChange == true ? <Icon icon="basil:caret-up-outline" height={25} /> : <Icon icon="basil:caret-down-outline" height={25} /> }
          </Link>
          <div className={ appContext?.currentPage=="wo" && appContext?.sideBarStateChange == true ? "menu-items-show menu-items text-sm" : "menu-items-hidden menu-items text-sm" }>
              <ListGroup variant="flush">
                <ListGroup.Item><Link className={ appContext?.currentSubPage=="pending work orders" ? "nav-link  active" : "nav-link"} onClick={()=>toggleMenu("wo","pending work orders")} to="/work-orders-listings"><Icon icon="fluent-emoji:open-book" height={15} /> &nbsp;&nbsp;Open work orders</Link></ListGroup.Item>
                <ListGroup.Item><Link className={ appContext?.currentSubPage=="preventative maintenance" ? "nav-link  active" : "nav-link"} onClick={()=>toggleMenu("wo","preventative maintenance")} to="/work-orders-listings"><Icon icon="fluent-emoji-flat:stop-button" height={15} /> &nbsp;&nbsp;Preventive maintenance</Link></ListGroup.Item>
                <ListGroup.Item><Link className={ appContext?.currentSubPage=="corrective maintenance" ? "nav-link  active" : "nav-link"} onClick={()=>toggleMenu("wo","preventative maintenance")} to="/work-orders-listings"><Icon icon="fluent:autocorrect-20-filled" height={15} /> &nbsp;&nbsp;Corrective maintenance</Link></ListGroup.Item>
              </ListGroup>
            </div>
        </li>
        <li style={{wordWrap: 'break-word'}} className="nav-item">
          <Link style={{wordWrap: 'break-word'}} className={ appContext?.currentPage=="stock-management" ? "nav-link  active" : "nav-link"} onClick={()=>toggleMenu('stock-management','')} to="/stock-management">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                <Icon icon="fluent-emoji-flat:mobile-phone" height={400} />
            </div>
            <span className="nav-link-text ms-1">Stock <br/>Management</span> &nbsp;&nbsp;{ appContext?.currentPage=="stock-management" && appContext?.sideBarStateChange == true ? <Icon icon="basil:caret-up-outline" height={25} /> : <Icon icon="basil:caret-down-outline" height={25} /> }
          </Link>
          <div className={ appContext?.currentPage=="stock-management" && appContext?.sideBarStateChange == true ? "menu-items-show menu-items text-sm" : "menu-items-hidden menu-items text-sm" }>
              <ListGroup variant="flush">
                <ListGroup.Item><Icon icon="fluent:temperature-20-regular" height={15} /> &nbsp;&nbsp;Consumables</ListGroup.Item>
                <ListGroup.Item><Icon icon="file-icons:metal" height={15} /> &nbsp;&nbsp;Spares</ListGroup.Item>
              </ListGroup>
            </div>
        </li>
        <li className="nav-item mt-3">
          <h6 className="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6">System</h6>
        </li>
        <li className="nav-item">
          <Link className={ appContext?.currentPage=="departments" ? "nav-link  active" : "nav-link"} onClick={()=>toggleMenu('departments','')} to="/departments">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <Icon icon="fluent-emoji-flat:department-store" height={400} />
            </div>
            <span className="nav-link-text ms-1">Departments</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={ appContext?.currentPage=="departments" ? "nav-link  active" : "nav-link"} onClick={()=>toggleMenu('departments','')} to="/departments">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <Icon icon="fa:users" height={400} />
            </div>
            <span className="nav-link-text ms-1">Staff Management</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={ appContext?.currentPage=="departments" ? "nav-link  active" : "nav-link"} onClick={()=>toggleMenu('departments','')} to="/departments">
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
          <Link className={ appContext?.currentPage=="profile" ? "nav-link  active" : "nav-link"} onClick={()=>toggleMenu('profile','')} to="/profile">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-single-02 text-dark text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Profile</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={ appContext?.currentPage=="sign-in" ? "nav-link  active" : "nav-link"} onClick={()=>toggleMenu('sign-in','')} to="/sign-in">
            <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i className="ni ni-single-copy-04 text-warning text-sm opacity-10"></i>
            </div>
            <span className="nav-link-text ms-1">Sign In</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className={ appContext?.currentPage=="sign-up" ? "nav-link  active" : "nav-link"} onClick={()=>toggleMenu('sign-up','')} to="/sign-up">
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
      <a href="#" onClick={()=>appContext?.setPageTrack("equipment-bleu")} className="btn btn-dark btn-sm w-100 mb-3">Documentation</a>
      {/* <a href="#" target="_blank" className="btn btn-dark btn-sm w-100 mb-3">Documentation</a> */}
      {/* <a className="btn btn-primary btn-sm mb-0 w-100" href="https://www.creative-tim.com/product/argon-dashboard-pro?ref=sidebarfree" type="button">Upgrade to pro</a> */}
    </div>
  </aside>
}

export default SideBar