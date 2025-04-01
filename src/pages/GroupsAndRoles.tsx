import React, { useEffect, useContext, useState } from "react"
import NavBar from "./components/NavBar";
import ApplicationContext from "../resources/contexts/ApplicationContext";
import InstitutionContext from "../resources/contexts/InstitutionContext";
import AddGroup from "./components/AddGroup";
import AddRole from "./components/AddRole";
import AddPermissionToRole from "./components/AddPermissionToRole";
import AddPermissionToGroup from "./components/AddPermissionToGroup";
import QuickLinkCard2 from "./widgets/QuickLinkCard2";

const GroupsAndRoles: React.FC = ()=>{
    const appContext = useContext(ApplicationContext);
    const institutionContext = useContext(InstitutionContext);

    const [showAddGroup, setShowAddGroup] = useState(false)
    const [showAddRole, setShowAddRole] = useState(false)
    const [showAddPermissionToRole, setShowAddPermissionToRole] = useState(false)
    const [showAddPermissionToGroup, setShowAddPermissionToGroup] = useState(false)

    const handleShowAddGroup = ()=>setShowAddGroup(true)
    const handleCloseAddGroup = ()=>setShowAddGroup(false)

    const handleShowAddRole = ()=>setShowAddRole(true)
    const handleCloseAddRole = ()=>setShowAddRole(false)

    const handleShowAddPermissionToRole = ()=>setShowAddPermissionToRole(true)
    const handleCloseAddPermissionToRole = ()=>setShowAddPermissionToRole(false)

    const handleShowAddPermissionToGroup = ()=>setShowAddPermissionToGroup(true)
    const handleCloseAddPermissionToGroup = ()=>setShowAddPermissionToGroup(false)

    useEffect(()=>{
            getInstitutions()
            getGroups()
            getRoles()
    },[])

    const getInstitutions = async () =>{
        appContext?.loadingShow()
        await institutionContext?.getInstitutions()
        appContext?.loadingClose()
    }

    const getGroups = async () =>{
        appContext?.loadingShow()
        await institutionContext?.getGroups()
        appContext?.loadingClose()
    }

    const getRoles = async () =>{
        appContext?.loadingShow()
        await institutionContext?.getRoles()
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

    const addRole = async ()=>{
        appContext?.loadingShow()
        var resp = await institutionContext?.addRole()
        appContext?.loadingClose()
        if(resp==true){
            getRoles()
            handleCloseAddRole()
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
                            <div className="col-lg-3 col-sm-6 card-right">
                                <QuickLinkCard2 action={()=>handleShowAddGroup()} name="Group(s)" count={institutionContext?.groups.length ?? 0} icon="fluent:add-20-filled" />
                            </div>
                            <div className="col-lg-3 col-sm-6 card-right">
                                <QuickLinkCard2 action={()=>handleShowAddRole()} name="Role(s)" count={institutionContext?.roles.length ?? 0} icon="fluent:add-20-filled" />
                            </div>
                            <div className="col-lg-3 col-sm-6 card-right">
                                <QuickLinkCard2 action={()=>handleShowAddPermissionToGroup()} name="Add Permission To Group" count={undefined} icon="fluent:add-20-filled" />
                            </div>
                            <div className="col-lg-3 col-sm-6 card-left">
                                <QuickLinkCard2 action={()=>handleShowAddPermissionToRole()} name="Add Permission To Role" count={undefined} icon="fluent:add-20-filled" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </main>

    <AddGroup show={showAddGroup} handleClose={handleCloseAddGroup} addGroup={addGroup} />
    <AddRole show={showAddRole} handleClose={handleCloseAddRole} addRole={addRole} />
    <AddPermissionToGroup show={showAddPermissionToGroup} handleClose={handleCloseAddPermissionToGroup} addPermission={addPermissionToGroup} />
    <AddPermissionToRole show={showAddPermissionToRole} handleClose={handleCloseAddPermissionToRole} addPermission={addPermissionToRole} />
    </>
}

export default GroupsAndRoles