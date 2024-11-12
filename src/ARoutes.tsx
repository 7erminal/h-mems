import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; 
// import ActivityTracker from "./resources/ActivityTracker.tsx";
// import ApplicationContext from './resources/contexts/ApplicationContext';
// import NotififcationModal from "./components/NotificationModal.tsx";
// import Loading from "./widgets/Loading.tsx";
import HomePage from "./pages/HomePage.tsx";
import ClinicalEngineeringMonthlyReport from "./pages/ClinicalEngineeringMonthlyReport.tsx";
import EquipmentListing from "./pages/EquipmentListing.tsx";
import WorkOrders from "./pages/WorkOrders.tsx";
import WorkOrdersListing from "./pages/WorkOrdersListPage.tsx";
import ViewEquipmentDetails from "./pages/ViewEquipmentDetails.tsx";
import ApplicationContext from "./resources/contexts/ApplicationContext";
import ViewWorkOrderDetails from "./pages/ViewWorkOrderDetails.tsx";


const ARoutes: React.FC = () => {
  const appContext = useContext(ApplicationContext);

    return <AnimatePresence>
              {/* <ActivityTracker> */}
                <Routes>
                    {/* <Route path="*" element={<NotFoundPage />} /> */}
                    {/* <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} /> */}
                    <Route path='/' element={<HomePage />} />
                    <Route path='/clinical-engineering-report' element={<ClinicalEngineeringMonthlyReport />} />
                    <Route path='/equipment-listing' element={<EquipmentListing />} />
                    <Route path='/work-orders' element={<WorkOrders />} />
                    <Route path='/work-orders-listings' element={<WorkOrdersListing />} />
                    <Route path='/equipment-details' element={<ViewEquipmentDetails eqDetails={appContext?.selectedEquipment} />} />
                    <Route path='/work-order-details' element={<ViewWorkOrderDetails woDetails={appContext?.selectedWorkOrder} />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
                {/* <Invoice showModal={showInvoice} handleClose={handleShowInvoiceModalClose} invoice={selectedInvoice} />
                <NotififcationModal notificationProps={appContext!.notificationProps!} />
                <Loading show={appContext?.loading} handleClose={appContext!.handleLoadingClose} /> */}
              {/* </ActivityTracker> */}
            </AnimatePresence>
}

export default ARoutes;