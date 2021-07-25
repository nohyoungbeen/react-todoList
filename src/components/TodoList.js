import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    const data = [
        {
            id: 1,
            state: 0,
            content: "todo1"
        },
        {
            id: 2,
            state: 0,
            content: "todo2"
        },
    ]
    return (
        <ul>
            {data.map((todo) => <TodoListItem key={todo.id} content={todo.content}> </TodoListItem>)}
        </ul>
    );
};

export default TodoList;