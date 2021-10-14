import TodoItem from "./TodoItem";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col,Button } from "react-bootstrap";

const TodoList = ({lists,todoDelete})=>{

    return(
        <Container>
                <Row>
                    {
                    lists&& lists.map((todo,index) => (
                        <Col md={4} key={index}>
                        <TodoItem key={todo.num} todo={todo} todoDelete={todoDelete}/>
                        {/* <Button variant="secondary" onClick={()=>todoDelete(todo.num)}>삭제</Button> */}
                        </Col>
                    ))
                    }
                </Row>
        </Container>
    )
}

export default TodoList;