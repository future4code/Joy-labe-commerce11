import React from "react";
import styled from "styled-components";

const CardProduto = styled.div`
    width: 14vw;
    height: 64vh;
    border: 1px solid black;
   
    img{
        height: 68%;
        width: 100%;
    }

`

export default class Produto extends React.Component{
   
    render(){

        return(
           <CardProduto>
               <img src={this.props.foto} />
               <p>{this.props.produto}</p>
               <p>{this.props.preco}</p>
               <button>Adicionar ao carrinho</button>
            </CardProduto>
            
        )
    }
}