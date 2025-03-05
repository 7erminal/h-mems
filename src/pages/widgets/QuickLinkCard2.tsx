import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

type Props = {
    count: number | undefined
    name: string
    icon: string
    action: ()=>void
}

const QuickLinkCard2: React.FC<Props> = ({count, name, icon, action})=>{
    return <div>
                <h2>{count}</h2>
                <h4>{name}</h4>
                <span className="add-button" onClick={action}><Icon icon={icon} width="35" height="35" color="white" /></span>
            </div>
}

export default QuickLinkCard2