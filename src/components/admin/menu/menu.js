import { NavLink } from 'react-router-dom';
import './menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faDollarSign, faGear, faUserGear } from '@fortawesome/free-solid-svg-icons';

export default function AdminMenu() {
    return(
        <div id='admin-menu-wrapper'>
            <ul>
                <li>
                    <NavLink to='/admin-dash'><FontAwesomeIcon icon={faChartLine}></FontAwesomeIcon>  Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to='/admin-users'><FontAwesomeIcon icon={faUserGear}></FontAwesomeIcon>  Users</NavLink>
                </li>
                <li>
                    <NavLink to='/admin-payments'><FontAwesomeIcon icon={faDollarSign}></FontAwesomeIcon>  Payments</NavLink>
                </li>
                <li>
                    <NavLink to='/admin-site-settings'><FontAwesomeIcon icon={faGear}></FontAwesomeIcon>  Site Settings</NavLink>
                </li>
            </ul>
        </div>
    )
}