import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostsServes from "../API/PostsServis";
import "../App.css"


const AboutComments = () => {

    const params = useParams()
    const [about, setAbout] = useState(params)
    const fetResponse = async (id) => {
        const response = await PostsServes.getById(id)
        setAbout(response.data)
    }
        

    useEffect(() => {
        fetResponse(params.id)
    },[])

    return (
        <div className="idParems">
            <h1>
                Страница поста c ID = {params.id}
            </h1>
            <h2>Сам коментарий</h2>
            <br/>
            <h3>
                {about.body}
            </h3>
        </div>
    )
}


export default AboutComments