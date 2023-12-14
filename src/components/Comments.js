import React, {useEffect, useState} from 'react';
import Comment from "./Comment";

const Comments = () => {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(comments => {
                setComments(comments);
            });
    }, []);

    return (
        <div>
            <ul>
                {
                    comments.map(comments => <li key={comments.id}> <Comment item={comments}/></li>)
                }
            </ul>
        </div>
    );
};

export default Comments;