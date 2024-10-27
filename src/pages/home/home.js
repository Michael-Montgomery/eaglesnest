import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from '../../components/header/header';
import './home.css';
import { faGavel, faPeopleGroup, faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import news from '../../data/news';
import welcomeBgVid from '../../assets/beach.mp4'


export default function Home() {
    return(
        <>
        <Header ambush={false} ambushText='In preparation of hurricane Helene, please refresh yourself with our hurricane preparedness page.'></Header>
        <div id='teaser-picture-wrapper'>
        <video autoPlay muted loop id='welcome-background-video' playsInline>
                    <source src={welcomeBgVid} type="video/mp4" />
                </video>
        </div>
        <h2 className='homeh2'>Quick Menu</h2>
        <div id='quick-menu-wrapper'>
            <ul>
                <li>
                    <div className='quick-menu-item-wrapper'>
                        <p>View Board</p>
                        <button><Link to='/board'><FontAwesomeIcon icon={faPeopleGroup}></FontAwesomeIcon></Link></button>
                    </div>
                </li>
                <li>
                    <div className='quick-menu-item-wrapper'>
                        <p>View Account</p>
                        <button><Link to='/login'><FontAwesomeIcon icon={faTableColumns}></FontAwesomeIcon></Link></button>
                    </div>
                </li>
                <li>
                    <div className='quick-menu-item-wrapper'>
                        <p>Contact HOA</p>
                        <button><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon></button>
                    </div>
                </li>
                <li>
                    <div className='quick-menu-item-wrapper'>
                        <p>Meetings & Minutes</p>
                        <button><Link to='/minutes'><FontAwesomeIcon icon={faGavel}></FontAwesomeIcon></Link></button>
                    </div>
                </li>
            </ul>
        </div>
        <div id='home-news-list-wrapper'>
            <h2>News & Announcements</h2>
            <ul id='home-news-list'>
                {
                    news.map((news, idx) => {
                        return(
                            <li key={idx}>
                                <div className='home-news-wrapper'>
                                    <h2>{news.title}</h2>
                                    <p>{news.description}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
        </>
    )
}