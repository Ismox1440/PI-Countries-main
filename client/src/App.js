import './App.css';
import Home from './components/home/Home';
import {Route, Switch} from 'react-router-dom'
import Index from './components/landingPage';
import CreateActivity from './components/createActivity/CreateActivity';
import CountryPage from './components/countryPage/CountryPage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Index} />
        <Route exact path='/home' component={Home} />
        <Route path='/create' component={CreateActivity} />
        <Route path='/home/:id' component={CountryPage} />
      </Switch>
    </div>
  );
}

export default App;
