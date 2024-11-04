import React from "react";
import { Button } from "react-bootstrap";
import { Icon } from '@iconify/react';

type Props = {
    title: string
    onClick: ()=>void
    icon: string
}

const QuickLinkCard: React.FC<Props> = ({title, onClick, icon})=>{
    return <Button className="quicklink-button" type="button" onClick={onClick}><Icon icon={icon} height={30} /><br/><br/>{title}</Button>
}

export default QuickLinkCard;