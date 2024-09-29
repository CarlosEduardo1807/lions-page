"use client"

import style from "./Locations.module.css"

const Locations = () => {

    const locais = [
        {
          nome: "ORLANDO",
          endereco: "4201 W Colonial Dr, Orlando, FL 32808, Estados Unidos",
          logo: "../../../assets/eua.png"
        },
        {
          nome: "OSASCO",
          endereco: "Av. Pref. Hirant Sanazar, 3 - Umuarama, Osasco - SP",
          logo: "../../../assets/brasil.png"
        },
        {
          nome: "VILA PRUDENTE",
          endereco: "Avenida Professor Luiz Ignácio Anhaia Mello 4272, Vila Prudente",
          logo: "../../../assets/brasil.png"
        },
        {
          nome: "NOVA IGUAÇU",
          endereco: "Av Carlos Marques Rollo 137, Jardim Império, Nova Iguaçu - RJ, 26225-630",
          logo: "../../../assets/brasil.png"  
        },
        {
          nome: "DUQUE DE CAXIAS",
          endereco: "Rod. Washington Luíz, 1375 - Parque Duque, Duque de Caxias - RJ, 25085-008",
          logo: "../../../assets/brasil.png"
        },
        {
          nome: "INTENDENTE MAGALHÃES",
          endereco: "Estrada Intendente Magalhães n° 462, 21330-790",
          logo: "../../../assets/brasil.png"
        },
        {
          nome: "NITERÓI",
          endereco: "RJ-104, 2620 - Baldeador, Niterói - RJ, 24140-005",
          logo: "../../../assets/brasil.png"
        },
        {
          nome: "BARRA MANSA",
          endereco: "R. Antônio Luiz Pires, S / N - Boa Vista I, Barra Mansa - RJ, 27332-360",
          logo: "../../../assets/brasil.png"
        },
        {
          nome: "CAMPO GRANDE",
          endereco: "Estr. Rio do A, 2211 - Campo Grande, Rio de Janeiro - RJ, 23080-300",
          logo: "../../../assets/brasil.png"
        }
      ];

    return(
        <main>

        <div>
            <h1 className={style.title}>Onde nos encontrar ?</h1>
        </div>

        <div className={style.container_locations}>
            {locais.map((e) => 
            <div className={style.container_locations_item} key={e.nome}>
                <h2>{e.nome}</h2>
                <p>{e.endereco}</p>
            </div>
            )}
        </div>


            

        </main>
    )

}

export default Locations