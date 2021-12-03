import React from "react";
import styled from "styled-components";

const ContainerFiltro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 10px;    
    margin-left: 10px;
    width: 20vw;
    height: 100%;
    border: 1px solid black;
    
`

export default class Filtros extends React.Component{
   
    render(){

        return(
            <ContainerFiltro>
                <h3>Filtros</h3>
                <form>
                    <p>Valor mínimo:</p>
                    <input type="number" />
                    <p>Valor máximo:</p>
                    <input type="number" />
                    <p>Busca por nome:</p>
                    <input type="text" />
                    <p>Ordenação:</p>
                    <select>
                        <option>Crescente</option>
                        <option>Decrescente</option>
                    </select>

                </form>
            </ContainerFiltro>
        )
    }
}