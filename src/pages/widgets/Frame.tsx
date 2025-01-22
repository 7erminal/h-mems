import React from "react"
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

const Frame: React.FC = ()=>{
    return <>
    <div className="min-height-300 bg-primary position-absolute w-100"></div>
    <SideBar />
    <main className="main-content position-relative border-radius-lg ">
    <NavBar />
    </main>
    </>
}

export default Frame