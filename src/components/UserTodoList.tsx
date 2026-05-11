import React from 'react';
import { ITodo } from '../types/ITodo';

interface Props {
    todos: ITodo[];
    //onClick: (user: IUser) => void;
}

export const TodoList: React.FC<Props> = ({todos}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.userId}</td>
                            <td>{todo.title}</td>
                            <td>{todo.completed ? "Completed" : "InComplete"}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
