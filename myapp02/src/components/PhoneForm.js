import React,{Component} from "react";
class PhoneForm extends Component{
    state = {
        name : '',
        phone : ''
    }

    handleSubmit = (e) => { //e <-이벤트의 e 
        e.preventDefault() ;//submit 하면 페이지 리로드하는데 이를 방지
        this.props.onCreate(this.state)
        this.setState = {
            name : '',
            phone : ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input placeholder="이름" name="name" onChange={this.handleChange} value={this.state.name}/>

                <input placeholder="전화번호" name="phone" onChange={this.handleChange} value={this.state.phone}/>
                <button type="submit">등록</button>

            </form>
        );
    }
}
export default PhoneForm;