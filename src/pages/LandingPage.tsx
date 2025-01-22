import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = ()=>{
    const navigate = useNavigate();
    const [showButton, setShowButton] = useState(false)

    useEffect(()=>{
        showButtonFunc()
    },[])

    const showButtonFunc = ()=>{
        setTimeout(() => {
            setShowButton(true);
        }, 3000);
    }
    return <div className="landing-page">
        <div className="centerDiv">
            {
                showButton ? 
                <Button className="landing-button" style={{display: showButton == true ? "block" : "none"}} onClick={()=>{ navigate("/sign-in") }}>Continue</Button> : 
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
    </div>
}

export default LandingPage