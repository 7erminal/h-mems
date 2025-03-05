import React from "react";

type Props = {
    name: string
    onClick: (a: string, b: string)=>void
    id: string
}

const Pill: React.FC<Props> = ({name, onClick, id})=>{
    return <span className="pill my-2" onClick={()=>onClick("ADD", id)}>{name}</span>
}

export default Pill