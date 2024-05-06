import './DisplayName.css';
import React , { useState } from 'react'

export default function DisplayName() {

    const [display , setDisplay] = useState(false);
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(firstName.trim()!=='' && lastName.trim()!==''){
            setDisplay(true);
        }
        
    }
  return (
  <div className="form">

    <h1>Full Name Display</h1>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="firstName">
                First Name : 
            </label>
            <input required
            type="text" 
            name="name" 
            id="firstName" 
            value={firstName}
            onChange={(e)=>setFirstName(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="lastName">
                Last Name :
            </label>
            <input required
            type="text"
            name="lastName" 
            id="lastName" 
            value={lastName}
            onChange={(e)=>setLastName(e.target.value)}
            />
        </div> 

        <button type="submit">
            submit
        </button>
    </form>
    {display && <h3>Full Name : {firstName} {lastName} </h3>}   
    
</div>)
}




