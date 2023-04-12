
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';
import './index.css'

function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greeting={'HOLA MUNDO'} />
     <Header />
     <ProductList />
    </div>
  );
}

export default App;
