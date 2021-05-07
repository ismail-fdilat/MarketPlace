import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./scss/style.scss";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const Client = React.lazy(() => import("./views/Client/index"));
const TheLayout = React.lazy(() => import("./containers/TheLayout"));

// Pages
const Login = React.lazy(() => import("./views/login/Login"));
const Register = React.lazy(() => import("./views/register/Register"));
const Page404 = React.lazy(() => import("./views/page404/Page404"));
const Page500 = React.lazy(() => import("./views/page500/Page500"));




class App extends Component {
  render() {
    return (
      <Router>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
            <Route
              path="/admin"
              name="Home"
              render={(props) => <TheLayout {...props} />}
            />
            <Route
              path="/"
              exact
              name="Home"
              render={(props) => <Client {...props} />}
            />

          </Switch>
        </React.Suspense>
      </Router>
    );
  }
}

export default App;
