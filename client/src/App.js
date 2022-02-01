import './App.css';
import Main from './views/Main'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import Detail from './views/Detail';
import Edit from './views/Edit';
import Register from './views/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route path="/pet/:id/edit">
          <Edit/>
        </Route>
        <Route path="/pet/:id">
          <Detail/>
        </Route>
        <Route exact path='/pets/new'>
          <Register/>
        </Route>
        <Route exact path='/'>
          <Main/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;
