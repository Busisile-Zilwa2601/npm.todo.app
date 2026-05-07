import React from "react";
import { useDataHook } from "../hook/useDataHook";
import { UserGrid } from "../components/UsersGrid";
import { useAppContext } from "../context/AppContext";
import { Modal } from "../components/TodoModal";

export const HomePage: React.FC = () => {
    const { users, todos, error, loading } = useDataHook();
    const { selectedUser, setSelectedUser } = useAppContext();

    if(loading) return <p>loading</p>;
    if(error) return <p>{error}</p>;

    
    return (
        <div>
            <UserGrid users={users} onClick={setSelectedUser} />
        </div>
    )

}