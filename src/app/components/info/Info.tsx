"use client"

import style from "./info.module.css"

const Info = () => {

    const informativo = [
        {
           label: "FIQUE DESPREOCUPADO",
           body: "Possuímos um ótimo sistema de atendimento pós-venda com uma equipe especializada e oficinas credenciadas para deixar nossos clientes satisfeitos.",
           icon: 'pi    pi-thumbs-up-fill'
        },
        {
            label: "NÃO PERCA NA TROCA",
            body: "Somos especialistas em carros e, por isso, sabemos como avaliar o seu usado. Na Lions você pode receber até 90% do valor da tabela FIPE no momento da troca.",
            icon: "pi pi-money-bill"
        },
        {
            label: "NADA DE JUROS ALTOS",
            body: "Somos o líder nacional em financiamentos. Por consequência, grandes bancos fornecem para nossos clientes taxas de juros baixas e fácil aprovação de crédito.",
            icon: "pi pi-times"
        },
        {
            label: "ÓTIMOS PREÇOS",
            body: "Compramos carros em grandes lotes e com grandes descontos. Desta forma, conseguimos te repassar bons descontos",
            icon: 'pi pi-cart-plus'
        }
    ]

    return (
        <main className={style.main}>
            <div className={style.principal}>

                <h1 className={style.title}>CONHEÇA NOSSAS VANTAGENS</h1>
                <h3 className={style.subTitle}>Negocie com a Lions e tenha benefícios exclusivos</h3>

              <article className={style.information}>
                {informativo.map((e) => 
                  <div className={style.item_informativo} key={e.label}>
                    <i style={{fontSize: '50px',}} className={e.icon}></i>
                    <div>
                        <h2 style={{color: "black", textAlign: "center"}}>{e.label}</h2>
                        <p>{e.body}</p>
                    </div>
                  </div>
                 )}
              </article>
            </div>
        </main>
    )
}

export default Info