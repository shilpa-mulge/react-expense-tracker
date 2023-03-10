import Profile from "../Profile/Profile";
import { render, screen } from "@testing-library/react";


test('renders Profile', ()=>{
    render(<Profile/>)
    const LinkElement=screen.getByText('Winners never quite, quiters never win')
    expect(LinkElement).toBeInTheDocument()
})