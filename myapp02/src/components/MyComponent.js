import React,{Children, Component} from "react";

// class MyComponent extends Component{
//     render(){
//         const{name, type, Children} = this.props
//         return(
//             <div>   
//                 구조분해할당 : {name} / {type} / {Children}
//             </div>
//         )
//     }
    
    // constructor(props){
    //     super(props)
    // }

    // render(){
    //     return(
    //         <div>
    //             <h3>{this.props.name} / {this.props.type} / {this.props.children}</h3>
    //         </div>
    //     );
    // }
//}

// function MyComponent(props){
//     return(
//         <div>
//             이름 : {props.name} <br/>
//             type : {props.type} <br/>
//             child : {props.children}
//         </div>
//     )
// }

// const MyComponent = (props) => {
//     return(
//         <div>
//             이름 : {props.name} <br/>
//             type : {props.type} <br/>
//             child : {props.children}
//         </div>
//     )
// }
const MyComponent =({name, type, children}) =>{
    return(
        <div>
            이름 const 분해할당 : {name} <br/>
            type : {type}<br/>
            child : {children}
        </div>
    )
}
export default MyComponent;