import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {Card, Container, Form, Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap';
const TodoView = (props)=>{
    const [todo, setTodo] = useState({
        num : '',
        subject: '',
        name: '',
        summary: ''
    });
    const todoDelete = (num) =>{
        axios.delete("/todo/delete/" + num)
        .then(()=>{
            alert("삭제성공")
            props.history.push("/")
        })
    }
    const todoUpdate = (num) =>{
        alert(num);
        fetch('/todo/update/' + num,{
            method : 'put',
            headers :{
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({
                num : todo.num,
                subject: todo.subject,
                name: todo.name,
                summary: todo.summary
            })        
        })
        .then(()=>{
            alert("수정성공")
            props.history.push("/")
        })
    }

    const findByNum = (num) =>{
        axios.get("/todo/get/"+num)
        .then((resp)=>{
            console.log(resp.data)
            setTodo(resp.data);
        })
    }
    useEffect(()=>{
        let num = props.match.params.num;
        console.log("num : " + num)
        findByNum(num)

    },[])
    const getTodo = (e) =>{
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }
    return(
        <div style={{width: '70%', margin: '30px auto'}}>
        <Container className="justify-content-center">
            <Card style={{ width: '50rem' }}>
                <Card.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>글 번호 : {todo.num}</Form.Label><br/> 
                        <Form.Label>제목</Form.Label>
                        <Form.Control type="subject" name="subject" value={todo.subject} onChange={getTodo} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>작성자 : {todo.name}</Form.Label><br/>
                        <Form.Label>내용</Form.Label>
                        <Form.Control type="textarea" name="summary" value={todo.summary} onChange={getTodo} />
                    </Form.Group>
                    
                    
                    <ButtonToolbar className="justify-content-between">
                    <ButtonGroup aria-label="First group">
                        <Button variant="secondary" onClick={() => todoUpdate(todo.num)}>수정</Button>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button variant="danger" onClick={() => todoDelete(todo.num)}>삭제</Button>
                    </ButtonGroup>
                </ButtonToolbar>
                </Form>
                </Card.Body>
            </Card>
        </Container>
        </div>
    )
}

export default TodoView;