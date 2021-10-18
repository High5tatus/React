import { Button, ButtonGroup, ButtonToolbar, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
const TodoItem = ({todo, todoDelete}) =>{
    return(
        
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Link to={"/view/"+todo.num}>
                    <Card.Title>제목 : {todo.subject}</Card.Title>
                </Link>
                <Card.Text>
                    번호 : {todo.num}<br/>     
                    제목 : {todo.subject}<br/>
                    이름 : {todo.name}<br/>
                    내용 : {todo.summary}<br/>
                    작성일 : {todo.regdate}<hr/>
                </Card.Text> 
                <ButtonToolbar className="justify-content-between">
                    <ButtonGroup aria-label="First group">
                        <Link to={"/view/" + todo.num}>
                            <Button variant="secondary">수정 폼</Button>
                        </Link>
                    </ButtonGroup>
                    <ButtonGroup>
                        <Button variant="danger"  onClick={()=>todoDelete(todo.num)}>삭제</Button>
                    </ButtonGroup>
                </ButtonToolbar>
            </Card.Body>
        </Card>
    )
}
export default TodoItem;