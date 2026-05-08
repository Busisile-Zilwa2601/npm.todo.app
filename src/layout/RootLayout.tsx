import { NavLink, Outlet } from 'react-router-dom';

export const RootLayout: React.FC = () => {
    return (
        <div className='root-layout'>
            <header>
                <nav>
                    <NavLink to='/'>Users</NavLink>
                    <NavLink to='/todos'>To do</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}