import { useState } from "react";
import { Button, Container, Form} from "react-bootstrap";

const TodoForm = (props)=>{
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
            props.history.push("/")
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
                    <Form.Control type="textarea" name="summary" placeholder="Enter summary" onChange={getTodo} />
                </Form.Group>
                <Button variant="primary" onClick={submitTodo}>전송</Button>
            </Form>
        </Container>
    )
}
export default TodoForm;