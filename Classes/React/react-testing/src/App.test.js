import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Learn Testing/i);
  expect(linkElement).toBeInTheDocument();
});

test("Check for five list item", () => {
  render(<App />);
  const linkElement = screen.getAllByRole("listitem");
  expect(linkElement).toHaveLength(10);
});

test("check for Heading H1", () => {
  render(<App />);
  const linkElem = screen.queryByTestId("test_id_1");
  expect(linkElem).toBeInTheDocument();
});

// test('', () => {

// })
