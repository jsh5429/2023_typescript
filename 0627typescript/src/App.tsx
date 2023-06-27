import './App.css';
import TypeClassComp from './components/TypeClassComp';
import TypeListComp from './components/TypeListComp';

function App() {
  return (
    <div className='App'>
      <TypeClassComp startNumber={20}/>
      <hr />
      <TypeListComp />
    </div>
  );
}
export default App;
