import { Provider } from "react-redux"
import { Home } from "./home"
import { Landing } from "./landing"
import { Route, Router, Switch } from "react-router-dom"
import * as hist from "history"
import { store } from "../store"

const history = hist.createBrowserHistory()

export const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/home" exact component={Home} />
        <Route component={() => <div>err</div>} />
      </Switch>
    </Router>
  </Provider>
)
