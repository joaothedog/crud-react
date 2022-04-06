import './App.css';
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <div className="App">
      <div className="register container">
        <h1 style={{ color: 'white' }} className="title is-2">iPresence</h1>
        <section>
          <input class="input"
            type="text"
            name="nome"
            placeholder="Nome"
            className="input register-input"
          />
        </section>
        <div>
          <input class="input"
            type="text"
            name="period"
            placeholder="Período"
            className="register-input input"
          />
          <input class="input"
            type="text"
            name="cra"
            placeholder="Matrícula"
            className="register-input input"
          />
        </div>
        <button className="register-button button is-light is-outlined">Presente</button>
      </div>
    </div>
  );
}

export default App;
