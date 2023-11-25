import { useState } from "react"
import styled from "styled-components"
import { IoArrowRedo } from "react-icons/io5";
import { IoArrowUndo } from "react-icons/io5";

export default function Tela (){
    const [dotsList, setDotsList] = useState([])

    
    function handleClick(event){
        const { clientX, clientY } = event        
        setDotsList([...dotsList, {clientX, clientY}])
    }

    function handleClear(){
        setDotsList([])
    }
    
    return(
        <PageContainer>
            <ScreenContainer onClick={handleClick}>
                {dotsList.map((dot, index)=> <Dot key={index} style={{left: dot.clientX - 185, top: dot.clientY - 50}}></Dot>)}
            </ScreenContainer>
            <ButtonContainer>
                <Undo> <IoArrowUndo /> Undo</Undo>
                <Undo> <IoArrowRedo />Redo</Undo>
                <Clear onClick={handleClear}>Clear</Clear>
            </ButtonContainer>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100dvh;
    background-color: #9165fa;
`

const ScreenContainer = styled.div`
    background-color: white;
    position: relative;
    width: 1500px;
    height: 800px;
    overflow: hidden;
`

const Dot = styled.div`
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: blue;
`

const ButtonContainer = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 20px;
`

const Undo = styled.button`
    width: 120px;
    height: 60px;
    background-color: #c891fc;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 20px;
`

const Clear = styled.button`
    width: 60px;
    height: 60px;
    background-color: #c891fc;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 20px;
`