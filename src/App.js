import React from "react";
import Filtros from './components/Filtros';
import Carrinho from './components/Carrinho';
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  

`
const ContainerProdutos = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;

`

export default class App extends React.Component{

  render(){

    return(
      <MainContainer>
        <Filtros>
          
        </Filtros>
        

        <ContainerProdutos>
          
          
          <h1>Produtos</h1>
        </ContainerProdutos>

        <Carrinho></Carrinho>
      </MainContainer>
    )
  }


}

