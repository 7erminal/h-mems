import React, { useEffect, useContext, useState } from "react"
import NavBar from "./components/NavBar";
import ApplicationContext from "../resources/contexts/ApplicationContext";
import InstitutionContext from "../resources/contexts/InstitutionContext";
import QuickLinkCard2 from "./widgets/QuickLinkCard2";
import AddPermission from "./components/AddPermission";
import { PermissionC } from "../utils/types/Types";

const PermissionsC: React.FC = ()=>{
    // const navigate = useNavigate()
    const appContext = useContext(ApplicationContext);
    const institutionContext = useContext(InstitutionContext);

    const [showAddPermission, setShowAddPermission] = useState(false)

    const handleShowAddPermission = ()=>setShowAddPermission(true)
    const handleCloseAddPermission = ()=>setShowAddPermission(false)


    useEffect(()=>{
            getPermissions()
    },[])

    const getPermissions = async () =>{
        appContext?.loadingShow()
        await institutionContext?.getPermissions()
        appContext?.loadingClose()
    }

    const addPermission = async ()=>{
        appContext?.loadingShow()
        var resp = await institutionContext?.addPermission()
        appContext?.loadingClose()
        if(resp == true){
            handleCloseAddPermission()
            getPermissions()
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
                                <QuickLinkCard2 action={()=>handleShowAddPermission()} name="Permission(s)" count={institutionContext?.permissions.length ?? 0} icon="fluent:add-20-filled" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {institutionContext != undefined && institutionContext?.institutions.length > 0 ? <div className="row mt-4">
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
                                institutionContext != undefined && institutionContext?.permissions.length > 0 ? institutionContext?.permissions.reverse().map((perm: PermissionC, i: number)=>{
                                    return <tr key={i}>
                                                <td>
                                                    <div className="d-flex px-2">
                                                    <span className="nothing-circle"></span>&nbsp;&nbsp;
                                                    <div className="my-auto">
                                                        <h6 className="mb-0 text-sm">{perm.name}</h6>
                                                    </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className="text-sm font-weight-bold mb-0">{ perm.description }</p>
                                                </td>
                                                <td className="align-middle text-center">
                                                    <div className="d-flex align-items-center justify-content-center">
                                                    <span className="me-2 text-xs font-weight-bold">{ perm.status }</span>
                                                    {/* <div>
                                                        <div className="progress">
                                                        <div className="progress-bar bg-gradient-info" role="progressbar" style={{ width: '60%' }}></div>
                                                        </div>
                                                    </div> */}
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-xs font-weight-bold">{ perm.createdDate }</span>
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
    <AddPermission show={showAddPermission} handleClose={handleCloseAddPermission} addPermission={addPermission} />
    </>
}

export default PermissionsC