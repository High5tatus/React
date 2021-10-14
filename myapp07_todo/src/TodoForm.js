import { useState } from "react";
import axios from 'axios'
import { Button, Container, Form} from "react-bootstrap";

const TodoFrom = ({loadContent})=>{
    const [formContent, setFormContent] = useState({
        subject: '',
        name: '',
        summary: ''
    })

    const getTodo = (e) =>{
        setFormContent({
            ...formContent,
            [e.target.name]: e.target.value
        })
    }
    const submitTodo = () =>{
        // axios.post('/todo/insert',{
        //     subject: formContent.subject,
        //     name: formContent.name,
        //     summary: formContent.summary
        // }).then(()=>{
        //     alert("등록완료")
        //     loadContent();
        // })
        fetch('/todo/insert',{
            method : 'post',
            headers :{
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({
                subject: formContent.subject,
                name: formContent.name,
                summary: formContent.summary
            })
        })
        .then(()=>{
            alert("등록완료");
            loadContent();
            setFormContent({
                subject: '',
                name: '',
                summary: ''
            })
        })
    }

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>제목</Form.Label>
                    <Form.Control type="subject" name="subject" placeholder="Enter Subject" onChange={getTodo} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Name" onChange={getTodo} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>내용</Form.Label>
                    <Form.Control type="textarea" name="Summary" placeholder="Enter summary" onChange={getTodo} />
                </Form.Group>

                <Button variant="primary" onClick={submitTodo}>전송</Button>
            </Form>
        </Container>
        // <div>
        //     <input type="text" name="subject" placeholder="제목" onChange={getTodo}/><br/>
        //     <input type="text" name="name" placeholder="이름" onChange={getTodo}/><br/>
        //     <textarea name="summary" cols='50' rows='5' onChange={getTodo} /><br />
        //     <button onClick={submitTodo}>입력</button>
        // </div>
    )
}
export default TodoFrom;