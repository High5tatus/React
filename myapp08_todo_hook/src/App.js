import {BrowserRouter, Switch, Route} from 'react-router-dom'
import TodoFrom from './TodoForm';
import Home from './Home';
import Navigation from './Navigation';
import TodoView from './TodoView';
function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/insert" component={TodoFrom}/>
        <Route path="/findAll" component={Home}/>
        <Route path="/view/:num" component={TodoView}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
