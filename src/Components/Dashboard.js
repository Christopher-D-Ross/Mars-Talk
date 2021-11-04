import React from "react";
import { Dashblock } from "./Dashblocks";
import { TitleMenu } from "./Title-Menu";

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <div className="title-menu" style={{display:"flex", justifyContent:"space-between"}}>
                <TitleMenu title="Dashboard" />
            </div>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
                <div style={{display: "flex", gap:"40px"}}>
                    <Dashblock text="# of Contacts" number="20" phrase="Folks!" />
                    <Dashblock text="# of Sent Messages" number="100" phrase="Talkins!" />
                    <Dashblock text="# of Groups" number="5" phrase="Clicks!" />
                </div>
            </div>
        </div>
    )
}