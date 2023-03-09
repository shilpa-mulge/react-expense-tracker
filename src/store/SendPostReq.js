import { UiActions } from "./UiSlice";
export const SendPostReq=(expenses,email)=>{
    return async(dispatch)=>{
        dispatch(UiActions.shownotifiaction({
            status:'info',
            title:'Sending.....',
            message:'Sending  data!',
          }))
        const SendPostHttp=async()=>{
            const response=await fetch(`https://expense-tracker-b91f4-default-rtdb.firebaseio.com/expenses/${email}.json`,{method:'POST',
            body:JSON.stringify( {ExpenseName:expenses.ExpenseName, money:expenses.money,description:expenses.description})})
            if(!response.ok){
                throw new Error("Sending  data faild!")
                }
        }
        try{
        await SendPostHttp();
        dispatch(UiActions.shownotifiaction({
            status:'success',
            title:'Success!',
            message:'Sent  data Successfuly!',
          }))
        }catch(error){
            dispatch(UiActions.shownotifiaction({
                status:'danger',
                title:'Error',
                message:'Sending  data Faild!',
              }))
        }
    }
}