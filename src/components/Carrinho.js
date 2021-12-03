import React from "react";
import styled from "styled-components";

const ContainerCarrinho = styled.div`
    display: flex;
    margin-right: 10px;
    width: 20vw;
    height: 100%;
    border: 1px solid black;
    justify-content: center;

`

export default class Carrinho extends React.Component{
   
    render(){

        return(
            <ContainerCarrinho>
                <h3>Carrinho</h3>
            </ContainerCarrinho>
        )
    }
}