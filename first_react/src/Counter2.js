import React,{Component} from "react";
import Counter from "./Counter";

class Counter2 extends Component{
    state ={
        myAge : 0
    }
    // this.setState(({count})=>{return {count : count+1}})
    plus = () =>{
        this.setState(st =>({
            myAge : st.myAge + 1
        }))
    }
    minus = () =>{
        this.setState(st =>({
            myAge : st.myAge - 1
        }))
    }
    componentDidMount(){
        console.log("in componentDidmount");
    }
    componentDidUpdate(){
        console.log("in componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("in componentWillUnmount");
    }

    render(){
        return(
            <div>
                <span>나이 : {this.state.myAge}</span>
                <button onClick={this.plus}>증가</button>
                <button onClick={this.minus}>감소</button>
            </div>
        )
    }

}
export default Counter2;