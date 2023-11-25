import { useState } from "react"
import styled from "styled-components"
import { IoArrowRedo } from "react-icons/io5";
import { IoArrowUndo } from "react-icons/io5";
import { BsEraser } from "react-icons/bs";

export default function Tela (){
    const [dotsList, setDotsList] = useState([])
    const [removedDots, setRemovedDots] = useState([])

    
    function handleClick(event){
        const { clientX, clientY } = event        
        setDotsList([...dotsList, {clientX, clientY}])
    }

    function handleClear(){
        setDotsList([])
        setRemovedDots([])
    }

    function handleUndo(){
        setRemovedDots([...removedDots, dotsList.pop()])
        setDotsList(dotsList)
    }
    
    return(
        <PageContainer>
            <ScreenContainer onClick={handleClick}>
                {dotsList.map((dot, index)=> <Dot key={index} style={{left: dot.clientX - 185, top: dot.clientY - 50}}></Dot>)}
            </ScreenContainer>
            <ButtonContainer>
                <Undo onClick={handleUndo} disabled={dotsList.length === 0}> <IoArrowUndo/> Undo</Undo>
                <Undo> <IoArrowRedo/> Redo</Undo>
                <Clear onClick={handleClear}> <BsEraser /> Clear</Clear>
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
    &:hover{
        cursor: pointer;
    }
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
    button{
        height: 60px;
        width: 120px;
        background-color: #c891fc;
        border: none;
        border-radius: 10px;
        color: white;
        font-size: 20px;
        &:hover{
            filter: brightness(0.9);
            cursor: pointer;
        }
        &:disabled{
            filter: brightness(0.9);
        }
    }
`

const Undo = styled.button`
    width: 120px;
`

const Clear = styled.button`
    width: 120px;
`