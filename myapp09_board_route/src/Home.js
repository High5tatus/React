import axios from 'axios';
import { useState, useEffect } from 'react';
import BoardForm from "./BoardForm";
import BoardList from "./BoardList";

const Home = () =>{

//     const [listcontent, setListContent] = useState([]);
  
//     useEffect(()=>{
//       loadContent();
//     },[])

//     const loadContent = () =>{
//       axios.get('/api/get')
//         .then((resp)=>{
//           console.log(resp.data);
//           setListContent(resp.data);
//         })
//     }

//     const boardDelete = (num) =>{
//       axios.delete('/api/delete/' + num)
//       .then(()=>{
//           alert("삭제성공")
//           setListContent(listcontent.filter(board=>board.num!==num))
//       })
//   }
    return(
        <div>
            <h1>Home</h1>
            <BoardList />
        </div>
    )
}
export default Home;