import React, { useEffect, useContext, useState } from "react"
import NavBar from "./components/NavBar";
import ApplicationContext from "../resources/contexts/ApplicationContext";
import InstitutionContext from "../resources/contexts/InstitutionContext";
import { RoleC } from "../utils/types/Types";
import AddRole from "./components/AddRole";
import AddPermissionToRole from "./components/AddPermissionToRole";
import QuickLinkCard2 from "./widgets/QuickLinkCard2";

const Roles: React.FC = ()=>{
    const appContext = useContext(ApplicationContext);
    const institutionContext = useContext(InstitutionContext);

    const [showAddRole, setShowAddRole] = useState(false)
    const [showAddPermissionToRole, setShowAddPermissionToRole] = useState(false)

    const handleShowAddRole = ()=>setShowAddRole(true)
    const handleCloseAddRole = ()=>setShowAddRole(false)

    const handleShowAddPermissionToRole = ()=>setShowAddPermissionToRole(true)
    const handleCloseAddPermissionToRole = ()=>setShowAddPermissionToRole(false)


    useEffect(()=>{
        getRoles()
    },[])

    const getRoles = async () =>{
        appContext?.loadingShow()
        await institutionContext?.getRoles()
        appContext?.loadingClose()
    }

    const addRole = async ()=>{
        appContext?.loadingShow()
        var resp = await institutionContext?.addRole()
        appContext?.loadingClose()
        if(resp==true){
            getRoles()
            handleCloseAddRole()
        }
    }

    const addPermissionToRole = async ()=>{
        appContext?.loadingShow()
        var resp = await institutionContext?.addPermissionToRole()
        appContext?.loadingClose()
        if(resp==true){
            handleCloseAddPermissionToRole()
        }
    }

    return <>
    <main className="main-content position-relative border-radius-lg ">
    <NavBar />
    <div className="container-fluid py-4">
        <div className="row mt-4">
            <div className="col-12">
                <div className="card mb-4">
                    <div className="card-body p-3">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 card-right">
                                <QuickLinkCard2 action={()=>handleShowAddRole()} name="Role(s)" count={institutionContext?.roles.length ?? 0} icon="fluent:add-20-filled" />
                            </div>
                            <div className="col-lg-6- col-sm-6 card-left">
                                <QuickLinkCard2 action={()=>handleShowAddPermissionToRole()} name="Add Permission To Role" count={undefined} icon="fluent:add-20-filled" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {institutionContext != undefined && institutionContext?.roles.length > 0 ? <div className="row mt-4">
                <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-body px-0 pt-0 pb-2" style={{paddingTop: '20px', paddingBottom: '20px'}}>
                            <div className="table-responsive p-0">
                                <table className="table align-items-center justify-content-center mb-0">
                                <thead>
                                    <tr>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Description</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder text-center opacity-7 ps-2">Status</th>
                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Created Date</th>
                                    {/* <th></th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        institutionContext != undefined && institutionContext?.roles.length > 0 ? institutionContext?.roles.reverse().map((rl: RoleC, i: number)=>{
                                            return <tr key={i}>
                                                        <td>
                                                            <div className="d-flex px-2">
                                                            {/* <div> */}
                                                                <span className="nothing-circle"></span>&nbsp;&nbsp;
                                                                {/* <img src="/assets/img/logos/h-mems.png" className="avatar avatar-sm rounded-circle me-2" alt="spotify" /> */}
                                                            {/* </div> */}
                                                            
                                                            <div className="my-auto">
                                                                <h6 className="mb-0 text-sm">{rl.name}</h6>
                                                            </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className="text-sm font-weight-bold mb-0">{ rl.description }</p>
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <div className="d-flex align-items-center justify-content-center">
                                                            <span className="me-2 text-xs font-weight-bold">{ rl.status }</span>
                                                            {/* <div>
                                                                <div className="progress">
                                                                <div className="progress-bar bg-gradient-info" role="progressbar" style={{ width: '60%' }}></div>
                                                                </div>
                                                            </div> */}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-xs font-weight-bold">{ rl.createdDate }</span>
                                                        </td>
                                                        {/* <td className="align-middle">
                                                            <button className="btn btn-link text-secondary mb-0" onClick={ ()=>{institutionContext?.setSelectedInstitution(inst); navigate("/2/view-institution") }}>
                                                            <i className="fa fa-ellipsis-v text-xs">View</i>
                                                            </button>
                                                        </td> */}
                                                    </tr>
                                        }) : ''
                                    }
                                </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : ""
            }
        </div>
    </div>
    </main>
    <AddRole show={showAddRole} handleClose={handleCloseAddRole} addRole={addRole} />
    <AddPermissionToRole show={showAddPermissionToRole} handleClose={handleCloseAddPermissionToRole} addPermission={addPermissionToRole} />
    </>
}

export default Roles