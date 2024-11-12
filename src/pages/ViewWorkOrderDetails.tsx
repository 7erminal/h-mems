import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { WorkOrder } from "../utils/types/Types";
import 'chart.js/auto';
import WorkOrderSideBar from "./components/WorkOrderSideBar";
import EquipmentListTable from "./components/EquipmentListTable";

type Props = {
    woDetails: WorkOrder | undefined
}



const ViewWorkOrderDetails: React.FC<Props> = ({woDetails})=>{
    // const [availableWorkOrders, setAvailableWorkOrders] = useState<Array<WorkOrder>>()
    // useEffect(()=>{
    //     setAvailableWorkOrders(workOrders)
    // },[])
    
    return <>
    <div className="min-height-300 bg-primary position-absolute w-100"></div>
  <WorkOrderSideBar />
  <main className="main-content position-relative border-radius-lg ">
    <NavBar />
    <div className="container-fluid py-4">
        <div className="row">
            <div className="col-lg-11 col-md-11">
                {/* <div className="row mt-4">
                    <div className="col-lg-12 mb-lg-0 mb-4">
                    <div className="card z-index-2 h-100">
                        <div className="card-body p-3">
                            <ListGroup horizontal>
                                <ListGroup.Item>{ eqDetails?.ControlNo }</ListGroup.Item>
                                <ListGroup.Item>{ eqDetails?.SerialNo }</ListGroup.Item>
                                <ListGroup.Item>{ eqDetails?.Class }</ListGroup.Item>
                            </ListGroup>
                        </div>
                    </div>
                    </div>
                </div> */}
                <div className="row mt-4">
                    <div className="col-lg-12 col-md-12">
                        <div className="card z-index-2 h-100">
                            <div className="card-header pb-0">
                            <h6>Work Order Information</h6>
                            </div>
                            <div className="card-body p-3">
                                <div className="table-responsive p-0">
                                    <table className="table align-items-center mb-0">
                                        <tr style={{borderBottom: '1px solid #eaeded'}}>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">Work Order</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs">{ woDetails?.WorkOrderId } ({woDetails?.WorkOrderType.Type})</span>
                                            </td>
                                        </tr>
                                        <tr style={{borderBottom: '1px solid #eaeded'}}>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">Control Number</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-xs text-secondary mb-0">{ woDetails?.Device.ControlNo }</span>
                                            </td>
                                        </tr>
                                        <tr style={{borderBottom: '1px solid #eaeded'}}>
                                            <td className="align-middle text-center">
                                                <p className="text-xs font-weight-bold mb-0">Issue Date/Time</p>
                                                <p className="text-xs text-secondary mb-0">{ woDetails?.OpenedDate }</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <p className="text-xs font-weight-bold mb-0">Priority</p>
                                                <p className="text-xs text-secondary mb-0">{ woDetails?.Priority }</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <p className="text-xs font-weight-bold mb-0">Estimated Hours</p>
                                                <p className="text-xs text-secondary mb-0">0.00</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <p className="text-xs font-weight-bold mb-0">Assigned Engineer</p>
                                                <p className="text-xs text-secondary mb-0">{ woDetails?.AssignedEngineer.FullName }</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <p className="text-xs font-weight-bold mb-0">Speciality</p>
                                                <p className="text-xs text-secondary mb-0">{ woDetails?.AssignedEngineer.Role }</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <p className="text-xs font-weight-bold mb-0">Status</p>
                                                <p className="text-xs text-secondary mb-0">{ woDetails?.Status.Status }</p>
                                            </td>
                                        </tr>
                                        <tr style={{borderBottom: '1px solid #eaeded'}}>
                                            <td className="align-middle text-center">
                                                <p className="text-xs font-weight-bold mb-0">Issue Date/Time</p>
                                                <p className="text-xs text-secondary mb-0">{ woDetails?.OpenedDate }</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <p className="text-xs font-weight-bold mb-0">Priority</p>
                                                <p className="text-xs text-secondary mb-0">{ woDetails?.Priority }</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <p className="text-xs font-weight-bold mb-0">Estimated Hours</p>
                                                <p className="text-xs text-secondary mb-0">0.00</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <p className="text-xs font-weight-bold mb-0">Assigned Engineer</p>
                                                <p className="text-xs text-secondary mb-0">{ woDetails?.AssignedEngineer.FullName }</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <p className="text-xs font-weight-bold mb-0">Speciality</p>
                                                <p className="text-xs text-secondary mb-0">{ woDetails?.AssignedEngineer.Role }</p>
                                            </td>
                                            <td className="align-middle text-center">
                                                <p className="text-xs font-weight-bold mb-0">Status</p>
                                                <p className="text-xs text-secondary mb-0">{ woDetails?.Status.Status }</p>
                                            </td>
                                        </tr>
                                        <tr style={{borderBottom: '1px solid #eaeded'}}>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">Department</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs">Optometry</span>
                                            </td>
                                        </tr>
                                        <tr style={{borderBottom: '1px solid #eaeded'}}>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs font-weight-bold">Location</span>
                                            </td>
                                            <td className="align-middle text-center">
                                                <span className="text-secondary text-xs">Optical</span>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12">
                    <div className="card mb-4">
                        <div className="card-header pb-0">
                        <h6>Equipment</h6>
                        </div>
                        <div className="card-body px-0 pt-0 pb-2">
                        <EquipmentListTable equipment={[woDetails?.Device]} />
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      <Footer />
    </div>
  </main>
    </>
}

export default ViewWorkOrderDetails