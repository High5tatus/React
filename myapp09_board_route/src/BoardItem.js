import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BoardItem = ({board, boardDelete})=>{
    return(
        <Card style={{ width: '25rem' }}>
            <Card.Body>
                <Card.Title>번호 : {board.num}</Card.Title>
                <Card.Text>
                    제목 : {board.title}<br />
                    내용 : {board.content}<br />
                </Card.Text>
                <Link to={"/view/" + board.num}>
                    <Button variant="secondary">상세보기</Button>
                </Link>
                <Button variant="danger" onClick={() => boardDelete(board.num)}>삭제</Button>
            </Card.Body>
        </Card>
    )
}


export default BoardItem;