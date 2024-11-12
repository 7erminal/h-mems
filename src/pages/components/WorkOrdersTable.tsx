import React, { useContext }  from "react";
import { WorkOrder, WorkOrderFilters } from "../../utils/types/Types";
import { Link } from "react-router-dom";
import ApplicationContext from "../../resources/contexts/ApplicationContext";

type Props = {
    filters: WorkOrderFilters | undefined
    workOrders: Array<WorkOrder> | undefined
}

const WorkOrdersTable: React.FC<Props> = ({filters, workOrders})=>{
    const appContext = useContext(ApplicationContext);

    return <div className="table-responsive p-0">
    <table className="table align-items-center mb-0">
      <thead>
        <tr>
          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Work Order Number</th>
          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Summary</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Description</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Priority</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Work Order Type</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Location</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Device Name</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Work Order Date</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Procedure</th>
          <th className="text-secondary opacity-7"></th>
        </tr>
      </thead>
      <tbody>
        {
            workOrders != null && workOrders != undefined ?
                filters?.limit == 0 ? 
                workOrders
                        .filter((wo: WorkOrder)=>filters.typeFilter=="ALL" || filters.typeFilter.trim().toUpperCase()==wo.WorkOrderType.Type)
                        .filter((wo: WorkOrder)=>(filters.statusFilter=="ALL" || wo.Status.Status.trim().toUpperCase() == filters.statusFilter.trim().toUpperCase()))
                            .map((wo: WorkOrder, i: number)=>{
                    return <tr key={i}>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo.WorkOrderId }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo.Title }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo.Description }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo.Priority }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo.WorkOrderType.Type }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold"></span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo.Device.ModelName }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo.DateCreated }</span>
                        </td>
                        <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">{ wo.Status.Status }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo.Procedure }</span>
                        </td>
                        <td className="align-middle">
                            {
                                wo.Status.Status != "CLOSED" ?
                                <Link to="/work-order-details" onClick={ ()=>appContext?.setSelectedWorkOrder(wo) } className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                    Update
                                </Link> :
                                <Link to="/work-order-details" onClick={ ()=>appContext?.setSelectedWorkOrder(wo) } className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                    View
                                </Link>
                            }
                        </td>
                    </tr>
                }) : 
                workOrders.slice(0, 5)
                    .filter((wo: WorkOrder)=>filters?.typeFilter=="ALL" || filters?.typeFilter.trim().toUpperCase()==wo.WorkOrderType.Type)
                    .filter((wo: WorkOrder)=>(filters?.statusFilter=="ALL" || wo.Status.Status.trim().toUpperCase() == filters?.statusFilter.trim().toUpperCase()))
                        .map((wo: WorkOrder, i: number)=>{
                    return <tr key={i}>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo.WorkOrderId }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo.Title }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo.Description }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo.Priority }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo.WorkOrderType.Type }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold"></span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo.Device.ModelName }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo.DateCreated }</span>
                        </td>
                        <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">{ wo.Status.Status }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo.Procedure }</span>
                        </td>
                        <td className="align-middle">
                            {
                                wo.Status.Status != "CLOSED" ?
                                <Link to="/work-order-details" onClick={ ()=>appContext?.setSelectedWorkOrder(wo) } className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                    Update
                                </Link> :
                                <Link to="/work-order-details" onClick={ ()=>appContext?.setSelectedWorkOrder(wo) } className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                                    View
                                </Link>
                            }
                        </td>
                    </tr>
                }) : <tr>No equipment available</tr>
        }
      </tbody>
    </table>
  </div>
}

export default WorkOrdersTable