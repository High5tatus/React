import React, {Component} from 'react';
import Welcome from './components/Welcome';
import MyComponent from './components/MyComponent';
import PhoneForm from './components/PhoneForm';
import PhoneList from './components/PhoneList';

class App extends Component{
  id = 2

  state = {
    information : [
      {
        id : 0,
        name : "홍길동",
        phone : "010-1111-1111"
      },
      {
        id : 1,
        name : "이순신",
        phone : "010-2222-2222"
      }
    ]
  }
  handleCreate = (data) =>{
    console.log(data)
    const {information} = this.state;

    this.setState({
      information : information.concat({id:this.id++, ...data})
    })
  }
  //삭제
  handleRemove = (id) => {
    const {information} = this.state
    this.setState({
      information : information.filter(infor => infor.id !== id)
    })
  }

  render(){
    return(
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <PhoneList data={this.state.information} onRemove={this.handleRemove}/>

        
        <Welcome name="홍길동" heroName="영웅"/>
        <MyComponent name="myComponent" type="component">리액트</MyComponent>
      </div>
    )
  }
}

export default App;
