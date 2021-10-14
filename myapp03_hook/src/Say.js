import React, { useState } from "react";

const Say =() => {
    const [message, setMessage] = useState("안뇽")
    const onClickEnter = () =>{
        setMessage("입장하셨습니다.")
    }
    const onClickLeave = () =>{
        setMessage("퇴장하셨습니다.")
    }
    
    const[color, setColor] = useState('black')

    const onClickColor = () =>{ 
        //setColor ('pink')
        changeColor("pink")
    }
    const changeColor = (color) =>{
        setColor (color)
    }

    return(
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color}}>{message}</h1>
            <br/>
            {/* <button onClick={changeColor('red')}>빨간색</button>   무한 루프!!!!!! ()=> 필수!!!!    */} 
            <button onClick={()=>changeColor('red')}>빨간색</button>
            <button onClick={()=>changeColor('green')}>초록색</button>
            <button onClick={()=>changeColor('blue')}>파란색</button>
            <button style={{color:'pink'}} onClick={onClickColor}>분홍색</button>

        </div>
    )
}
export default Say;