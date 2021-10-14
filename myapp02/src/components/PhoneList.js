import React,{Component} from "react";
import PhoneInfo from "./PhoneInfo";
// class PhoneList extends Component{
//     render(){
//         const {data,onRemove} = this.props
//         return(
//             <div>
//                 {
//                     data.map((info)=>{
//                         return(
//                         <PhoneInfo key={info.id} info = {info} onRemove = {onRemove}/>
//                         )
//                     })
//                 }  
//             </div>
//         )
//     }
// }
const PhoneList = ({ data, onRemove }) => {
    const list = data.map((info)=>(
        <PhoneInfo key={info.id} info = {info} onRemove = {onRemove}/>
    ))
    return (
        <div>
            {/* {
                data.map((info) => {
                    return (
                        <PhoneInfo key={info.id} info={info} onRemove={onRemove} />
                    )
                })
            } */}
        <hr/>
        {list}
        </div>
    )
}

export default PhoneList