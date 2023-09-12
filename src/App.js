import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import AddUser from './Pages/AddUser/AddUser'
import EditUser from './Pages/AddUser/EditUser'
import Home from './Pages/Home/Home'
const App = () => {
  return (
    <>
     <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/AddUser' element={<AddUser isEdit={false} />} />
      <Route path='/edit-user/:id' element={<EditUser />} />
      {/* <Route path='/about' element={<About/>} />
      <Route path='/user' element={<User/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/user/:name' element={<Username/>} /> */}
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App