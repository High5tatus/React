
const TodoView = ({match})=>{

    return(
        <h2>About {match.params.num}</h2>
    )
}

export default TodoView;