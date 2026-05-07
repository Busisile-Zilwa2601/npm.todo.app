import React from "react";
import { useDataHook } from "../hook/useDataHook";
import { UserGrid } from "../components/UsersGrid";


export const HomePage: React.FC = () => {
    const { users, todos, error, loading } = useDataHook();

    if(loading) return <p>loading</p>;
    if(error) return <p>{error}</p>;

    const handleClick = (s: string) => {
        console.log("I was clicked")
    }
    return (
        <div>
            <UserGrid users={users} onClick={handleClick} />
        </div>
    )

}