import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import Signup from "../SignUpform/Signup"



describe("signup component", ()=>{
    test("button click", ()=>{
        render(<BrowserRouter><Signup/></BrowserRouter>)
        const butonElement=screen.getByRole('button')
        userEvent.click(butonElement)
        const expected=screen.getAllByText('SignUp')
        expect(expected).toBeNull()
    })
})