import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import {Card, Container, Form, Button} from 'react-bootstrap';
const BoardView = (props)=>{
    const [board, setBoard] = useState({
        num : '',
        title : '',
        content : ''
    });
    const boardDelete = (num) =>{
        axios.delete("/api/delete/" + num)
        .then(()=>{
            alert("삭제성공")
            props.history.push("/")
        })
    }
    const boardUpdate = (num) =>{
        fetch('/api/update/' + num,{
            method : 'put',
            headers :{
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({
                num: board.num,
                title: board.title,
                content: board.content
            })        
        })
        .then(()=>{
            alert("수정성공")
            props.history.push("/")
        })
    }

    const findByNum = (num) =>{
        axios.get("/api/get/"+num)
        .then((resp)=>{
            console.log(resp.data)
            setBoard(resp.data);
        })
    }
    useEffect(()=>{
        let num = props.match.params.num;
        console.log("num : " + num)
        findByNum(num)

    },[])
    const getBoard = (e) =>{
        setBoard({
            ...board,
            [e.target.name]: e.target.value
        })
    }
    return(
        <Container>
            <Card style={{ width: '30rem' }}>
                <Card.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>제목 / 번호 : {board.num}     </Form.Label>
                        <Form.Control type="subject" name="title" value={board.title} onChange={getBoard} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>내용</Form.Label>
                        <Form.Control type="textarea" name="content" value={board.content} onChange={getBoard} />
                    </Form.Group>
                    <Button variant="secondary" onClick={() => boardUpdate(board.num)}>수정</Button>
                    <Button variant="danger" onClick={() => boardDelete(board.num)}>삭제</Button>
                </Form>
                </Card.Body>
            </Card>
        </Container>
    )
}


export default BoardView;