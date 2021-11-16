import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer products='Cotillón, Todo Suelto, Papelera y mucho más!'/>
    </div>
  );
}

export default App;
