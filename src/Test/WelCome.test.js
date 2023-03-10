import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import Welcome from "../MainNavigation/Welcom"
import { useNavigate } from "react-router-dom"

test('renders Welcome', ()=>{
    render(<Welcome/>)
    const LinkElement=screen.getByText('Welcome')
    expect(LinkElement).toBeInTheDocument()
})