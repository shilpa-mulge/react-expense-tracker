
import { UiActions } from "./UiSlice"
export const SendDeleteReq=(id,email)=>{
    return async(dispatch)=>{
        dispatch(UiActions.shownotifiaction({
            status:'info',
            title:'Sending.....',
            message:'Deleting data!',
          }))
        const SendDeleteHttp=async()=>{
            const response=await fetch(`https://expense-tracker-b91f4-default-rtdb.firebaseio.com/expenses/${email}/${id}.json`,{method:'DELETE'})
           
            if(!response.ok){
                throw new Error("Deleting data faild!")
                }
        }
        try{
        await SendDeleteHttp();
        dispatch(UiActions.shownotifiaction({
            status:'success',
            title:'Success!',
            message:' data deleted Successfuly!',
          }))
        }catch(error){
            dispatch(UiActions.shownotifiaction({
                status:'danger',
                title:'Error',
                message:'Request Faild!',
              }))
        }
    }
}