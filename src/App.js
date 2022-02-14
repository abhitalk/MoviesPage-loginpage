import Login from "./components/Login";
import MoviesPage from "./components/MoviesPage";
import NotFound from "./components/NotFound";
import { Route, Switch } from "react-router-dom";
import ProtectedLogin from "./components/ProtectedLogin";


const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={MoviesPage} />
    <Route component={NotFound} />
  </Switch>
);

export default App;
