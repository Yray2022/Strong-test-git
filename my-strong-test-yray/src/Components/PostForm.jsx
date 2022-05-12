import React from "react";
import "../App.css"
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

const PostForm = ({title, body, setTitle, setbody, addPost, openModal}) => {
    return (
        <div className='inlainText'>
            <MyInput 
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Название Поста"/>
            <MyInput 
            value={body}
            onChange={e => setbody(e.target.value)}
            placeholder="Опесание Поста"/>
            <MyButton onClick={addPost}>
                Создать пост.
            </MyButton>
            <MyButton onClick={openModal}>
                Найти пост.
            </MyButton>
      </div>
    )
}


export default PostForm