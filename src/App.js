import './App.css';
import './components/NavBar';
import NavBar from './components/NavBar';
import ItemDetailContainer from './containers/ItemDetailContainer';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <>
      <header>
        <NavBar />
        <div className="backgroundIndex"></div>
        <div class="textoIndex">
          <h1>Armá tus tragos con nosotros.</h1>
        </div>
      </header>
      <main>
      <ItemListContainer />
      </main>
      <ItemDetailContainer />
      <div className="App"></div>
    </>
  );
}

export default App;
