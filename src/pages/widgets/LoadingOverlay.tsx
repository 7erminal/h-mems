import React from "react";
import { Modal } from "react-bootstrap";

type Props = {
    show: boolean | undefined
    handleClose: ()=>void | undefined
}

const LoadingOverlay: React.FC<Props> = ({show, handleClose})=>{

    // useEffect(()=>{
    //     showButtonFunc()
    // },[])

    // const showButtonFunc = ()=>{
    //     setTimeout(() => {
    //         setShowButton(true);
    //     }, 3000);
    // }
    return <Modal show={show} onHide={handleClose} centered>
        <div className="centerDiv">
            { 
                <div className="larger-circle">
                <div className="rounded"></div>
                <div className="rounded"></div>
                <div className="rounded"></div>
                <div className="rounded"></div>
                <div className="rounded"></div>
                <div className="rounded"></div>
                <div className="rounded"></div>
                <div className="rounded"></div>
                <div className="logo-loading">
                    <div className="logo-logo"><span className="B">B</span><span className="K">K</span></div>
                </div>
            </div>
            }
        </div>
    </Modal>
}

export default LoadingOverlay