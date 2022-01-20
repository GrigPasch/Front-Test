import { breakpoints } from '@mui/system';
import './App.css';
import CustomBreakpoints from './Components/Breakpoints';
import Counter from './Components/Counter';
import PictureList from './Components/Picture';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter/>
      </header>
      
      <body>
      
        <div className='gallery'>
          <PictureList></PictureList>
        </div>
       
        
      </body>
    </div>
  );
}

export default App;

