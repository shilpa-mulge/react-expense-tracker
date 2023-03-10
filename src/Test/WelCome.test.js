import { render, screen } from "@testing-library/react"
import Welcome from "../MainNavigation/Welcom"
import { BrowserRouter } from "react-router-dom"
test('renders Welcome', async()=>{
    render(<BrowserRouter><Welcome/></BrowserRouter>)
    const LinkElement=screen.getByText('Welcome')
    expect(LinkElement).toBeInTheDocument()
})