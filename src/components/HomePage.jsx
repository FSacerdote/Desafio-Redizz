import { useState } from "react"
import styled from "styled-components"
import { IoArrowRedo } from "react-icons/io5";
import { IoArrowUndo } from "react-icons/io5";
import { BsEraser } from "react-icons/bs";

export default function HomePage (){
    const [dotsList, setDotsList] = useState([])
    const [removedDots, setRemovedDots] = useState([])

    
    function handleClick(event){
        const { clientX, clientY } = event        
        setDotsList([...dotsList, {clientX, clientY}])
        setRemovedDots([])
    }

    function handleClear(event){
        event.stopPropagation()
        setDotsList([])
        setRemovedDots([])
    }

    function handleUndo(event){
        event.stopPropagation()
        setRemovedDots([...removedDots, dotsList.pop()])
        setDotsList(dotsList)
    }

    function handleRedo(event){
        event.stopPropagation()
        setDotsList([...dotsList, removedDots.pop()])
        setRemovedDots(removedDots)
    }
    
    return(
        <PageContainer>
            <ScreenContainer onClick={handleClick}>
                {dotsList.map((dot, index)=> <Dot key={index} style={{left: dot.clientX - 10, top: dot.clientY - 10}}></Dot>)}
            <ButtonContainer>
                <button onClick={handleUndo} disabled={dotsList.length === 0}> <IoArrowUndo/> Desfazer</button>
                <button onClick={handleRedo} disabled={removedDots.length === 0}> <IoArrowRedo/> Refazer</button>
                <button onClick={handleClear}> <BsEraser /> Limpar</button>
            </ButtonContainer>
            </ScreenContainer>
        </PageContainer>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100dvh;
    background-color: #9165fa;
`

const ScreenContainer = styled.div`
    background-color: white;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &:hover{
        cursor: pointer;
    }
`

const Dot = styled.div`
    position: absolute;
    z-index: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #c891fc;
`

const ButtonContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 20px;
    button{
        z-index: 1;
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
            filter: brightness(0.8);
        }
    }
`