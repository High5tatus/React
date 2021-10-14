import Home from './routers/Home';
import About from './routers/About';
import Detail from './routers/Detail';
import MovieView from './routers/MovieView';
import Navigation from './components/Navigation'
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  
  return (
    <BrowserRouter>
    <Navigation/>
      <Switch>
        <Route path="/" exact={true} component={Home}/>
        <Route path="/about" component={About} />
        <Route path="/movie-detail" component={Detail} />
        <Route path="/movie-view" component={MovieView} />
      </Switch>

    </BrowserRouter>
  );
}

export default App;
