import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {useState } from "react"
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/login';
import Global from './components/Context/Global';

const productArr = [
  { pName: "Nokia Lumia", price: "$300.00", rating: 2 },
  { pName: "Sony Xperia", price: "$400.00", rating: 3 },
  { pName: "Apple iPhone", price: "$1000.00", rating: 8 },
  { pName: "Samsung Galaxy", price: "$800.00", rating: 7 },
  { pName: "Blackberry Pearl", price: "$700.00", rating: 6 },
  { pName: "Huawei P10", price: "$200.00", rating: 3 },
  { pName: "LG G40", price: "$600.00", rating: 1 },
  { pName: "OnePlus 6T", price: "$300.00", rating: 5 }
]

function App() {
  const [data, setData] = useState(productArr)
  return (
    <div className="App">
      <BrowserRouter>
      <Global.Provider value={data} >
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
        </Global.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
