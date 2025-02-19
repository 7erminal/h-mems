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
    showLoading: boolean | undefined
    loadingClose: ()=>void | undefined
    loadingShow: ()=>void | undefined
    toggleSidenav: ()=>void
    pageTrack: string
    setPageTrack: Dispatch<SetStateAction<string>>
    subpageTrack: string
    setSubpageTrack: Dispatch<SetStateAction<string>>
    sideBarStateChange: boolean
    setSideBarStateChange: Dispatch<SetStateAction<boolean>>
    errorMessage: string
    setErrorMessage: Dispatch<SetStateAction<string>>
    toggleMenu: (p: string, r: string)=>void
    showError: boolean
    setShowError: Dispatch<SetStateAction<boolean>>
  }

const ApplicationContext = createContext<ApplicationContextProps | undefined>(undefined);

export default ApplicationContext;