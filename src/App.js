import { Route, Switch, Redirect } from "react-router-dom";
import AllToDos from "./pages/AllToDos";
import NewToDo from "./pages/NewToDo";
import NotFound from "./pages/NotFound";
import DetailToDo from "./pages/DetailToDo";
import Layout from "./components/layouts/Layout";
function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/AllToDos" />
        </Route>
        <Route path="/AllToDos" exact>
          <AllToDos />
        </Route>
        <Route path="/NewToDo" exact>
          <NewToDo />
        </Route>
        <Route path="/AllToDos/:quoteId">
          <DetailToDo />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
