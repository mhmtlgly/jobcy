import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import { Button } from "./Button"

describe("<Button />", () => {
  test("renders with default styles", () => {
    render(<Button>Submit</Button>)

    const button = screen.getByRole("button", { name: /submit/i })

    expect(button).toHaveClass("bg-brand-800")
    expect(button).toHaveClass("text-base")
  })

  test("renders primary large button", () => {
    render(
      <Button intent="primary" size="lg">
        Submit
      </Button>
    )

    const button = screen.getByRole("button", { name: /submit/i })

    expect(button).toHaveClass("text-lg")
    expect(button).toHaveClass("uppercase")
  })
})
