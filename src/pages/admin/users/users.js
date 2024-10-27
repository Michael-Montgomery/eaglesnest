import { Link } from 'react-router-dom';
import AdminMenu from '../../../components/admin/menu/menu';
import DeliquentPill from '../../../components/deliquent-pill/deliquentPill';
import Header from '../../../components/header/header';
import users from '../../../data/users';
import './users.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function AdminUsers() {
    return (
        <>
            <Header></Header>
            <div className='admin-page-wrapper'>
                <AdminMenu></AdminMenu>
                <div className='admin-right-content-wrapper'>
                    {/* <h2>Admin User Settings</h2> */}
                    <h2 id='heading'>Users <span id='record-count-span'>{users.length}</span></h2>
                    <ul id='admin-users-list'>
                        {
                            users.map((user) => {
                                return (
                                    <li key={user.id}>
                                        <div className='users-list-el-wrapper'>
                                            <p className='users-list-name'>{`${user.firstName} ${user.lastName}`}</p>
                                            <p className='users-list-address'>{`${user.addressLine1}`}</p>
                                            <DeliquentPill user={user}></DeliquentPill>
                                            <Link to={`/admin-view-user/${user.id}`}>View Record <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Link>
                                            
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}