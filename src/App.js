import React from "react";
import Filtros from './components/Filtros';
import Carrinho from './components/Carrinho';
import styled from "styled-components";
import Produto from "./components/Produto";
import ItemCarrinho from "./components/ItemCarrinho";

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
            <Produto foto="https://static3.tcdn.com.br/img/img_prod/460977/caneca_astronaut_swing_moon_space_nasa_astronauta_balanco_na_lua_espaco_preta_ev_79631_1_1435e7b084994340990279c3426d20fd.jpg" produto="Caneca astronauta" preco="Preço: R$ 30,00" />
            <Produto foto="https://www.dhresource.com/0x0/f2/albu/g8/M00/BA/F7/rBVaVFxBkX6AKKE3AAP53O9WRuE019.jpg" produto="Camiseta astronauta" preco="Preço: R$ 100,00" />
            <Produto foto="https://m.media-amazon.com/images/I/51vd9tc6tNL._AC_SX425_.jpg" produto="Foguete espacial" preco="Preço: R$ 400,00" />
            <Produto foto="https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2014/05/02/140502075522_nasa_z1_spacesuit_224x280_nasa.jpg" produto="Traje espacial" preco="Preço: R$ 270,00" />
          </ContainerProdutos>
        </ContainerHome>

        <Carrinho />
         
      </MainContainer>
    )
  }


}

