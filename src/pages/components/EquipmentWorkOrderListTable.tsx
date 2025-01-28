import React, { useContext } from "react";
import { WorkOrder } from "../../utils/types/Types";
import { Link } from "react-router-dom";
import ApplicationContext from "../../resources/contexts/ApplicationContext";

type Props = {
    wo: Array<WorkOrder | undefined> | undefined
}

const EquipmentWorkOrderListTable: React.FC<Props> = ({wo})=>{
    const appContext = useContext(ApplicationContext);
    
    return <div className="table-responsive p-0">
    <table className="table align-items-center mb-0">
      <thead>
        <tr>
          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Serial #</th>
          <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">EQ Type</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Model #</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Manufacturer</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Department</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Location</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">DI</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Next Date</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Status</th>
          <th className="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Risk</th>
          <th className="text-secondary opacity-7"></th>
        </tr>
      </thead>
      <tbody>
        {
            wo != null && wo != undefined ?
            wo?.map((wo: WorkOrder | undefined, i: number)=>{
                    return <tr key={i}>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo?.Device?.SerialNo }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo?.Device?.EQType }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo?.Device?.ModelNumber }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo?.Device?.ManufacturedBy }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo?.Device?.ManufacturedBy }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo?.Device?.ManufacturedBy }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo?.Device?.ManufacturedBy }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo?.Device?.ManufacturedBy }</span>
                        </td>
                        <td className="align-middle text-center text-sm">
                            {
                                wo?.Device?.Status.StatusId == 1 ? 
                                <span className="badge badge-sm bg-gradient-success">{ wo?.Device?.Status.Status }</span>
                                :
                                <span className="badge badge-sm bg-gradient-danger">{ wo?.Device?.Status.Status }</span>
                            }
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ wo?.Device?.ManufacturedBy }</span>
                        </td>
                        <td className="align-middle">
                            {
                                wo?.Status.Status != "CLOSED" ?
                                <Link to="/work-order-details" onClick={ ()=>appContext?.setSelectedWorkOrder(wo) } className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit work order">
                                    Update
                                </Link> :
                                <Link to="/work-order-details" onClick={ ()=>appContext?.setSelectedWorkOrder(wo) } className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit work order">
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

export default EquipmentWorkOrderListTable