import { useParams } from 'react-router-dom';
import './dashboard.css';
import { useState } from 'react';
import users from '../../../data/users';
import Header from '../../../components/header/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoiceDollar, faIdCard } from '@fortawesome/free-solid-svg-icons';

export default function ResidentDashBoard() {


    const { userId } = useParams();

    const [singledUser] = useState(users.filter((val) => val.id === Number(userId))[0]);

    return(
        <>
        <Header></Header>
        <div className='outer-row'>
            <div id='my-info-wrapper'>
                <h2><FontAwesomeIcon icon={faIdCard}></FontAwesomeIcon> My Info</h2>
                
                    <p><span>Name: </span>{`${singledUser.firstName} ${singledUser.lastName}`}</p>
                    <p><span>Address: </span>{`${singledUser.addressLine1}`}</p>
                    <p><span>Address: </span>{`${singledUser.addressLine2}`}</p>
                    <p><span>Email Address: </span>{`${singledUser.email}`}</p>
                
            </div>
            <div id='billing-info-wrapper'><h2><FontAwesomeIcon icon={faFileInvoiceDollar}></FontAwesomeIcon> Payment Information</h2>
            <div>
                <p>$255.33 due by 12/31/2024</p>
                <div className='center'><button>Pay Now</button></div>
            </div>
            <p><a href='http://www.apple.com'>View my payment history</a></p>
            </div>
        </div>
        </>
    )
}