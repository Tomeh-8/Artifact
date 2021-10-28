import "../src/styles/app.scss";
import { BrowserRouter as Browser, Switch, Route } from "react-router-dom";
import Index from "./components/pages/Index";

function App() {
  return (
    <div>
      <Browser>
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </Browser>
    </div>
  );
}

export default App;
