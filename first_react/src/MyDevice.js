import React from "react";

const MyDevice = ({mydata}) => {
    return(
        <div>
            <h3>MyDevice</h3>
            {
                mydata.MyDeviceData.map((device, index)=>{
                    console.log(device.name)
                    console.log(JSON.stringify(device.name))
                    return(
                        <div key={index}>
                            키 : {index} <br/>
                            이름 : {device.name} <br/>
                            램 :  {device.RAM} <br/>
                            홈버튼 :  {(device.HomeButton===true)?'있음':'없음'} <br/><br/>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default MyDevice;