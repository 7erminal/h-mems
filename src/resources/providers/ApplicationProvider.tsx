import React, { ReactNode, useState } from "react";
import ApplicationContext from '../contexts/ApplicationContext';
import { Device, WorkOrder, WorkOrderFilters } from "../../utils/types/Types";
import { statuses } from "../../utils/data/Data";

export const ApplicationProvider: React.FC<{ children: ReactNode }> = ({ children })=>{
    const [currentPage, setCurrentPage] = useState('home')
    const [currentSubPage, setCurrentSubPage] = useState('')
    const [workOrderFilters, setWorkOrderFilters] = useState<WorkOrderFilters>()
    const [selectedEquipment, setSelectedEquipment] = useState<Device>()
    const [selectedWorkOrder, setSelectedWorkOrder] = useState<WorkOrder>()

    // Show Side Nav
    const showSideNav = async (page: string, subPage: string) =>{
        console.log("Showing side nav")
        console.log("Page is "+page+" and sub page is "+subPage)
        // Set the current page
        setCurrentPage(page)
        setCurrentSubPage(subPage)

        if(subPage != ""){
            if(page=="wo"){
                console.log("Page is work order")
                if(subPage=='preventative maintenance'){
                    const wo: WorkOrderFilters = {limit: 0, statusFilter: 'ALL', typeFilter: 'MAINTENANCE', title: 'Preventative Maintenance'}
                    setWorkOrderFilters({...workOrderFilters, ...wo})
                } else if(subPage=='pending work orders'){
                    const wo: WorkOrderFilters = {limit: 0, statusFilter: statuses[1].Status, typeFilter: 'ALL', title: 'Pending Work Orders Report'}
                    setWorkOrderFilters({...workOrderFilters, ...wo})
                } else if(subPage=='closed work orders'){
                    const wo: WorkOrderFilters = {limit: 0, statusFilter: statuses[4].Status, typeFilter: 'ALL', title: 'Closed Work Orders Report'}
                    setWorkOrderFilters({...workOrderFilters, ...wo})
                }
            } else if (page = "equipment-listing"){
                if(subPage=='pending equipment work orders'){
                    const wo: WorkOrderFilters = {limit: 0, statusFilter: statuses[1].Status, typeFilter: 'ALL', title: 'Pending Work Orders Report'}
                    setWorkOrderFilters({...workOrderFilters, ...wo})
                }
            }
        }

        let body = document.getElementsByTagName('body')[0];
        let className = 'g-sidenav-pinned';
        const iconSidenav = document.getElementById('iconSidenav')!;
        const sidenav = document.getElementById('sidenav-main')!;
  
        if (body.classList.contains(className)) {
            body.classList.remove(className);
            setTimeout(function() {
              sidenav.classList.remove('bg-white');
            }, 100);
            sidenav.classList.remove('bg-transparent');
        
          } else {
            body.classList.add(className);
            sidenav.classList.add('bg-white');
            sidenav.classList.remove('bg-transparent');
            iconSidenav.classList.remove('d-none');
          }
      }

    return <ApplicationContext.Provider value={
        {
            showSideNav,
            currentPage,
            currentSubPage,
            setCurrentSubPage,
            workOrderFilters,
            setWorkOrderFilters,
            selectedEquipment,
            setSelectedEquipment,
            selectedWorkOrder,
            setSelectedWorkOrder
        }
    }>
        {children}
    </ApplicationContext.Provider>
}