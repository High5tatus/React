import React,{Component} from "react";

// class PhoneInfo extends Component{
//     handleRemove = () =>{
//         const {info, onRemove} = this.props;
//         onRemove(info.id)
//     }
//     render(){
//         const {name, phone, id} = this.props.info;
//         const style ={
//             border : '1px solid black',
//             padding : '8px',
//             margin : '8px'
//         }
//         return(
//             <div style={style}>
//                 <div>ID {id}</div>
//                 <div>이름 {name}</div>
//                 <div>전화번호 {phone}</div>
//                 <button onClick={this.handleRemove}>삭제</button>
//                 <br/>
//             </div>
//         )
//     }
// }
const PhoneInfo=({info,onRemove}) =>{
    const handleRemove=() =>{
        onRemove(info.id)
    }
    const style ={
        border : '1px solid black',
        padding : '8px',
        margin : '8px'
    }

    return(
        <div style={style}>
            <div>ID {info.id}</div>
            <div>이름 {info.name}</div>
            <div>전화번호 {info.phone}</div>
            <button onClick={handleRemove}>삭제</button>
            <br/>
        </div>
    )
}

export default PhoneInfo;