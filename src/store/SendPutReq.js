
import { UiActions } from "./UiSlice"
export const SendPutReq=(expenses,id,email)=>{
    return async(dispatch)=>{
        dispatch(UiActions.shownotifiaction({
            status:'info',
            title:'Sending.....',
            message:'Editing data!',
          }))
        const SendPutHttp=async()=>{
            const response=await fetch(`https://expense-tracker-b91f4-default-rtdb.firebaseio.com/expenses/${email}/${id}.json`,{method:'PUT',
            body:JSON.stringify( {ExpenseName:expenses.ExpenseName, money:expenses.money,description:expenses.description})})
            if(!response.ok){
                throw new Error("Data Editing faild!")
                }
        }
        try{
        await SendPutHttp();
        dispatch(UiActions.shownotifiaction({
            status:'success',
            title:'Success!',
            message:'Data edited Successfuly!',
          }))
        }catch(error){
            dispatch(UiActions.shownotifiaction({
                status:'danger',
                title:'Error',
                message:'Data edit Faild!',
              }))
        }
    }
}