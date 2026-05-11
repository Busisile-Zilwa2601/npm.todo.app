import { Link, useLocation } from "react-router-dom"

export const Breadcrumbs = () => {
    const location = useLocation();

    let currentLink: string[] = [];

    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink.push(`/${crumb}`);
            
            return(
                <div key={crumb} className="crumb">
                    <Link to={currentLink.join('')}>{crumb}</Link>
                </div>
            )
        })

    return(
        <div className="breadcrumbs"> {crumbs}</div>
    )
}