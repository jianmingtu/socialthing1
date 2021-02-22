import { useEffect, useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import jwtDecode from "jwt-decode";
import useLocalStorage from "react-use-localstorage";

import LoginPage from "./layouts/LoginPage";
import HeaderNavigation from "./layouts/HeaderNavigation";

function App() {
  // These states can be passed to other components to allow them
  // access to the current user and allow them to update
  // the current user by logging them in or out
  const [user, setUser] = useState();
  const [token, setToken] = useLocalStorage("token");

  // Every time the JWT is stored or removed from local storage,
  // Decode the token and update the current user data
  useEffect(() => {
    const user = token ? jwtDecode(token) : null;
    setUser(user);
  }, [token]);

  return (
    <div className="App">
      <Router>
        <HeaderNavigation user={user} setToken={setToken}></HeaderNavigation>
        <main style={{ marginTop: 80 }}>
          <Switch>
            <Route path="/login">
              <LoginPage setToken={setToken}></LoginPage>
            </Route>
            <Route path="/">
              <p>Username: {user?.username}</p>
              <p>Email: {user?.email}</p>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
