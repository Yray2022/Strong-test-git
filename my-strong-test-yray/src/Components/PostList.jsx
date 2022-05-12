import React from "react";
import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import "../App.css"
import MyButton from "../UI/MyButton/MyButton";

// Создойом посты
const PostList = ({post, number, removeButton}) => {

    const  historu = useNavigate()

    return (
        <div className='post'>
            <div className='postContent'>
                <div className='hederPost'>
                 <strong>{number}. {post.title}</strong>
                <hr/>   
                </div>
            </div>
            <p>
                {post.body} 
            </p>
            <div className="bottom"> 
                <MyButton onClick={() => historu(`/about/${post.id}`)}>
                    Каментарий
                </MyButton>
                <MyButton onClick={() => removeButton(post)}>
                    Убрать с заметок 
                </MyButton>
            </div>
      </div>
    )
}

export default PostList