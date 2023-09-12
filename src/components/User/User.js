import React from 'react'
import "./User.css"
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
const User = ({ id, firstName, lastName, email, phoneNumber, aadharNumber, address, checkInDate, numberOfDays, deleteUser }) => {
  return (
    <div className='user'>
<h2>
Id: <span>{id}</span>
</h2>
<h3>
Name: <span>{firstName}</span>
</h3>
<h3>
Aadhar Number: <span>{aadharNumber}</span>
</h3>
<h3>
Email: <span>{email}</span>
</h3>
<h3>
Contact: <span>{phoneNumber}</span>
</h3>
<h3>
Address: <span>{address}</span>
</h3>
<h3>
CheckInDate: <span>{checkInDate}</span>
</h3>
<h3>
NumberOfDays: <span>{numberOfDays}</span>
</h3>
<div className='user_bottom'>
<Link to={`edit-user/${id}`}>
<Button variant="contained">edit</Button>
                {/* <button>edit</button> */}
              </Link>
              <Button variant="contained" onClick={deleteUser} color='error'>Delete</Button>
    {/* <button className='user_delete' onClick={deleteUser}>Delete</button> */}
</div>
</div>
  )
}

export default User