import React from "react";

type Props = {
    name: string
    description: string
    status: string
    contactNumber: string | undefined
}

const ListTab: React.FC<Props> = (Props)=>{
    console.log("Name here is "+Props.name)
    return <div style={{width: '100%', justifyContent: 'space-around', display: 'flex', paddingTop: '20px', paddingBottom: '20px', paddingLeft: '15px', paddingRight: '15px', color: 'black'}}>
        <div>
            {Props.name}
        </div>
        <div>
            {Props.status}
        </div>
        <div>
            {Props.contactNumber}
        </div>
    </div>
}

export default ListTab