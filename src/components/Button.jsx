import { useState } from "react";
import Text from "./Text";

/* const Button = ()=>{
    
    const [number, setNumber] = useState(0);
    const sumar = () =>{
        setNumber(number+1);
    }
    const restar = ()=>{
        setNumber(number-1)
    }
    return(
        <div>
            <button onClick={restar}> restar</button>
            <h2>
                {number}
            </h2>
            <button onClick={sumar}> Sumar</button>
        </div>
    )
};
export default Button; */
import React from 'react'

function Button() {
    const [show, setShow] = useState(false);
    function handleShow() {
        setShow(!show);
        console.log(show);
    }
    return (
        <div>
            <button onClick={handleShow}>{show ? "ocultar" : "Mostrar"}</button>
            {show && <Text/>}
        </div>
    )
}

export default Button;