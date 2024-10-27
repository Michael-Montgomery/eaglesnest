import AdminMenu from '../../../components/admin/menu/menu';
import Header from '../../../components/header/header';
import users from '../../../data/users';
import './dashboard.css';

export default function AdminDashboard() {

function calculatePercentOf(smallNum, largeNum) {
    return (smallNum / largeNum) * 100
}


    return (
        <>
            <Header></Header>
            <div className='admin-page-wrapper'>
                <AdminMenu></AdminMenu>
                <div className='admin-right-content-wrapper'>
                    <h2>Admin Dashboard</h2>
                    <div className='inner-container'>
                        <div className='widget' id='resident-count-widget'><p className='widget-number'>{users.length}</p><p className='widget-text'>Residents</p></div>
                        <div className='widget'><p className='widget-number'>33%</p><p className='widget-text'>Delinquency</p></div>
                        <div className='widget'></div>
                        <div className='widget'></div>
                        
                    </div>
                    <div className='inner-container'>
                        <div className='widget'></div>
                        <div className='widget'></div>
                        <div className='widget'></div>
                        <div className='widget'></div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}