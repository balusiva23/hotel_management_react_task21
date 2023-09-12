import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users:[]
  }

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.users = [...state.users,action.payload];
        },
        updateUser: (state, action) => {
            const {  id, firstName, lastName, email, phoneNumber, aadharNumber, address, checkInDate, numberOfDays} = action.payload
            const existingUser = state.users.find(user => user.id === id)

            if (updateUser) {
                existingUser.firstName = firstName;
                existingUser.lastName = lastName;
                existingUser.email = email;
                existingUser.phoneNumber = phoneNumber;
                existingUser.aadharNumber = aadharNumber;
                existingUser.address = address;
                existingUser.checkInDate = checkInDate;
                existingUser.numberOfDays = numberOfDays;

            }
        },
        removeUser:(state,action)=>{
            const newStateOfUsers = state.users.filter(
                (user)=>user.id !== action.payload
                );
                state.users = newStateOfUsers;
        },
    },
});

export const {addUser,updateUser,removeUser} = userSlice.actions;

export default userSlice.reducer;