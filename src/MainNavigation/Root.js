import React from "react";
import Main from "./Main";
const Root = (props) => {
    return (<>
        <Main />
        <main>
            {props.children}
        </main>
    </>
    )
}
export default Root;