import { useState } from "react"

export default function Tela (){
    const [dotsList, setDotsList] = useState([])

    
    function handleClick(event){
        const { clientX, clientY } = event        
        setDotsList([...dotsList, {clientX, clientY}])
    }
    
    return(
        <div style={{ position: 'relative', height: '400px', border: '1px solid #ccc' }} onClick={handleClick}>
            {dotsList.map((dot)=> <div
                style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'blue',
                left: dot.clientX - 20,
                top: dot.clientY -20,
                }}></div>)}
        </div>
    )
}