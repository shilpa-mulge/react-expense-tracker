
import { UiActions } from "./UiSlice"
export const SendDeleteReq=(id)=>{
    return async(dispatch)=>{
        dispatch(UiActions.shownotifiaction({
            status:'pending',
            title:'Sending.....',
            message:'Deleting data!',
          }))
        const SendDeleteHttp=async()=>{
            const response=await fetch(`https://expense-tracker-b91f4-default-rtdb.firebaseio.com/expenses/${id}.json`,{method:'DELETE'})
           
            if(!response.ok){
                throw new Error("Deleting data faild!")
                }
        }
        try{
        await SendDeleteHttp();
        dispatch(UiActions.shownotifiaction({
            status:'Success',
            title:'Success!',
            message:' data deleted Successfuly!',
          }))
        }catch(error){
            dispatch(UiActions.shownotifiaction({
                status:'error',
                title:'Error',
                message:'Request Faild!',
              }))
        }
    }
}