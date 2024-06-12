import { render } from "@testing-library/react"
import Home from "../page"

const { axe, toHaveNoViolations } = require('jest-axe')

expect.extend(toHaveNoViolations)

it('should demonstrate this matcher`s usage', async () => {
  const render = () => '<img src="#"/>'
  const html = render()
  expect(await axe(html)).toHaveNoViolations()
})

it('Button accessibility test', async () => {
  const render = () => '<button></button>'
  const html = render()
  expect(await axe(html)).toHaveNoViolations()
});

fit('Accessibility test for Home component', async () => {
  const { baseElement } = render(<Home/>)
  const results = await axe(baseElement)
  expect(results).toHaveNoViolations()
});