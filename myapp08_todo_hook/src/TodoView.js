import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {Card, Button} from 'react-bootstrap';

const TodoView= (props) =>{
    const [todo, setTodo] = useState({
        num : '',
        subject : '',
        name : '',
        summary : '',
        regdate : ''
    });
    const todoDelete = (num) =>{
        axios.delete("/todo/delete/" + num)
        .then(()=>{
            alert("삭제성공")
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
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>제목 : {todo.subject}</Card.Title>
                <Card.Text>
                번호 : {todo.num}<br/>            
                이름 : {todo.name}<br/>
                내용 : {todo.summary}<br/>
                작성일 : {todo.regdate}<hr/>                
                </Card.Text>   
                <Button variant="danger" onClick={()=>todoDelete(todo.num)}>삭제</Button>
            </Card.Body>
        </Card>
    )
}

export default TodoView;