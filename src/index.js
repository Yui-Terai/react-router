import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;
const Users = ({ match, location, history }) => {
  console.log(`match: ${match}`);
  console.log(`location: ${location}`);
  console.log(`history: ${history}`);
  return <div>{match.params.id}</div>;
};

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
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/users/:id" component={Users} />
      <Route path="/info" component={Info} />
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById("root"));
