import React from "react";

type Props = {
    name: string
    onClick: ()=>void
}

const Pill: React.FC<Props> = ({name, onClick})=>{
    return <span className="pill my-2" onClick={onClick}>{name}</span>
}

export default Pill