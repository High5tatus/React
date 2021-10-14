import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
const BoardItem = ({board, boardDelete}) =>{
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>제목 : {board.title}</Card.Title>
                <Card.Text>
                    번호 : {board.num}<br />
                    내용 : {board.content}
                    <button onClick={()=>boardDelete(board.num)}>item삭제</button>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
export default BoardItem;