import React from 'react';
import { IUser } from '../types/IUser';

interface Props {
    users: IUser[];
    onClick: (userId: string) => void;
}

export const UserGrid: React.FC<Props> = ({ users, onClick }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(user => (
                        <tr key={user.id} onClick={()=> onClick(user.id)}>
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