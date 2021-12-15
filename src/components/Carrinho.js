import React from "react";
import styled from "styled-components";
import ItemCarrinho from "./ItemCarrinho";

const ContainerCarrinho = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 6px;
    margin-right: 10px;
    width: 19.4vw;
    height: 100%;
    border: 1px solid black;
    justify-content: start;
    align-items: flex-start; 

`

export default class Carrinho extends React.Component{
   
    render(){

        return(
            <ContainerCarrinho>
                <h3>Carrinho</h3>
                <ItemCarrinho quantidade="1x" produto="Caneca astronauta" />
                <ItemCarrinho quantidade="1x" produto="Camiseta astronauta" />
                <ItemCarrinho quantidade="1x" produto="Foguete espacial" />
                <ItemCarrinho quantidade="1x" produto="Traje astronauta" />
                <p>Valor total: R$ 100,00</p>
            </ContainerCarrinho>
        )
    }
}