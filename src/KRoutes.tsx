import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; 
// import ActivityTracker from "./resources/ActivityTracker.tsx";
// import ApplicationContext from './resources/contexts/ApplicationContext';
// import NotififcationModal from "./components/NotificationModal.tsx";
// import Loading from "./widgets/Loading.tsx";
import ApplicationContext from "./resources/contexts/ApplicationContext";
import LoadingOverlay from "./pages/widgets/LoadingOverlay.tsx";
import ActivityTracker from "./resources/ActivityTracker.tsx";
import TRoutes from "./TRoutes.tsx";
import ARoutes from "./ARoutes.tsx";


const KRoutes: React.FC = () => {
  const appContext = useContext(ApplicationContext);

    return <AnimatePresence>
              <ActivityTracker>
                <Routes>
                    {/* <Route path="*" element={<NotFoundPage />} /> */}
                    {/* <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} /> */}
                    <Route path='/1/*' element={<TRoutes />} />
                    <Route path='/2/*' element={<ARoutes />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
                {/* <Invoice showModal={showInvoice} handleClose={handleShowInvoiceModalClose} invoice={selectedInvoice} />
                <NotififcationModal notificationProps={appContext!.notificationProps!} />
                <Loading show={appContext?.loading} handleClose={appContext!.handleLoadingClose} /> */}
                <LoadingOverlay show={appContext?.showLoading} handleClose={appContext!.loadingClose}/>
              </ActivityTracker>
            </AnimatePresence>
}

export default KRoutes;