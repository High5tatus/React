import { useState } from "react";
import { Button, Container, Form} from "react-bootstrap";

const BoardForm = (props) =>{
    const [formContent, setFormContent] = useState({
        title: '',
        content: ''
    })

    const getBoard = (e) =>{
        setFormContent({
            ...formContent,
            [e.target.name]: e.target.value
        })
    }
    const submitBoard = () =>{
        fetch('/api/insert',{
            method : 'post',
            headers :{
                'Content-type' : 'application/json'
            },
            body : JSON.stringify({
                title: formContent.title,
                content: formContent.content
            })
        })
        .then(()=>{
            alert("등록완료");
            props.history.push("/")
            setFormContent({
                title: '',
                content: ''
            })
        })
    }
    return(
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>제목</Form.Label>
                    <Form.Control type="subject" name="title" placeholder="Enter Title" onChange={getBoard} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>내용</Form.Label>
                    <Form.Control type="textarea" name="content" placeholder="Enter Content" onChange={getBoard} />
                </Form.Group>

                <Button variant="primary" onClick={submitBoard}>전송</Button>
            </Form>
        </Container>
    )
}
export default BoardForm;