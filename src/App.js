import Login from './Login/Login';
import './App.css';
import Signup from './SignUpform/Signup';
import { Routes, Navigate, Route } from 'react-router-dom';
import Welcome from './Welcom';
import Root from './MainNavigation/Root';
import Profile from './Profile/Profile';
import ProfileLogin from './Profile/ProfileLogin';
import ForgetPass from './ForgetPass/ForgetPass';
import Expense from './Expense/Expense';
import { useSelector } from 'react-redux';
function App() {
  const isLogedin=useSelector(state=>state.auth.isLogedin)
  return (
  
    <Root>
  <Routes>
  <Route path='/'
    element={<Navigate to='/home' replace />}
  />
  <Route path='/home' element={
      <Welcome />
  } />
  <Route path='/Profile' element={
      <ProfileLogin />
  } />
 {!isLogedin&& <Route path='/Login' element={
      <Login />
  } />}
  <Route path='/SignUp' element={
      <Signup />
  } />
  
   {isLogedin&& <Route path='/userProfile' element={
      <Profile />
  } />}
    <Route path='/ForgetPassword' element={
      <ForgetPass/>
  } />
   <Route path='/Expense' element={
      <Expense/>
  } />
  </Routes>
  </Root>

   );

}

export default App;
