import React,{Component, component} from "react";

class Welcome extends Component{
    render(){
        const{name, heroName} = this.props
        return(
            <div>   
                <h3>Welcome!!! {name} / {heroName}</h3>
            </div>
        )
    }

    // constructor(props){
    //     super(props)
    // }

    // render(){
    //     return(
    //         <div>
    //             <h3>Welcome 컴포넌트 : {this.props.name} / {this.props.heroName}</h3>
                
    //         </div>
    //     );
    // }
}
export default Welcome;