import React, { useState,useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonIcon from '@mui/icons-material/Person';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {v4 as uuid} from 'uuid';
import {addUser} from "../../slices/userSlice"
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
const defaultTheme = createTheme();

export default function AddUser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };
  const [formData, setFormData] = useState({
    id: uuid(),
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    aadharNumber: '',
    address: '',
    checkInDate: new Date(),
    numberOfDays: '',
  });

  useEffect(() => {
    setFormData((currInfo)=>{
  return {
    ...currInfo,
    id:uuid(),
  }
    })
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target;
   // setFormData({ ...formData, [name]: value });
    //new
    setFormData((currInfo)=>{
      return {
        ...currInfo,
        [name]:value,
      }
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      // Validate the form data
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.checkInDate) {
        // Display an error message or handle the validation error as needed
        console.error('Please fill in all required fields.');
        alert('Please fill in required fields.')
        return; // Exit the function if validation fails
    }
    // You can perform actions with the form data here
    //console.log(formData);
    dispatch(addUser(formData));
    setFormData({
        id: uuid(),
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        aadharNumber: '',
        address: '',
        checkInDate: new Date(),
        numberOfDays: '',
    })
    navigate("/");
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
           Add Customer
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
                disabled={true} // or disabled={false} to enable it dynamically
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
           Save
            </Button>
        
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
}
