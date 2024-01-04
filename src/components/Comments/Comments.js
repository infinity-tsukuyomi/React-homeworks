import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {commentService} from "../../services/comment.service";
import Comment from "../Comment/Comment";

const Comments = () => {
    const {id} = useParams();

    const [comments, setComments] = useState(null);

    useEffect(() => {
        commentService.getByPostId(id).then(value => setComments([...value]))
    }, []);

    return (
        <div>
            {comments?.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default Comments;