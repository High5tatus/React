import {BrowserRouter, Switch, Route} from 'react-router-dom'
import BoardForm from "./BoardForm";
import BoardList from './BoardList';
import BoardView from "./BoardView";
import Home from "./Home";
import Navigation from './Navigation';


function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/insert" component={BoardForm}/>
        <Route path="/findAll" component={BoardList}/>
        <Route path="/view/:num" component={BoardView}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
