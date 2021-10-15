import axios from 'axios';
import { useState, useEffect } from 'react';
import BoardItem from "./BoardItem";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col } from "react-bootstrap";

const BoardList = () =>{

    const [listcontent, setListContent] = useState([]);

    useEffect(()=>{
        loadContent();
      },[])

    const loadContent = () =>{
        axios.get('/api/get')
          .then((resp)=>{
            console.log(resp.data);
            setListContent(resp.data);
          })
      }
  
      const boardDelete = (num) =>{
        axios.delete('/api/delete/' + num)
        .then(()=>{
            alert("삭제성공")
            setListContent(listcontent.filter(board=>board.num!==num))
        })
    }

    return(
        <Container>
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