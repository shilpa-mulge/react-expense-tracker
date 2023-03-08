import { UiActions } from "./UiSlice"
import axios from "axios"
export const SendPostReq=(expenses)=>{
  console.log(expenses)
    return async(dispatch)=>{
        dispatch(UiActions.shownotifiaction({
            status:'pending',
            title:'Sending.....',
            message:'Sending  data!',
          }))
        const SendPostHttp=async()=>{
            const response=await fetch("https://expense-tracker-b91f4-default-rtdb.firebaseio.com/expenses.json",{method:'POST',
            body:JSON.stringify( {ExpenseName:expenses.ExpenseName, money:expenses.money,description:expenses.description})})
            if(!response.ok){
                throw new Error("Sending  data faild!")
                }
        }
        try{
        await SendPostHttp();
        dispatch(UiActions.shownotifiaction({
            status:'Success',
            title:'Success!',
            message:'Sent  data Successfuly!',
          }))
        }catch(error){
            dispatch(UiActions.shownotifiaction({
                status:'error',
                title:'Error',
                message:'Sending  data Faild!',
              }))
        }
    }
}