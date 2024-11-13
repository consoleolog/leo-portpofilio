import React from "react";
import Navbar from "@/components/common/Navbar";

export default function V1Layout({children}: Readonly<{ children: React.ReactNode; }>) {


    return (
        <>
            <Navbar/>
            {children}
        </>
    );
}