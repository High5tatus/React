import Navigation from './components/Navigation';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import About from './routers/About';
import Home from './routers/Home';
import Index from './routers/Index';
import Detail from './components/Detail';
import Insert from './components/Insert';
import FindAll from './components/FindAll';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/list" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/index" component={Index}/>
        <Route path="/detail" component={Detail}/>
        <Route path="/insert" component={Insert}/>
        <Route path="/findAll" component={FindAll}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
