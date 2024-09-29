"use client"

import style from "./Navigation.module.css"
import Image from "next/image"
import Logo from "../../../assets/logoSemFundo.png"

const Navigation = () => {
      
    const navLinks = [
        {nome: "Estoque", path: "https://www.lionsseminovos.com.br/seminovos"}, 
        {nome: "Sobre nós", path: "https://www.lionsseminovos.com.br/sobre-nos"}, 
        {nome: "Onde estamos", path: "https://www.lionsseminovos.com.br/onde-estamos"}, 
        {nome: "Trabalhe conosco", path: "https://www.lionsseminovos.com.br/trabalheconosco"}
    ];

    return (
        <main className={style.main}>

            <Image className={style.logo} src={Logo} alt="Lions Page Logo" />

              <nav className={style.box_nav}>
                 {navLinks.map((i) => {
                   return <h4 onClick={() => window.open(i.path, "_blank")} className={style.text_nav}>{i.nome}</h4>;
                 })}
              </nav> 
           
        </main>
    )
}

export default Navigation