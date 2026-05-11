import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useDataHook } from "../hook/useDataHook";
import { IUser } from "../types/IUser";

import { DataTable } from "../components/Table";
import { LoadingSpinner } from "../components/Spinner";


export const UserPage: React.FC = () => {
    const { users, userTodos,error, loading } = useDataHook();
    const { selectedUser, setSelectedUser } = useAppContext();
    const navigate = useNavigate();

    if(loading) return <LoadingSpinner />;
    if(error) return <p>{error}</p>;

    function goToDetails(id: string) {
        navigate(`${id}`);
    }

    return (
        <div>
            <DataTable<IUser> 
                data={users}
                columns={[
                    {key: 'id', header: 'ID'},
                    {key: 'name', header: 'Name', filterable: true},
                    {key: 'phone', header: 'Phone', filterable: true},
                    {key: 'email', header: 'Email', filterable: true},
                    {key: 'website', header: 'Website', filterable: true}
                ]}
                manulaPageSize={5}
                onRowClick={(user) => {
                    setSelectedUser(user);
                    goToDetails(user.id);
                }}
            />
        </div>
    )

}