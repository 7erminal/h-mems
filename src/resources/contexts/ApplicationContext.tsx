import { createContext, Dispatch, SetStateAction } from 'react';
import { Device, WorkOrder, WorkOrderFilters } from '../../utils/types/Types';

type ApplicationContextProps = {
    // showError: boolean
    // setShowError: Dispatch<SetStateAction<boolean>>
    // errorMessage: string
    // setErrorMessage: Dispatch<SetStateAction<string>>
    // showSuccess: boolean
    // setShowSuccess: Dispatch<SetStateAction<boolean>>
    // successMessage: string
    // setSuccessMessage: Dispatch<SetStateAction<string>>
    // setIsLoading: Dispatch<SetStateAction<boolean>>
    // isLoading: boolean
    showSideNav: (page: string, subPage: string)=>void
    // handleLoadingClose: ()=>void
    currentPage: string
    currentSubPage: string
    setCurrentSubPage: Dispatch<SetStateAction<string>>
    workOrderFilters: WorkOrderFilters | undefined
    setWorkOrderFilters: Dispatch<SetStateAction<WorkOrderFilters | undefined>>
    selectedEquipment: Device | undefined
    setSelectedEquipment: Dispatch<SetStateAction<Device | undefined>>
    selectedWorkOrder: WorkOrder | undefined
    setSelectedWorkOrder: Dispatch<SetStateAction<WorkOrder | undefined>>
  }

const ApplicationContext = createContext<ApplicationContextProps | undefined>(undefined);

export default ApplicationContext;