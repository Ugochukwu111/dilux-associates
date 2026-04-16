import { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';


import SignUp from './Pages/Forms/SignUp';
import SignIn from './Pages/Forms/SignIn';



function App() {

  return (
    <>
      <Routes>
        <Route index element={<SignUp />} />
        <Route path='/sign-in' element={<SignIn/>}/>
      </Routes>

    </>
  )
}

export default App
