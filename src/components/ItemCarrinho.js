import React from "react";
import styled from "styled-components";

const DivItemCarrinho = styled.div`
    display: grid;
    grid-template-columns: 2fr 10fr 1fr;
    row-gap: 10px;
    align-items: center;
`
const Quantidade = styled.p`
`
const ProdutoCarrinho = styled.p`

`
const BotaoRemover = styled.button`
    margin-right: 10px;

`
export default class ItemCarrinho extends React.Component{
   
    render(){

        return(
            <DivItemCarrinho>
                <Quantidade>{this.props.quantidade}</Quantidade>
                <ProdutoCarrinho>{this.props.produto}</ProdutoCarrinho>
                <BotaoRemover>Remover</BotaoRemover>
            </DivItemCarrinho>
        )
    }
}