import AdminMenu from '../../../components/admin/menu/menu';
import Header from '../../../components/header/header';
import './dashboard.css';

export default function AdminDashboard() {
    return (
        <>
        <Header></Header>
        <div className='admin-page-wrapper'>
            <AdminMenu></AdminMenu>
            <div className='admin-right-content-wrapper'>
            <h2>Admin Dashboard</h2>
            </div>
        </div>
        </>
    )
}