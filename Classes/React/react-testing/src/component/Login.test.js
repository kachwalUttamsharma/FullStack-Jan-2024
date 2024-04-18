// if username input is rendered
// if password input is rendered
// if submit button is rendered

// check if form inputs are filled only then submit button is enabled
// onchange event is able to update state
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

test("Check for username", () => {
  render(<Login />);
  const userNameElem = screen.getByPlaceholderText(/enter username/i);
  expect(userNameElem).toBeInTheDocument();
  expect(userNameElem.value).toBe("");
});

test("Check for password", () => {
  render(<Login />);
  const userPasswordElem = screen.getByPlaceholderText(/enter password/i);
  expect(userPasswordElem).toBeInTheDocument();
  expect(userPasswordElem.value).toBe("");
});

test("Check for Submit Button", () => {
  render(<Login />);
  const submitElem = screen.getByRole("button");
  expect(submitElem).toBeInTheDocument();
  expect(submitElem).toBeDisabled();
});

test("check for username event", () => {
  render(<Login />);
  const submitElem = screen.getByRole("button");
  const userNameElem = screen.getByPlaceholderText(/enter username/i);
  expect(userNameElem.value).toBe("");
  expect(submitElem).toBeDisabled();
  fireEvent.change(userNameElem, { target: { value: "uttam" } });
  expect(userNameElem).toHaveValue("uttam");
  expect(submitElem).toBeDisabled();
});

test("check for password event", () => {
  render(<Login />);
  const submitElem = screen.getByRole("button");
  const userPasswordElem = screen.getByPlaceholderText(/enter password/i);
  expect(userPasswordElem.value).toBe("");
  expect(submitElem).toBeDisabled();
  fireEvent.change(userPasswordElem, { target: { value: "uttam" } });
  expect(userPasswordElem).toHaveValue("uttam");
  expect(submitElem).toBeDisabled();
});

test("check for submit event", () => {
  render(<Login />);
  const submitElem = screen.getByRole("button");
  const userNameElem = screen.getByPlaceholderText(/enter username/i);
  const userPasswordElem = screen.getByPlaceholderText(/enter password/i);
  expect(userNameElem.value).toBe("");
  expect(userPasswordElem.value).toBe("");
  expect(submitElem).toBeDisabled();
  fireEvent.change(userPasswordElem, { target: { value: "12345" } });
  fireEvent.change(userNameElem, { target: { value: "uttam" } });
  expect(userNameElem).toHaveValue("uttam");
  expect(userPasswordElem).toHaveValue("12345");
  expect(submitElem).toBeEnabled();
});
