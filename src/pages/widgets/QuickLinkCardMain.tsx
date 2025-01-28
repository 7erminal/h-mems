import React, { useContext } from "react";
import ApplicationContext from "../../resources/contexts/ApplicationContext";
import { Link } from "react-router-dom";

const QuickLinkCard: React.FC = ()=>{
    const appContext = useContext(ApplicationContext);
    
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

    return <div className="container-fluid mt-4">
        <div className="row">
            <div className="col">
                <div className="card">
                        <div className="card-body p-3">
                          <div className="row">
                            <Link to="/equipment-library" className="col-lg-3 col-sm-6 card-right" onClick={()=>toggleMenu('equipment-library','')}>
                                <h6>Equipment Management</h6>
                            </Link>
                            <Link to="/work-orders" className="col-lg-3 col-sm-6 card-right" onClick={()=>toggleMenu('wo','')}>
                                <h6>Work Orders</h6>
                            </Link>
                            <Link to="/clinical-engineering-report" className="col-lg-3 col-sm-6 card-right" onClick={()=>toggleMenu('reports','')}>
                                <h6>Reports</h6>
                            </Link>
                            <Link to="/departments" className="col-lg-3 col-sm-6 card-left" onClick={()=>toggleMenu('departments','')}>
                                <h6>System Management</h6>
                            </Link>
                          </div>
                        </div>
                      </div>
            </div>
        </div>
    </div>
}

export default QuickLinkCard