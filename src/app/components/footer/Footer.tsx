"use client"

import style from "./Footer.module.css"

import Image from "next/image"
import Logo from "../../../assets/logoSemFundo.png"

const Footer = () => {

    return (
        <footer className={style.footer}>

            <div className={style.divider}></div>
            <div className={style.container_logo}>
               <Image className={style.logo} src={Logo} alt="Lions Page Logo" />
               <p>©2024 por Lions Seminovos Comércio de Automóveis LTDA</p>
            </div>

        </footer>
    )

}

export default Footer