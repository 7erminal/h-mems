import React, { useContext } from "react";
import { Device } from "../../utils/types/Types";
import { Link } from "react-router-dom";
import ApplicationContext from "../../resources/contexts/ApplicationContext";

type Props = {
    equipment: Array<Device> | undefined
}

const EquipmentListTable: React.FC<Props> = ({equipment})=>{
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
            equipment != null && equipment != undefined ?
            equipment?.map((eq: Device, i: number)=>{
                    return <tr key={i}>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ eq.SerialNo }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ eq.EQType }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ eq.ModelNumber }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ eq.ManufacturedBy }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ eq.ManufacturedBy }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ eq.ManufacturedBy }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ eq.ManufacturedBy }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ eq.ManufacturedBy }</span>
                        </td>
                        <td className="align-middle text-center text-sm">
                            <span className="badge badge-sm bg-gradient-success">{ eq.Status.Status }</span>
                        </td>
                        <td className="align-middle text-center">
                            <span className="text-secondary text-xs font-weight-bold">{ eq.ManufacturedBy }</span>
                        </td>
                        <td className="align-middle">
                            <Link to="/equipment-details" onClick={ ()=>appContext?.setSelectedEquipment(eq) } className="text-secondary font-weight-bold text-xs" data-toggle="tooltip" data-original-title="Edit user">
                            View
                            </Link>
                        </td>
                    </tr>
                }) : <tr>No equipment available</tr>
        }
      </tbody>
    </table>
  </div>
}

export default EquipmentListTable