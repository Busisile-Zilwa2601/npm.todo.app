import { NavLink, Outlet } from 'react-router-dom';
import { Breadcrumbs } from '../components/BreadCrumbs';

export const RootLayout: React.FC = () => {
    return (
        <div className='root-layout'>
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to='/users'>Users</NavLink>
                    <NavLink to='/todos'>To do</NavLink>
                </nav>
            </header>
            <Breadcrumbs />
            <main>
                <Outlet />
            </main>
        </div>
    )
}