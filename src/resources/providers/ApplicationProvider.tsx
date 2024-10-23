import React, { useState } from "react";
import ApplicationContext from '../contexts/ApplicationContext';

const ApplicationProvider: React.FC = ()=>{
    const [currentPage, setCurrentPage] = useState('home')

    // Show Side Nav
    const showSideNav = (page: string) =>{
        console.log("Showing side nav")
        // Set the current page
        setCurrentPage(page)

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
            currentPage
        }
    }></ApplicationContext.Provider>
}

export default ApplicationProvider