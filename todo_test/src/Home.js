import axios from 'axios';
import { useState, useEffect } from 'react';
import TodoList from './TodoList';
import './App.css';
import { Container, Form } from 'react-bootstrap';

const Home = () =>{ 

    const [listcontent, setListContent] = useState([]);
  
    const [word, setWord] = useState('');

    useEffect(()=>{
      loadContent()
    },[word])

    const loadContent = () =>{
      axios.get('/todo/list?subject=' + word)
        .then((resp)=>{
          console.log(resp.data);
          setListContent(resp.data);
        })
    }

    const getValue = (e) =>{
      setWord(e.target.value)
    }

    const todoDelete = (num) =>{
      axios.delete('/todo/delete/' + num)
      .then(()=>{
          alert("삭제성공")
          setListContent(listcontent.filter(todo=>todo.num!==num))
      })
  }
  return (
      <Container>
        <Form className="d-flex mb-2">
          <Form.Control placeholder="search" name="word" value={word} onChange={getValue} />
        </Form>
        <TodoList lists={listcontent} todoDelete={todoDelete}/>
      </Container>
      
  );
}

export default Home;