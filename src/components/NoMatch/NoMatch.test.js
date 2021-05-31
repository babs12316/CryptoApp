import { render, screen } from "@testing-library/react";
import NoMatch from "./NoMatch";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

test("renders app heading text", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <NoMatch />
    </Router>
  );
  const textElement = screen.getByText(/No match for/i);
  expect(textElement).toBeInTheDocument();
});
