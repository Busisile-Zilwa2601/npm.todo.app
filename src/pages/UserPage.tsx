import React from "react";
import { useAppContext } from "../context/AppContext";
import { useDataHook } from "../hook/useDataHook";
import { IUser } from "../types/IUser";

import { TodoList } from "../components/UserTodoList";

import { Modal } from "../components/Modal";
import { DataTable } from "../components/Table";
import { LoadingSpinner } from "../components/Spinner";


export const UserPage: React.FC = () => {
    const { users, userTodos,error, loading } = useDataHook();
    const { selectedUser, setSelectedUser } = useAppContext();

    if(loading) return <LoadingSpinner />;
    if(error) return <p>{error}</p>;

    
    return (
        <div>
            <DataTable<IUser> 
                data={users}
                columns={[
                    {key: 'id', header: 'ID'},
                    {key: 'name', header: 'Name', filterable: true},
                    {key: 'phone', header: 'Phone'},
                    {key: 'email', header: 'Email'},
                    {key: 'website', header: 'Website'}
                ]}
                manulaPageSize={5}
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