import axios from 'axios';
import { useState, useEffect } from 'react';
import BoardItem from "./BoardItem";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col,Form } from "react-bootstrap";

const BoardList = () =>{

    const [listcontent, setListContent] = useState([]);
    const [word, setWord] = useState('');

    useEffect(()=>{
      loadContent()
    },[word])

    // useEffect(()=>{
    //   loadContent();
    // },[])

    const loadContent = () =>{
      axios.get('/api/get?title=' + word)
        .then((resp)=>{
          console.log(resp.data);
          setListContent(resp.data);
        })
    }
    const getValue = (e) =>{
        setWord(e.target.value)
      }


    useEffect(()=>{
        loadContent();
      },[])

    
  
      const boardDelete = (num) =>{
        axios.delete('/api/delete/' + num)
        .then(()=>{
            alert("삭제성공")
            setListContent(listcontent.filter(board=>board.num!==num))
        })
    }

    return(
        <Container>
             <Form.Control placeholder="search" name="word" value={word} onChange={getValue} />
                <Row>
                    {
                        listcontent.map((board,index) => (
                            console.log(board.num),
                        // lists&& lists.map((board,index) => (
                        <Col md={6} key={index}>
                        <BoardItem key={board.num} board={board} boardDelete={boardDelete}/>
                        </Col>
                    ))
                    }
                </Row>
        </Container>
    )
}
export default BoardList;