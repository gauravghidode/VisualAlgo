
import './App.css';
import BubbleSort from './Pages/Sorting/BubbleSort';
import Sorting from './Pages/Sorting/Sorting';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Sorting></Sorting>}></Route>
        <Route path="/mergeSort" element={<Sorting></Sorting>}></Route>
        <Route path='/bubbleSort' element={<BubbleSort></BubbleSort>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
