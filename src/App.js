import "./App.css";
import Home from "./views/Home/Home";
import NoMatch from "./views/NoMatch/NoMatch";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Header from "./components/Header/Header";
import { BrowserRouter, Switch, Route } from "react-router-dom";


function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
