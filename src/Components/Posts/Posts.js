import React from 'react';
import { useHistory } from 'react-router';

const Posts = (props) => {
   
    const {userId, id, title, body} = props.post;
    const history = useHistory();
    const showComments = id => {
        const url = `post/${id}`;
        history.push(url);

    }

    const postStyle = {
        marginLeft: '420px',
        marginBottom: '70px',
        boxShadow: '8px 8px 5px 5px gray',
        borderRadius: '10px',
        width: '650px',
        height: '250px',
        backgroundColor: '#ff3300',
        color: 'white'
    }
    return (
        <div style={postStyle}>
            <h5> UserId : {userId}</h5>
            <h4> Id : {id}</h4>
            <h1>{title}</h1>
            <button onClick={() => showComments(id)}>Show Comments</button>
        </div>
    );
};

export default Posts;