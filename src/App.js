
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomePage from './containers/HomePage/HomePage'
import ShopPage from './containers/ShopPage/ShopPage'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <NavBar />

          

        <ItemDetailContainer idItem = {17}/>
        {/* <ItemListContainer/> */}
      </div>
    </BrowserRouter>

  );
}

export default App;
