import './App.css';
import Counter from './Components/Counter';
import PictureList from './Components/Picture';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
      </header>
      
      <body>
          <div>
            <PictureList></PictureList>
          </div>
      </body>
      
    </div>
  );
}

export default App;

