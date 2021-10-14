import React, { useState } from "react";

const Counter = () =>{
    const [number, setNumber] = useState(0)
    const onIncrease = () => {
        setNumber(preNum => preNum+1)
    }
    const onDecrease = () => {
        setNumber(preNum => preNum-1)
    }
    return(
        <div>
            <h1>{number}</h1>            
            <button onClick={onDecrease}>-1</button>
            <button onClick={onIncrease}>+1</button>
        </div>
    )
}


export default Counter;