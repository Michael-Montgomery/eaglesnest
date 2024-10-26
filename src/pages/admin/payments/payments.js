import AdminMenu from '../../../components/admin/menu/menu';
import Header from '../../../components/header/header';
import './payments.css';

export default function AdminPayments() {
    return(
        <>
        <Header></Header>
        <div className='admin-page-wrapper'>
            <AdminMenu></AdminMenu>
            <div className='admin-right-content-wrapper'>
            <h2>Admin Payments</h2>
            </div>
        </div>
        </>
    )
}