import Login from './Login/Login';
import './App.css';
import Signup from './SignUpform/Signup';
import { Routes, Navigate, Route } from 'react-router-dom';
import Econtext from './store/econtext';
import Welcome from './Welcom';
import Root from './MainNavigation/Root';
import Profile from './Profile/Profile';
import { useContext } from 'react';
import ProfileLogin from './Profile/ProfileLogin';
function App() {
  const ctx=useContext(Econtext)
  return (
  
    <Root>
  <Routes>
  <Route path='/'
    element={<Navigate to='/home' replace />}
  />
  <Route path='/home' element={
      <Welcome />
  } />
  <Route path='/Login' element={
      <Login />
  } />
  <Route path='/SignUp' element={
      <Signup />
  } />
  {ctx.isLogedin&& <Route path='/Profile' element={
      <ProfileLogin />
  } />}
   {ctx.isLogedin&& <Route path='/userProfile' element={
      <Profile />
  } />}
  </Routes>
  </Root>

   );

}

export default App;
