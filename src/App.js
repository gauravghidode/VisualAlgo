
import './App.css';
import BubbleSort from './Pages/Sorting/BubbleSort';
import Sorting from './Pages/Sorting/Sorting';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './Pages/Home/Header';
import Home from './Pages/Home/Home';
import InsertionSort from './Pages/Sorting/InsertionSort';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/mergeSort" element={<Sorting></Sorting>}></Route>
        <Route path='/bubbleSort' element={<BubbleSort></BubbleSort>}></Route>
        <Route path='/insertionsort' element={<InsertionSort></InsertionSort>}></Route>
        <Route path='/bubbleSort' element={<BubbleSort></BubbleSort>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
