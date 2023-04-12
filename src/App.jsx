
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import { ProductList } from './components/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


function App() {
  return (
    <div className="App">
     <NavBar />
     <ItemListContainer greeting={'HOLA MUNDO'} />
     <ProductList />
    </div>
  );
}

export default App;
