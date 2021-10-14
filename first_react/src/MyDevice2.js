import React,{Component} from "react";
import axios from 'axios'

class MyDevice2 extends Component{
    constructor(props){
        super(props)
        console.log('생성자');
        console.log(props);
        console.log('children : ' + props.children)
    }
    state ={
        datas : []

    };

    getMyData = async() => {
        let data1 = await axios.get('');
    }

    render(){
        return(
            <div>
                <h3>MyDevice2</h3>
                children : {this.props.children}
            </div>
        )
    }
}
export default MyDevice2;