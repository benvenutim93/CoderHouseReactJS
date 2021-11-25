
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
// import ItemListContainer from './containers/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer/>
      {/* <ItemListContainer products='Cotillón, Todo Suelto, Papelera y mucho más!'/> */}
    </div>
  );
}

export default App;
