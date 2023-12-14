import './App.css';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="App">
      <h1>C A L C U L A T 0 R</h1>
      <div style={{display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems: 'center', height: '80vh'}}>
        <Calculator />
      </div>
    </div>
  );
}

export default App;
