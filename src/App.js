import Login from './Login/Login';
import classes from'./App.css';
import Signup from './SignUpform/Signup';
import { Routes, Navigate, Route } from 'react-router-dom';
import Welcome from './Welcom';
import Root from './MainNavigation/Root';
import Profile from './Profile/Profile';
import ProfileLogin from './Profile/ProfileLogin';
import ForgetPass from './ForgetPass/ForgetPass';
import Expense from './Expense/Expense';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import {theme} from './theme'
import NotFound from './MainNavigation/NotFound';
import { useEffect } from 'react';
import { SendPostReq } from './store/SendPostReq';
import { SendGetReq } from './store/SendGetReq';
import { SendPutReq } from './store/SendPutReq';
import {SendDeleteReq} from './store/SendDeleteReq'
let isShown=true;
function App() {
  const isLogedin=useSelector(state=>state.auth.isLogedin)
  const expenses=useSelector(state=>state.expenses.item)
const id=useSelector(state=>state.expenses.id);
  const dispatch=useDispatch();
  const mode = useSelector((state) => state.theme.currentTheme);
const Added=useSelector(state=>state.expenses.Added)
const deleted=useSelector(state=>state.expenses.deleted)
const edited=useSelector(state=>state.expenses.edited)
  useEffect(()=>{
    dispatch(SendGetReq())
  },[dispatch])

useEffect(()=>{
  if(isShown){
  isShown=false;
  return;
  }
  if(Added){
dispatch(SendPostReq(expenses))
  }
 if(edited){
  console.log("Ediding")
  dispatch(SendPutReq(expenses,id))
}
if(deleted){
  dispatch(SendDeleteReq(id))
}
 
},[expenses,dispatch])

return(
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme[mode].bodyBg, color: theme[mode].text}}>
    <Root >
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
  <Route path='/Login' element={
      <Login />
  } />
  <Route path='/SignUp' element={
      <Signup />
  } />
  
    <Route path='/userProfile' element={
      <Profile />
  } />
    <Route path='/ForgetPassword' element={
      <ForgetPass/>
  } />
   <Route path='/Expense' element={
      <Expense/>
  } />
  
  <Route path='*' element={  <NotFound/> } />
  </Routes>
  </Root>
  </div>
  </ThemeProvider>

   );

}

export default App;
