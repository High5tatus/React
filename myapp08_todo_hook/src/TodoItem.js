import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TodoItem = ({todo, todoDelete}) =>{
    // const todoDelete = (num) =>{
    //     axios.delete("/todo/delete/" + num)
    //     .then(()=>{
    //         alert("삭제성공")
    //     })
    // }
    return(
        // <div className="card" style={{width:'400px'}}>
        //     <div className="card-body">
        //     <h4 className="card-title">제목 : {todo.subject}</h4><br/>
        //     번호 : {todo.num}<br/>            
        //     이름 : {todo.name}<br/>
        //     내용 : {todo.summary}<br/>
        //     작성일 : {todo.regdate}<hr/>
        //     <Button variant="primary">Primary</Button>
        //     </div>
        // </div>
        
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>제목 : {todo.subject}</Card.Title>
                <Card.Text>
                번호 : {todo.num}<br/>            
                이름 : {todo.name}<br/>
                내용 : {todo.summary}<br/>
                작성일 : {todo.regdate}<hr/>                
                </Card.Text>        
                <Link to={"/view/"+todo.num}>        
                    <Button variant="secondary">상세보기</Button>
                </Link>
                <Button variant="danger" onClick={()=>todoDelete(todo.num)}>삭제</Button>
            </Card.Body>
        </Card>
    )
}
export default TodoItem;