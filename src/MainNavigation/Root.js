import React from "react";
import { useSelector } from "react-redux";
import Main from "./Main";
import Notification from "./Notification";

const Root = (props) => {
    const notification=useSelector(state=>state.ui.notification)
    return (<>
{/* {notification&&<Notification status={notification.status} title={notification.title} message={notification.message}/>} */}
        <Main />
        <main>
            {props.children}
        </main>
    </>
    )
}
export default Root;