import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import Favorite from "./pages/Favorite";
import NewMeetup from "./pages/NewMeetupForm";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <AllMeetups />
        </Route>
        <Route exact path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route exact path="/favorites">
          <Favorite />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
