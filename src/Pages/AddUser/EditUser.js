import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from '../../slices/userSlice';

const defaultTheme = createTheme();

const EditUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams(); // Get the id from the route parameters
  const params = useParams();
  const userData = useSelector((state) => {
    const userArray = state.userInfo.users || []; // Handle the case where state.users is undefined
    console.log(state.userInfo.users);
    const user = userArray.find((user) => user.id === id);
    return user || {}; // Return an empty object if user not found
  });
  const users = useSelector((state)=>state.userInfo.users);
  //console.log(users);

  const [formData, setFormData] = useState({
    id: userData.id,
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    phoneNumber: userData.phoneNumber,
    aadharNumber: userData.aadharNumber,
    address: userData.address,
    checkInDate: userData.checkInDate instanceof Date
    ? userData.checkInDate.toISOString().split('T')[0]
    : '', // Parse the date string into a Date object, // Check if userData.checkInDate is defined, // Format Date as ISO string
    numberOfDays: userData.numberOfDays,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((currInfo) => {
      return {
        ...currInfo,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

 
    // Dispatch an action to update the user's data
    dispatch(updateUser(formData));
    // Dispatch an action to update the user's data
    //console.log(formData);

    // Reset the form and navigate back to the user list page
    setFormData({
      id: userData.id,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
      aadharNumber: userData.aadharNumber,
      address: userData.address,
      checkInDate:   userData.checkInDate instanceof Date
      ? userData.checkInDate.toISOString().split('T')[0]
      : '', // Format Date as ISO string,
      numberOfDays: userData.numberOfDays,
    });

     // Update userData with the new data
  

    navigate('/');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Edit Customer
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="id"
                  required
                  fullWidth
                  id="uid"
                  label="ID"
                  autoFocus
                  value={formData.id}
                  onChange={handleChange}
                  disabled={true} // Disable ID field
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="family-name"
                  name="lastName"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="tel"
                  name="phoneNumber"
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="off"
                  name="aadharNumber"
                  required
                  fullWidth
                  id="aadharNumber"
                  label="Aadhar Number"
                  value={formData.aadharNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="address"
                  name="address"
                  required
                  fullWidth
                  id="address"
                  label="Address"
                  multiline
                  rows={4}
                  value={formData.address}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="checkInDate"
                  required
                  fullWidth
                  id="checkInDate"
                  label="Date of Check-in"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={formData.checkInDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="numberOfDays"
                  required
                  fullWidth
                  id="numberOfDays"
                  label="Number of Days to Stay"
                  type="number"
                  value={formData.numberOfDays}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default EditUser;
