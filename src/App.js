import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/header/index";
import CurrentPage from "./components/currentPage/index";
import CreateEmployee from "./pages/createEmployee/index";
import ViewEmployees from "./pages/viewEmployees/index";

function App() {
  return (
    <div className="app-container">
      <Header />
      <CurrentPage>
        <Switch>
          <Route path="/employees/create" component={CreateEmployee} />
          <Route path="/employees/listings" component={ViewEmployees} />

          <Redirect from="/" exact to="/employees/create"></Redirect>
          <Redirect to="/not-found" />
        </Switch>
      </CurrentPage>
    </div>
  );
}

export default App;
