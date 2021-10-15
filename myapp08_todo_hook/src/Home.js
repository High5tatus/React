import axios from 'axios';
import { useState, useEffect } from 'react';
import TodoFrom from './TodoForm';
import TodoList from './TodoList';
import './App.css';
import { Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

const Home = () =>{ 

    const [listcontent, setListContent] = useState([]);
  
    const [word, setWord] = useState('');

    useEffect(()=>{
      loadContent()
    },[word])



    // useEffect(()=>{
    //   loadContent();
    // },[])

    const loadContent = () =>{
      axios.get('http://localhost:8855/todo/list?subject=' + word)
        .then((resp)=>{
          console.log(resp.data);
          setListContent(resp.data);
        })
    }

    const getValue = (e) =>{
      setWord(e.target.value)
    }

    const todoDelete = (num) =>{
      axios.delete('http://localhost:8855/todo/delete/' + num)
      .then(()=>{
          alert("삭제성공")
          setListContent(listcontent.filter(todo=>todo.num!==num))
      })
  }
  return (
      <Container>
        <Form className="d-flex mb-2">
          <Form.Control placeholder="search" name="word" value={word} onChange={getValue} />
          {/* <Button variant="outline-info" onClick={loadContent}>Search</Button> */}
        </Form>
        <TodoList lists={listcontent} todoDelete={todoDelete}/>
      </Container>
      
  );
}

export default Home;