import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion"; 
// import ActivityTracker from "./resources/ActivityTracker.tsx";
// import ApplicationContext from './resources/contexts/ApplicationContext';
// import NotififcationModal from "./components/NotificationModal.tsx";
// import Loading from "./widgets/Loading.tsx";
import SignIn from "./pages/SignIn.tsx";
import LandingPage from "./pages/LandingPage.tsx";


const TRoutes: React.FC = () => {
    return <AnimatePresence>
                <Routes>
                    {/* <Route path="*" element={<NotFoundPage />} /> */}
                    {/* <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} /> */}
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/sign-in' element={<SignIn />} />
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
                {/* <Invoice showModal={showInvoice} handleClose={handleShowInvoiceModalClose} invoice={selectedInvoice} />
                <NotififcationModal notificationProps={appContext!.notificationProps!} />
                <Loading show={appContext?.loading} handleClose={appContext!.handleLoadingClose} /> */}
            </AnimatePresence>
}

export default TRoutes;