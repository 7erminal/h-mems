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
import DepartmentsPage from "./pages/DepartmentsPage.tsx";
import EquipmentListPage from "./pages/EquipmentListPage.tsx";
import DashboardPage from "./pages/dashboard.tsx";
import EquipmentLibraryPage from "./pages/EquipmentLibraryPage.tsx";
import StockManagementPage from "./pages/StockManagementPage.tsx";
import WorkOrdersReportsPage from "./pages/WorkOrdersReportsPage.tsx";
import EquipmentReportsPage from "./pages/EquipmentReportsPage.tsx";
import EquipmentWorkOrdersPage from "./pages/EquipmentWorkOrdersPage.tsx";
import ActivityTracker from "./resources/ActivityTracker.tsx";
import Institutions from "./pages/Institutions.tsx";
import SideBar from "./pages/components/SideBar.tsx";
import UserManagementPage from "./pages/UserManagementPage.tsx";
import { InstitutionProvider } from "./resources/providers/InstitutionProvider.tsx";
import ViewInstitutionPage from "./pages/ViewInstitutionPage.tsx";
import Hospitals from "./pages/Hospitals.tsx";
import ViewHospitalPage from "./pages/ViewHospitalPage.tsx";
import GroupsAndRoles from "./pages/GroupsAndRoles.tsx";
import Groups from "./pages/Groups.tsx";
import Roles from "./pages/Roles.tsx";
import PermissionsC from "./pages/PermissionsC.tsx";


const ARoutes: React.FC = () => {
  const appContext = useContext(ApplicationContext);

    return <AnimatePresence>
              <ActivityTracker>
                <InstitutionProvider>
                  <div className="min-height-300 bg-primary position-absolute w-100"></div>
                  <SideBar />
                  <Routes>
                      {/* <Route path="*" element={<NotFoundPage />} /> */}
                      {/* <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} /> */}
                      <Route path='/home' element={<HomePage />} />
                      <Route path='/dashboard' element={<DashboardPage />} />
                      <Route path='/clinical-engineering-report' element={<ClinicalEngineeringMonthlyReport />} />
                      <Route path='/equipment-listing' element={<EquipmentListing />} />
                      <Route path='/equipment-library' element={<EquipmentLibraryPage />} />
                      <Route path='/equipment-work-orders' element={<EquipmentWorkOrdersPage />} />
                      <Route path='/equipment-reports' element={<EquipmentReportsPage />} />
                      <Route path='/stock-management' element={<StockManagementPage />} />
                      <Route path='/work-orders' element={<WorkOrders />} />
                      <Route path='/work-orders-reports' element={<WorkOrdersReportsPage />} />
                      <Route path='/work-orders-listings' element={<WorkOrdersListing />} />
                      <Route path='/equipment-details' element={<ViewEquipmentDetails eqDetails={appContext?.selectedEquipment} />} />
                      <Route path='/work-order-details' element={<ViewWorkOrderDetails woDetails={appContext?.selectedWorkOrder} />} />
                      <Route path='/equipment-work-orders' element={<WorkOrdersListing />} />
                      <Route path='/equipment-list' element={<EquipmentListPage />} />
                      <Route path='/departments' element={<DepartmentsPage />} />
                      <Route path='/hospitals' element={<Hospitals />} />
                      <Route path='/institutions' element={<Institutions />} />
                      <Route path='/user-management' element={<UserManagementPage />} />
                      <Route path='/view-institution' element={<ViewInstitutionPage />} />
                      <Route path='/view-hospital' element={<ViewHospitalPage />} />
                      <Route path='/groups-and-roles' element={<GroupsAndRoles />} />
                      <Route path='/groups' element={<Groups />} />
                      <Route path='/roles' element={<Roles />} />
                      <Route path='/permissions' element={<PermissionsC />} />
                      <Route path="*" element={<Navigate replace to="/" />} />
                  </Routes>
                  {/* <Invoice showModal={showInvoice} handleClose={handleShowInvoiceModalClose} invoice={selectedInvoice} />
                  <NotififcationModal notificationProps={appContext!.notificationProps!} />
                  <Loading show={appContext?.loading} handleClose={appContext!.handleLoadingClose} /> */}
                </InstitutionProvider>
              </ActivityTracker>
            </AnimatePresence>
}

export default ARoutes;