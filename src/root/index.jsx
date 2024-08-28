import React from "react";
import {
  Route,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Templates from "../components/Templates";
import Pages from "../components/Pages";
import Elements from "../components/Elements";

const Index = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search); // => search

  return (
    <>
      <h2>uselocation: {location.pathname}</h2>
      <h2>urlsearchparams search: ?title{query.get("title")}</h2>
      <Switch>
        <Route exact path={"/"}>
          {/* <Redirect to={"/home"} /> */}
          <Navbar />
        </Route>
        <Route path={"/home"} component={Navbar} />
        <Route path={"/templates"} component={Navbar} />
        <Route path={"/pages"} component={Navbar} />
        <Route path={"/elements"} component={Navbar} />
      </Switch>
      <Switch>
        <Route exact path={"/"}>
          <h1 className="text-center">Logo</h1>
          <Home />
        </Route>
        <Route path={"/home"} component={Home} />
        <Route path={"/templates"} component={Templates} />
        <Route path={"/pages"} component={Pages} />
        <Route path={"/elements"} component={Elements} />
        <Route path={"*"}>
          <h1 className="mt-4 text-center font-semibold text-2xl">
            404 Page Not Found
          </h1>
        </Route>
      </Switch>
    </>
  );
};

export default Index;
