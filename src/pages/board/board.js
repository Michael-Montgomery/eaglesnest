import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import './board.css';
import members from '../../data/boardmembers';
import { useState } from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};




export default function Board() {


    
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedMember, setSelectedMember] = useState(0)

    function openModal() {
        setIsOpen(true);
    }



    function closeModal() {
        setIsOpen(false);
    }





    return (
        <>
            <Header></Header>
            <h2 id='boardh2'>
                The Eagle's Nest Homeowner's association holds Meetings on the third Tuesday of every month at 7:00PM EST in the community clubhouse. Minutes from previous
                Meetings are available <Link to='/minutes'>here</Link>.
            </h2>

            <h3 id='boardh3'>Meet Your Board Members</h3>
            <ul id='board-members-list'>
                {
                    members.map((member, idx) => {
                        return (

                            <li key={idx}>
                                <div className='member-wrapper' onClick={() => {
                                    setSelectedMember(idx);
                                    openModal();
                                }}>
                                    <div className='member-picture-wrapper' style={{ backgroundImage: `url(${member.imgUrl})` }} ></div>
                                    <h4>{`${member.firstName} ${member.lastName}`}</h4>
                                    <p>{member.title}</p>
                                </div>
                            </li>

                        )
                    })
                }
            </ul>




            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div id='member-modal-wrapper'>
                <h3>{`${members[selectedMember].firstName} ${members[selectedMember].lastName}`}</h3>
                <div id='member-modal-picture-wrapper' style={{backgroundImage: `url(${members[selectedMember].imgUrl})`}}></div>
                <p>{members[selectedMember].bio}</p><br></br>
                <div className='center'><button><a href={`mailto:${members[selectedMember].emailAddress}`}><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>             {`Email ${members[selectedMember].firstName} ${members[selectedMember].lastName}`}</a></button></div>
                </div>
            </Modal>
        </>
    )
}