import React from 'react';

const Comments = (props) => {
    const {name, email, body} = props.comment;
    return (
        <div>
            <h1>{name}</h1>
            <p>{email}</p>
            <h3>{body}</h3>
            
        </div>
    );
};

export default Comments;