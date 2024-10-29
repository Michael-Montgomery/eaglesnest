import { useState } from 'react';
import Header from '../../../components/header/header';
import './checkout.css';
// import { faL } from '@fortawesome/free-solid-svg-icons';

export default function Checkout(props) {

    const [eftSelected, setEftSelected] = useState(true);
    const [ccSelected, setCcSelected] = useState(false);

    function handleDdChange(e) {
        if (e === 'eft') {
            setEftSelected(true);
            setCcSelected(false)
        } else {
            setCcSelected(true);
            setEftSelected(false);
        }
    }

    return (
        <>
            <Header></Header>
           <div id='checkout-page-wrapper'>
           
            <form>
                <h2>Process a Payment</h2>
                {/* <label>Payment type: */}
                    <select onChange={(e) => handleDdChange(e.target.value)} className='full'>
                        <option>Select a payment type</option>
                        <option value='eft'>Electronic Funds Transfer (EFT)</option>
                        <option value='cc'>Credit/Debit Card</option>
                    </select>

                {/* </label> */}
                <br></br>

                {
                    eftSelected ? <>
                        <input type='number' placeholder='Routing Number'></input><br></br>
                        <input type='number' placeholder='Account Number'></input><br></br>
                        <input type='number' placeholder='Account Number'></input><br></br>
                    </> : <>
                        <input type='number' placeholder='Card Number'></input><br></br>
                        <input type='number' placeholder='Expiration Date'></input>
                        <input type='number' placeholder='CVV'></input><br></br>
                    </>
                }

                <hr></hr>

                {/* <label> */}
                    {/* First Name: */}
                    <input type='text' placeholder='First Name' className='half'></input>
                {/* </label> */}
                {/* <label> */}
                    {/* Last Name: */}
                    <input type='text' placeholder='Last Name' className='half'></input>
                {/* </label><br></br> */}
                {/* <label> */}
                    {/* Email Address: */}
                    <input type='email' placeholder='EmailAddress' className='full'></input>
                {/* </label> */}

                <h3>Billing Address</h3>

                <label>Same as residential address
                    <input type='checkbox'></input>
                </label><br></br>
                {/* <label> */}
                    {/* Address Line 1: */}
                    <input type='text' placeholder='Address Line 1' className='full'></input>
                {/* </label><br/></br> */}
                {/* <label> */}
                    {/* Address Line 2: */}
                    <input type='text' placeholder='Address Line 2' className='full'></input><br></br>
                {/* </label><br></br> */}
                {/* <label> */}
                    {/* City: */}
                    <input type='text' placeholder='City' className='half'></input>
                {/* </label> */}
                {/* <label> */}
                    {/* State: */}
                    <select className='half'>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                {/* </label> */}

                {/* <label> */}
                    {/* Zip Code */}
                    <input type='number' placeholder='Zip Code' className='half'></input>
                {/* </label> */}



            </form>
           </div>
        </>
    )
}