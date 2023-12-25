import React, {useEffect, useState} from 'react';
import {Outlet, useSearchParams} from "react-router-dom";

import {postService} from "../../services/post.service";
import Post from "../../components/Post/Post";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    // Похож на useState только для URL
    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        postService.getAll().then(value => {
            const title = query.get('title'); // вытагиваем из ссылки поисковой наш ключ (в данном случае title)
            let filter = [...value]
// Если есть title, то фильтруем value, вытягивать каждый пост, брать его title и проверять есть ли то,
// что введено в URL
            if (title) {
                filter = value.filter(post => post.title.includes(title))
            }
            setPosts(filter)
        })
    }, [query])

    const submit = (e) => {
      e.preventDefault()
        setQuery({title: e.target.search.value}) // Выдаст в строке поиска blabla/posts/14?=текст из инпута
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="search" name={'search'}/>
                <button>Search</button>
            </form>
            <h1>Posts</h1>
            {posts.map(post => <Post key={post.id} post={post}/>)}
            <div><Outlet/></div>
        </div>
    );
};

export default PostsPage;