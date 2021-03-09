import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Comments from '../Comments/Comments';

const PostDetail = () => {
    const { id } = useParams();
    const [ post, setPosts ] = useState({});
    const [comments, setComments] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [id]);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))

    }, [id]);


    const postStyle = {
        marginLeft: '420px',
        marginBottom: '70px',
        boxShadow: '8px 8px 5px 5px gray',
        borderRadius: '10px',
        width: '650px',
        height: '1000px',
        backgroundColor: '#ff3300',
        color: 'white'
    }
    return (    
        <div style={postStyle}>
            <h5>UserId : {post.userId}</h5>
            <h4>Id : {post.id}</h4>
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
            <p>Number of comments : {comments.length}</p>

            {
                comments.map(comment => <Comments comment={comment}></Comments>)
            }
        </div>
    );
};

export default PostDetail;