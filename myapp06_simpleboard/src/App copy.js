import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [listcontent, setListContent] = useState([]);
  const [formContent, setFormContent] = useState({
    title : '',
    content : ''
  })
  const getValue=(e)=>{
    setFormContent({
      ...formContent,
      [e.target.name] : e.target.value
    })

  }
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
  //제목과 내용을 가지고 /api/insert ===> board 테이블 추가
  const submitBoard=() =>{
    axios.post('/api/insert',{
      title : formContent.title,
      content : formContent.content
    }).then(()=>{
      alert("등록완료")
      loadContent();
    })
    
  }
  return (
    <div>
      <h1> Simple Board </h1>
      <input type="text" name="title" placeholder="제목" onChange={getValue}/><br/>
      <textarea name="content" cols='50' rows='5' onChange={getValue}/><br/>
      <button onClick={submitBoard}>입력</button>
      <hr/>
      {
        listcontent.map((board,index)=>(
          <p key={index}>
          번호 : {board.num}<br/>
          제목 : {board.title}<br/>
          내용 : {board.content}<hr/>
          </p>
        ))
      }
    </div>
  );
}

export default App;
