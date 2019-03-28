import React from 'react';

const Todo = props => {
    return (
        <div className='todo'>
            <h1>{props.todos.task}</h1>
        </div>
    );
};


export default Todo;