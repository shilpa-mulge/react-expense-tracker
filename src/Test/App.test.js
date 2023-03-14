import { render, screen } from "@testing-library/react";
import App from '../App'
describe("App component" ,()=>{
test('Async code', async()=>{
    render(<App/>)

    const items=await screen.findAllByRole("listitem")
    expect(items).not.toHaveLength(0)
})
})