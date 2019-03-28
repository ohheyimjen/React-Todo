import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <div className='todo-list'>
            <h1>Don't tell me what to do! Todolist.js</h1>
            {props.todos.map(item => (
                <Todo 
                key={item.id} //map over the unique key in your object keys
                todos={item} //call the list as a whole
                />
            ))}
            
        </div>

    
    );
};


export default TodoList;
