import React from "react";
import { useAppContext } from "../context/AppContext";
import { useDataHook } from "../hook/useDataHook";
import { IUser } from "../types/IUser";

import { TodoList } from "../components/UserTodoList";

import { Modal } from "../components/Modal";
import { DataTable } from "../components/Table";

const columns: { key: keyof IUser; header: string }[] = [
    {key: 'id', header: 'ID'},
    {key: 'name', header: 'Name'},
    {key: 'phone', header: 'Phone'},
    {key: 'email', header: 'Email'},
    {key: 'website', header: 'Website'}
];

export const HomePage: React.FC = () => {
    const { users, userTodos,error, loading } = useDataHook();
    const { selectedUser, setSelectedUser } = useAppContext();

    if(loading) return <p>loading</p>;
    if(error) return <p>{error}</p>;

    
    return (
        <div>
            <DataTable<IUser> 
                data={users}
                columns={columns}
                onRowClick={(user) => {
                    setSelectedUser(user);
                }}
            />
            {
                selectedUser && (
                    <Modal onClose={()=> setSelectedUser(null)}>
                        { loading && <p>Loading...</p>}
                        <TodoList todos={userTodos} />
                    </Modal>
                )
            }
        </div>
    )

}