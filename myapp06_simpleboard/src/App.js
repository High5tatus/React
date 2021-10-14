import axios from 'axios';
import { useState, useEffect } from 'react';
import BoardForm from './BoardForm';
import BoardList from './BoardList';

function App() {
  const [listcontent, setListContent] = useState([]);
  
  useEffect(()=>{
    loadContent();
  },[])
  const loadContent = () =>{
    axios.get('/api/get')
      .then((resp)=>{
        console.log(resp.data);
        setListContent(resp.data);
      })
  }
  const boardDelete = (num) =>{
    axios.delete('/api/delete/' + num)
    .then(()=>{
        alert("삭제성공")
        setListContent(listcontent.filter(board=>board.num!==num))
    })
}
  return (
    <div>
      <h1> Simple Board </h1>
      <BoardForm loadContent={loadContent}/>
      <BoardList lists={listcontent} boardDelete={boardDelete}/> 
    </div>
  );
}

export default App;
