"use client";

import styles from "@/styles/navbar/navbar.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {CommonConst} from "@/util/commonConst";
import { useEffect } from "react";
import { changeTheme, RootState } from "@/lib/store";

import LoginBtn from "@/components/auth/LoginBtn";

export default function Navbar() {
    const dispatch = useDispatch();

    const theme = useSelector((state:RootState) => state.theme);

    useEffect(()=>{

    }, [theme]);

    return (
        <header className={styles.header}>
            <LoginBtn/>

        </header>
    );
}

