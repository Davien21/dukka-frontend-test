import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/header/index.jsx";
import CurrentPage from "./components/currentPage/index.jsx";
import CreateEmployee from "./pages/createEmployee/index.jsx";
import ViewEmployees from "./pages/viewEmployees/index.jsx";

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
