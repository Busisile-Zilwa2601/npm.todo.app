import React from "react";
import { useDataHook } from "../hook/useDataHook";
import { UserGrid } from "../components/UsersGrid";
import { useAppContext } from "../context/AppContext";
import { Modal } from "../components/TodoModal";
import { TodoList } from "../components/UserTodoList";

export const HomePage: React.FC = () => {
    const { users, todos, userTodos, error, loading } = useDataHook();
    const { selectedUser, setSelectedUser } = useAppContext();

    if(loading) return <p>loading</p>;
    if(error) return <p>{error}</p>;

    
    return (
        <div>
            <main>
                <UserGrid users={users} onClick={setSelectedUser} />
            </main>
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