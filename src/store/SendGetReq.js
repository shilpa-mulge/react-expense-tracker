
import { ExpenseActions } from "./ExpenseReducer";
import { UiActions } from "./UiSlice";
export const SendGetReq=(email)=>{
    return async(dispatch)=>{
        dispatch(UiActions.shownotifiaction({
            status:'info',
            title:'Sending.....',
            message:'Fetching expense data!',
          }))
        const SendGetHttp=async()=>{
            const response=await fetch(`https://expense-tracker-b91f4-default-rtdb.firebaseio.com/expenses/${email}.json`)
            if(!response.ok){
                throw new Error("Fetching expense data faild!")
                }
                const data=await response.json();
                return data;
        }
        try{
       const Data= await SendGetHttp();
       let FetchedData=[];
       for(const key in Data){
        FetchedData.push({
          id:key,
          ExpenseName:Data[key].ExpenseName,
          money:Data[key].money,
          description:Data[key].description
        })
       }
       dispatch(ExpenseActions.ReplaceCart(FetchedData||[]))
        dispatch(UiActions.shownotifiaction({
            status:'success',
            title:'Success!',
            message:'Fetched expense data Successfuly!',
          }))
        }catch(error){
            dispatch(UiActions.shownotifiaction({
                status:'danger',
                title:'Error',
                message:'Fetching expense data Faild!',
              }))
        }
    }
}
