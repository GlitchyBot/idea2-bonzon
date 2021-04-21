
import './App.css';
import {Navbar} from './components/navbar/navbar'
import {ItemListContainer} from './components/itemlistcontainer/itemlistcontainer'

function App() {

const saludo = 
[
  {
    greeting: 'Disculpe las molestias, tienda en construccion.'
  } 
]

  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer greeting={saludo[0].greeting}/>
    </div>
  );
}

export default App;
