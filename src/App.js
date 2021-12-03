import React from "react";
import Filtros from './components/Filtros';
import Carrinho from './components/Carrinho';
import styled from "styled-components";
import Produto from "./components/Produto";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

`
const ContainerProdutos = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;

`
const ContainerHome = styled.div`
  text-align: center;
`

export default class App extends React.Component{

  render(){

    return(
      <MainContainer>
        <Filtros />
        <ContainerHome>
          <h1>Produtos</h1>  
          <ContainerProdutos>
            <Produto foto="https://picsum.photos/200/321" produto="produto 1" preco="Preço: R$ 100" />
            <Produto foto="https://picsum.photos/200/320" produto="Produto 2" preco="Preço: R$ 200" />
            <Produto foto="https://picsum.photos/200/310" produto="Produto 3" preco="Preço: R$ 300" />
            <Produto foto="https://picsum.photos/200/370" produto="Produto 4" preco="Preço: R$ 400" />
          </ContainerProdutos>
        </ContainerHome>

        <Carrinho />
      </MainContainer>
    )
  }


}

