// import logo from './logo.svg';
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import About from './pages/about/about';
import Board from './pages/board/board';
import Minutes from './pages/minutes/minutes';
import Login from './pages/login/login';
import AdminDashboard from './pages/admin/dashboard/dashboard';
import AdminUsers from './pages/admin/users/users';
import AdminPayments from './pages/admin/payments/payments';
import AdminSiteSettings from './pages/admin/site-settings/site-settings';
import SingleUser from './pages/admin/singleUser/singleUser';
import ResidentDashBoard from './pages/resident/dashboard/dashboard';
import Checkout from './pages/resident/checkout/checkout';

function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/about' Component={About}></Route>
        <Route path='/board' Component={Board}></Route>
        <Route path='/minutes' Component={Minutes}></Route>
        <Route path='/login' Component={Login}></Route>
        {/* Admin Routes */}
        <Route path='/admin-dash' Component={AdminDashboard}></Route>
        <Route path='/admin-users' Component={AdminUsers}></Route>
        <Route path='/admin-payments' Component={AdminPayments}></Route>
        <Route path='/admin-site-settings' Component={AdminSiteSettings}></Route>
        <Route path='/admin-view-user/:userId' element={<SingleUser></SingleUser>}></Route>
        {/* Resident Routes */}
        <Route path='/resident-dashboard/:userId' element={<ResidentDashBoard></ResidentDashBoard>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
      </Routes>

    </HashRouter>
  );
}

export default App;
