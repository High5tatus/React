import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

import {Card, Container, Form, Button} from 'react-bootstrap';

const TodoView= (props) =>{
    const [todo, setTodo] = useState({
        num : '',
        subject : '',
        name : '',
        summary : '',
        regdate : ''
    });
    const todoDelete = (num) =>{
        axios.delete("http://localhost:8855/todo/delete/" + num)
        .then(()=>{
            alert("삭제성공")
            props.history.push("/")
        })
    }
    const todoUpdate = (num) =>{
        fetch('http://localhost:8855/todo/update/' + num,{
            method : 'put',
            headers :{
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({
                num: todo.num,
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
        axios.get("http://localhost:8855/todo/get/"+num)
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
        // <Card style={{ width: '18rem' }}>
        //     <Card.Body>
        //         <Card.Title>제목 : <input type="text" value={todo.subject} onChange={getTodo}/></Card.Title>
        //         <Card.Text>
        //         번호 : {todo.num}<br/>            
        //         이름 : <input type="text" value={todo.name} onChange={getTodo}/><br/>
        //         내용 : <input type="text" value={todo.summary} onChange={getTodo}/><br/>
        //         작성일 : {todo.regdate}<hr/>                
        //         </Card.Text>   
        //         <Button variant="secondary" onClick={()=>todoUpdate(todo.num)}>수정</Button>
        //         <Button variant="danger" onClick={()=>todoDelete(todo.num)}>삭제</Button>
        //     </Card.Body>
        // </Card>
        <Container>
            <Card style={{ width: '30rem' }}>
                <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>제목 / 번호 : {todo.num}     </Form.Label>
                        <Form.Control type="subject" name="subject" value={todo.subject} onChange={getTodo} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>이름</Form.Label>
                        <Form.Control type="text" name="name" value={todo.name} onChange={getTodo} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>내용</Form.Label>
                        <Form.Control type="textarea" name="summary" value={todo.summary} onChange={getTodo} />
                    </Form.Group>
                    <Button variant="secondary" onClick={() => todoUpdate(todo.num)}>수정</Button>
                    <Button variant="danger" onClick={() => todoDelete(todo.num)}>삭제</Button>
                </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default TodoView;