// src/App.js
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Foodwaste from './components/Dashboard/FoodwastePrediction';

// import { RequireAuth } from './utils/RequireAuth';
import { AuthProvider } from './utils/authContext';

function App() {
  return (
    <div className='container'>
      {/* <h1 className='text-center'>Trip Planner</h1> */}
      <AuthProvider>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Signup />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/foodwaste' element={<Foodwaste />} />
          {/* <Route path='/destination/:id' element={<DetailDestination />} />
          <Route path='/bookings/:id' element={<RequireAuth><Booking /></RequireAuth>} />
          <Route path='/MyBookings' element={<MyBookingsList />} />
          <Route path='/AddDestination' element={<AddDestination />} /> */}
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
