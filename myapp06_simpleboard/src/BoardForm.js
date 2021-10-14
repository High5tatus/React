import { useState } from "react"
import axios from 'axios';

const BoardForm = ({loadContent}) =>{
    const [formContent, setFormContent] = useState({
        title: '',
        content: ''
    })
  
    const getValue = (e) => {
        setFormContent({
            ...formContent,
            [e.target.name]: e.target.value
        })
    }
    const submitBoard = () => {
        axios.post('/api/insert', {
            title: formContent.title,
            content: formContent.content
        }).then(() => {
            alert("등록완료")
            loadContent();
        })
    }
    return(
        <div>
            <input type="text" name="title" placeholder="제목" onChange={getValue}/><br/>
            <textarea name="content" cols='50' rows='5' onChange={getValue} /><br />
            <button onClick={submitBoard}>입력</button>
        </div>
    )
}

export default BoardForm;