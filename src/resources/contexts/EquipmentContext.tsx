import { createContext } from 'react';
import { CostCenter, CostCenterReq, DeviceInclusion, DeviceInclusionReq, Equipment, EquipmentClass, EquipmentClassReq, EquipmentReq } from '../../utils/types/Types';

type EquipmentContextProps = {
    costCenters: Array<CostCenter>
    equipmentClasses: Array<EquipmentClass>
    deviceInclusions: Array<DeviceInclusion>
    equipment: Array<Equipment>
    costCenterReq: CostCenterReq | undefined
    equipmentClassReq: EquipmentClassReq | undefined
    deviceInclusionReq: DeviceInclusionReq | undefined
    setCostCenterReq: (costCenterReq: CostCenterReq) => void
    setEquipmentClassReq: (equipmentClassReq: EquipmentClassReq) => void
    setDeviceInclusionReq: (deviceInclusionReq: DeviceInclusionReq) => void
    getCostCenters: () => Promise<boolean>
    addCostCenter: () => Promise<boolean>
    getEquipmentClasses: () => Promise<boolean>
    addEquipmentClass: () => Promise<boolean>
    getDeviceInclusions: () => Promise<boolean>
    addDeviceInclusion: () => Promise<boolean>
    getEquipment: () => Promise<boolean>
    addEquipment: () => Promise<boolean>
    equipmentReq: EquipmentReq
    setEquipmentReq: (equipmentReq: EquipmentReq) => void
  }
  

const EquipmentContext = createContext<EquipmentContextProps | undefined>(undefined);

export default EquipmentContext;