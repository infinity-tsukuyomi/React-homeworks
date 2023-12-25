import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {postService} from "../../services/post.service";

const SinglePostPage = () => {
    // Отслеживаем параметры
    const {id} = useParams();

    const [post, setPost] = useState(null);

    // Хук для вытягивания state из Post.js
    const {state} = useLocation();

    // Хук для перехода по роутах (возвращает экземпляр своего класса)
    const navigate = useNavigate();

    useEffect(() => {
        // Если в state есть пост, то мы сетаем этот пост, если нет, то происходит запрос на сервер
        if (state) {
            setPost(state)
            return
        }
        postService.getById(id).then(value => setPost({...value}))
    }, [])

    const toHome = () => {
      navigate('/') // перейти на что-то (в данном случае - home)
    }

    const back = () => {
        navigate(-1)
    // -1 - на одно действие назад; -2 - на два действия назад
    }

    return (
        <div>
            <button onClick={toHome}>Home</button>
            <button onClick={back}>Back</button>
            {post && (
                <div>
                    <div>Id: {post.id}</div>
                    <div>userId: {post.userId}</div>
                    <div>Title: {post.title}</div>
                    <div>Body: {post.body}</div>
                </div>
            )}
        </div>
    );
};

export default SinglePostPage;