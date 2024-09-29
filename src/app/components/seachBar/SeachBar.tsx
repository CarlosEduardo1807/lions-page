"use client"

import style from "./SeachBar.module.css"

import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from "primereact/inputtext";
import { Toast } from 'primereact/toast';
import React, { useRef, useState } from "react";

interface carros {
    nome: string;
}
        
const SeachBar = () => {

    const toast = useRef<Toast>(null);

    const [value, setValue] = useState("")
    const [listaMarcas, setListaMarcas] = useState<carros[]>()

    const list = [
        {nome: "Toyota"},
        {nome: "Honda"},
        {nome: "Ford"} ,
        {nome: "Chevrolet"} ,
        {nome: "Volkswagen"} ,
        {nome: "BMW"} ,
        {nome: "Mercedes-Benz"} ,
        {nome: "Audi"} ,
        {nome: "Nissan"} ,
        {nome: "Hyundai"} ,
        {nome: "Kia"} ,
        {nome: "Peugeot"} ,
        {nome: "Fiat"} ,
        {nome: "Jeep"} ,
        {nome: "Renault"},
      ]

    const buscarMarcas = (marca: string) => {

        const removeSpaces = marca.trim()

        if (removeSpaces === "") {
            setListaMarcas([]);
            return;
        }

        const filter = list.filter(i => {
            return i.nome.toLowerCase().includes(removeSpaces.toLowerCase());
        }).slice(0, 6);

        setListaMarcas(filter);
        
    }  

    return (
        <main className={style.main}>

        <Toast ref={toast}/>

        <div className={style.container_title}>
            <h3>SELECIONE SUA MARCA</h3>
        </div>

        <div className={style.box_input}>
           <IconField iconPosition="right">
              <InputIcon className="pi pi-search"> </InputIcon>
              <InputText value={value} onChange={((e) => {
                setValue(e.target.value)
                buscarMarcas(e.target.value)
              })} className={style.input} placeholder="Search" />
            </IconField>
        </div>
        
        <div className={style.container_seach_list}>
            {listaMarcas && listaMarcas.length > 0 && listaMarcas.map((i) => 
                <div onClick={() => {
                    toast.current?.show({severity:'info', summary: 'Info', detail:`Marca ${i.nome} Selecionada`, life: 3000});
                    setValue('')
                    setListaMarcas([])
                    }} className={style.seach_list_name}>
                   <h3 key={i.nome} className={style.text_nav}>{i.nome}</h3>
                </div>
            )}
         </div>

        </main>
    )

}

export default SeachBar