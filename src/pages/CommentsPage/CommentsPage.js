import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllComments} from "../../store/comment.slice";
import Comment from "../../components/Comment/Comment";
import CommentForm from "../../components/CommentForm/CommentForm";

const CommentsPage = () => {
    const {comments, status, error} = useSelector(state => state.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments())
    }, []);

    return (
        <div>
            <CommentForm/>
            {status === 'pending' && <h1>Loading...</h1>}
            {error && <h2>{error}</h2>}
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export default CommentsPage;