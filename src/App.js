import './App.css';
import { InputBox } from './components/Input Box';

function App() {
  return (
    <div className="App">
      <div className='body'>
        <div className='header'>
          <h1 className='title'>
            Guess the Word
          </h1>
        </div>
        <div className='sub header'>
          <h3 className='completion-status'>
            Win/Lose
          </h3>
        </div>
        <div className='category-wrapper'>
          <h4 className='category'>
            Category
          </h4>
        </div>
        <div className='hint wrapper'>
          <h5 className='hint'>
            Hint
          </h5>
        </div>

        <InputBox />
      </div>
    </div>
  );
}

export default App;
