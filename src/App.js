import './App.css';
import Elements  from './compo/Elements';
import {Routes , Route} from 'react-router-dom';
function App() {
  

  return (
    <div className="App">
      <Routes>
         <Route path="/" element={<Elements/>}/>
      </Routes>
     <Elements/>
    </div>
  );
}

export default App;
