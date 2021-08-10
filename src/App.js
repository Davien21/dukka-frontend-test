import { Switch, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/header/index.jsx";
import CurrentPage from "./components/currentPage/index.jsx";
import Employees from "./components/employees/index.jsx";

function App() {
  return (
    <>
      <ToastContainer />
      <div className="app-container">
        <Header />
        <CurrentPage>
          <Switch>
            <Route path="/employees/" component={Employees} />
            <Redirect from="/" exact to="/employees/listings"></Redirect>
            <Redirect to="/not-found" />
          </Switch>
        </CurrentPage>
      </div>
    </>
  );
}

export default App;
