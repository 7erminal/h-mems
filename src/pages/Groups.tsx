import React, { useEffect, useContext, useState } from "react"
import NavBar from "./components/NavBar";
import ApplicationContext from "../resources/contexts/ApplicationContext";
import InstitutionContext from "../resources/contexts/InstitutionContext";
import { GroupC } from "../utils/types/Types";
import AddGroup from "./components/AddGroup";
import AddPermissionToGroup from "./components/AddPermissionToGroup";
import QuickLinkCard2 from "./widgets/QuickLinkCard2";

const Groups: React.FC = ()=>{
    const appContext = useContext(ApplicationContext);
    const institutionContext = useContext(InstitutionContext);

    const [showAddGroup, setShowAddGroup] = useState(false)
    const [showAddPermissionToGroup, setShowAddPermissionToGroup] = useState(false)

    const handleShowAddGroup = ()=>setShowAddGroup(true)
    const handleCloseAddGroup = ()=>setShowAddGroup(false)

    const handleShowAddPermissionToGroup = ()=>setShowAddPermissionToGroup(true)
    const handleCloseAddPermissionToGroup = ()=>setShowAddPermissionToGroup(false)

    useEffect(()=>{
        getGroups()
    },[])

    const getGroups = async () =>{
        appContext?.loadingShow()
        await institutionContext?.getGroups()
        appContext?.loadingClose()
    }

    const addGroup = async ()=>{
        appContext?.loadingShow()
        var resp = await institutionContext?.addGroup()
        appContext?.loadingClose()
        if(resp==true){
            getGroups()
            handleCloseAddGroup()
        }
    }

    const addPermissionToGroup = async ()=>{
        appContext?.loadingShow()
        var resp = await institutionContext?.addPermissionToGroup()
        appContext?.loadingClose()
        if(resp==true){
            handleCloseAddPermissionToGroup()
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
                                <QuickLinkCard2 action={()=>handleShowAddGroup()} name="Group(s)" count={institutionContext?.groups.length ?? 0} icon="fluent:add-20-filled" />
                            </div>
                            <div className="col-lg-6 col-sm-6 card-left">
                                <QuickLinkCard2 action={()=>handleShowAddPermissionToGroup()} name="Add Permission To Group" count={undefined} icon="fluent:add-20-filled" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {institutionContext != undefined && institutionContext?.groups.length > 0 ? <div className="row mt-4">
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
                                        institutionContext != undefined && institutionContext?.groups.length > 0 ? institutionContext?.groups.reverse().map((grp: GroupC, i: number)=>{
                                            return <tr key={i}>
                                                        <td>
                                                            <div className="d-flex px-2">
                                                            <span className="nothing-circle"></span>&nbsp;&nbsp;
                                                            <div className="my-auto">
                                                                <h6 className="mb-0 text-sm">{grp.name}</h6>
                                                            </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className="text-sm font-weight-bold mb-0">{ grp.description }</p>
                                                        </td>
                                                        <td className="align-middle text-center">
                                                            <div className="d-flex align-items-center justify-content-center">
                                                            <span className="me-2 text-xs font-weight-bold">{ grp.status }</span>
                                                            {/* <div>
                                                                <div className="progress">
                                                                <div className="progress-bar bg-gradient-info" role="progressbar" style={{ width: '60%' }}></div>
                                                                </div>
                                                            </div> */}
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <span className="text-xs font-weight-bold">{ grp.createdDate }</span>
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
    <AddGroup show={showAddGroup} handleClose={handleCloseAddGroup} addGroup={addGroup} />
    <AddPermissionToGroup show={showAddPermissionToGroup} handleClose={handleCloseAddPermissionToGroup} addPermission={addPermissionToGroup} />
    </>
}

export default Groups