import React from "react"
import { render, screen } from "@testing-library/react"
import MarvelApp from "./marvel-app/MarevelApp"

test("renders learn react link", () => {
	render(<MarvelApp />)
	const linkElement = screen.getByText(/dual/i)
	expect(linkElement).toBeInTheDocument()
})
