import Profile from "../Profile/Profile";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
describe("Welcome Component",async()=>{
    test('renders Profile',async ()=>{
        render(<BrowserRouter><Profile/></BrowserRouter>)
        const LinkElement=screen.getByText('Winners never quite, quiters never win')
        expect(LinkElement).toBeInTheDocument()
    })
    a
})