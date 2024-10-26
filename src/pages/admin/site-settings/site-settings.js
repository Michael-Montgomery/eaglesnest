import AdminMenu from '../../../components/admin/menu/menu';
import Header from '../../../components/header/header';
import './site-settings.css';

export default function AdminSiteSettings() {
    return(
        <>
        <Header></Header>
        <div className='admin-page-wrapper'>
            <AdminMenu></AdminMenu>
            <div className='admin-right-content-wrapper'>
            <h2>Admin Website Settings</h2>
            </div>
        </div>
        </>
    )
}