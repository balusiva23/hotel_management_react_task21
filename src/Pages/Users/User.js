import "./User.css"
import { Link } from 'react-router-dom';
import Users from '../../components/User/User';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from "../../slices/userSlice";
const User = () => {
 const users = useSelector((state)=>state.userInfo.users);
 //console.log(users);
 const dispatch = useDispatch();
 const deleteUser = (id)=>{
  dispatch(removeUser(id))
 } 
  return (
    <div className="users">
<h1 className="users_title">Users</h1>
<div className="users_container">
{ users.length === 0 ? (
<div className="users_empty">
<h1>No users found. Please add some.</h1>
<h3>
<Link to="/AddUser">Add Users</Link>
</h3>
</div>
    ) : (
      users.map((user)  =>(
        <Users
        key={user.id}
        id={user.id}
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
        phoneNumber={user.phoneNumber}
        aadharNumber={user.aadharNumber}
        address={user.address}
        checkInDate={user.checkInDate}
        numberOfDays={user.numberOfDays}
        deleteUser={() => deleteUser(user.id)}
      />
      ))
    )}
        
    </div>
  </div>
  )
}

export default User