import { NavLink } from 'react-router-dom';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {
    return (
        <>
            <div id='top-header'>
                <p>Eagle's Nest HOA</p>
                <div id='header-acct-btn'>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </div>
            </div>
            <header>

                <nav>
                    <NavLink to='/'>Home</NavLink>
               
                    <NavLink to='/about'>About</NavLink>
                
                    <NavLink>Link</NavLink>
                
                    <NavLink>Link</NavLink>
                
                    <NavLink id='login-link' to='/login'>Resident Portal</NavLink>
                </nav>
            </header>
            {
                // eslint-disable-next-line
                props.ambush ? <marquee>{props.ambushText}</marquee> : <></>
            }
        </>

    )
}