import './App.css';
import imagem from '../image/Pokedex.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="image-header">
          <img src={imagem} alt="Pokedex" />
        </div>
      </header>
    </div>
  );
}

export default App;
