import React from 'react';
import { IUser } from '../types/IUser';

interface Props {
    users: IUser[];
    onClick: (user: IUser) => void;
}

export const UserGrid: React.FC<Props> = ({ users, onClick }) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>ID</td>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <tr key={user.id} onClick={()=> onClick(user)}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}