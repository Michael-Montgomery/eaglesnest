import './deliquentPill.css';

export default function DeliquentPill(props) {
    return(
        <>
        {
            props.user.pastDue ? <p className='deliquent-pill'>Past Due</p> : <p className='on-time-pill'>Current</p>
        }
        </>
    )
}