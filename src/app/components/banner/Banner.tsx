'use client'

import Image from 'next/image'
import style from './Banner.module.css'

const Banner = () => {

    return (
        <main className={style.main}>
            <Image className={style.logo} src={require("../../../assets/carro3.jpeg")} alt="Lions Page bamner"/>

            <div className={style.container_text}>
                <h1 className={style.title}>SOLICITE UM ORCAMENTO</h1>
                <h2 className={style.subtitle}>E RECEBA UM ORCAMENTO EM 24 HORAS</h2>
            </div>

            <Image className={style.logo} src={require("../../../assets/carro1.jpg")} alt="Lions Page bamner"/>

        </main>
    )
}

export default Banner