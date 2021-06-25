import { Provider } from "react-redux"
import { Home } from "./pages/home"
import { Landing } from "./pages/landing"
import { Protected } from "./protected"
import { Route, Router, Switch } from "react-router-dom"
import * as hist from "history"
import { store } from "../store"

const history = hist.createBrowserHistory()

export const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Protected path="/home" exact component={Home} />
        <Route component={() => <div>404</div>} />
      </Switch>
    </Router>
  </Provider>
)
