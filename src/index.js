import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
  Prompt
} from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Error = () => <div>Error!: Invalid User</div>;

const Users = ({ match, location, history }) => {
  const validUsers = ["yui", "maria"];
  if (!validUsers.includes(match.params.id)) {
    return <Redirect to="/error/" />;
  } else {
    return <div>Welcome: {match.params.id}</div>;
  }
};

const DefaultRoute = () => <div>Default route</div>;

const style = {
  color: "red"
};

const activeEvent = (match, location) => {
  if (!match) {
    return false;
  } else {
    console.log("success!");
  }
};

const Info = ({ match }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to={match.url + "/phone"}>Phone</Link>
        </li>
        <li>
          <Link to={match.url + "/email"}>Email</Link>
        </li>
        <li>
          <Link to={match.url + "/address"}>Address</Link>
        </li>
      </ul>
      <hr />
      <Route
        path={match.url + "/phone"}
        render={props => <div>Phone: 123 456 7890</div>}
      />
      <Route
        path={match.url + "/email"}
        render={props => <div>Email: email@email.com</div>}
      />
      <Route
        path={match.url + "/address"}
        render={props => <div>Address: 123 Address</div>}
      />
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={style}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeStyle={style}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/users" activeStyle={style} isActive={activeEvent}>
            Users
          </NavLink>{" "}
        </li>
        <li>
          <NavLink to="/info" activeStyle={style}>
            Info
          </NavLink>{" "}
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect exact from="/home" to="/" />
        <Route path="/about" component={About} />
        <Route path="/users/:id" component={Users} />
        <Route path="/info" component={Info} />
        <Route path="/error" component={Error} />
        <Route component={DefaultRoute} />
      </Switch>
      <Prompt when={false} message="Are you sure you want to leave?" />
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
