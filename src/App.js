
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar />
          <Switch>
            {/* Aca van las paginas que queremos que varien en la navegacion */}
            <Route exact path="/" component={ItemListContainer} />
            <Route path='/category/:id' component={ItemListContainer} />
            <Route path='/item/:id' component={ItemDetailContainer}/>
          </Switch>
        
      </div>
    </BrowserRouter>

  );
}

export default App;
