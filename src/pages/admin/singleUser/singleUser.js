import { Link, useParams } from 'react-router-dom';
import './singleUser.css';
import Header from '../../../components/header/header';
import AdminMenu from '../../../components/admin/menu/menu';
import users from '../../../data/users';
import { useState } from 'react';

export default function SingleUser() {

    const { userId } = useParams();

    const [showIdField, setShowIdField] = useState(false)

    console.log(typeof (userId))

    const [singledUser] = useState(users.filter((val) => val.id === Number(userId))[0]);

    // console.log(singledUser)

    function handleIdClick() {
        setShowIdField(!showIdField);


    }

    return (
        <>
            <Header></Header>
            <div className='admin-page-wrapper'>
                <AdminMenu></AdminMenu>
                <div className='admin-right-content-wrapper'>
                    <Link to='/admin-users' id='back-to-users-link'>Back to Users</Link>
                    {singledUser ? <h2>{`${singledUser.firstName} ${singledUser.lastName}`}</h2> : <p>loading</p>}
                    <details>
                        <summary>{`${singledUser.firstName}'s  general information`}</summary>
                        <p id='password-input'>ID: <input type={showIdField ? 'text' : 'password'} readOnly value={singledUser.id}></input></p><button onClick={handleIdClick}>{showIdField ? 'Hide ID' : 'Show ID'}</button>
                        <p>{`Address: ${singledUser.addressLine1} ${singledUser.addressLine2} ${singledUser.addressCity} ${singledUser.addressState} ${singledUser.addressZip}`}</p>
                        <p>{`Email Address: ${singledUser.email}`}</p>
                    </details>
                    <details>
                        <summary>{`${singledUser.firstName}'s  payment information/history`}</summary>
                        <table id='single-user-payment-table'>
                            <thead>
                                <tr>
                                    <td>Date</td>
                                    <td>ID</td>
                                    <td>Amount</td>
                                    <td>Payment Type</td>
                                    <td>Status</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> 01/01/2024</td>
                                    <td>564545645</td>
                                    <td>$255.33</td>
                                    <td> EFT(4568)</td>
                                    <td> Successful</td>
                                </tr>
                                <tr>
                                    <td> 01/01/2024</td>
                                    <td>564545645</td>
                                    <td>$255.33</td>
                                    <td> EFT(4568)</td>
                                    <td> Successful</td>
                                </tr>
                                <tr>
                                    <td> 01/01/2024</td>
                                    <td>564545645</td>
                                    <td>$255.33</td>
                                    <td> EFT(4568)</td>
                                    <td> Successful</td>
                                </tr>
                                <tr>
                                    <td> 01/01/2024</td>
                                    <td>564545645</td>
                                    <td>$255.33</td>
                                    <td> EFT(4568)</td>
                                    <td> Successful</td>
                                </tr>
                                <tr>
                                    <td> 01/01/2024</td>
                                    <td>564545645</td>
                                    <td>$255.33</td>
                                    <td> EFT(4568)</td>
                                    <td> Successful</td>
                                </tr>
                            </tbody>
                        </table>
                        <button id='view-all-payments-btn'>View All Payments</button>
                    </details>
                    <details>
                        <summary>{`Manage ${singledUser.firstName}'s account`}</summary>
                        <ul id='manage-account-buttons-list'>
                            <li><button>{`Delete ${singledUser.firstName}'s account`}</button></li>
                            <li><button>{`Reset ${singledUser.firstName}'s password`}</button></li>
                        </ul>
                    </details>
                </div>
            </div>
        </>
    )
}