import { Outlet } from "react-router-dom";

export const UsersLayout: React.FC = () => {
    return (
        <div className="user-layout">
            <h2>Users</h2>
            <Outlet />
        </div>
    )
}