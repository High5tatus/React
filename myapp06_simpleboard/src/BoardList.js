import BoardItem from "./BoardItem";
const BoardList = ({lists, boardDelete}) => {
    return(
        <div>
            {
                lists.map((board,index) => (
                    <div key={index}>
                        <BoardItem key={board.num} board={board} />
                        <button onClick={()=>boardDelete(board.num)}>삭제</button>
                    </div>
                    // <p key={index}>
                    //     번호 : {board.num}<br />
                    //     제목 : {board.title}<br />
                    //     내용 : {board.content}<hr />
                    // </p>
                    
                ))
            }
        </div>
    )
}
export default BoardList;