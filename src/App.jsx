import './App.css'
import Homepage from '../src/homepage';
import Rent from '../src/rent';
import Pickupsize from './pickupSize.jsx';
import Contract from './contract.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Homepage />}> </Route>
        <Route path='/Rent' element={<Rent />}> </Route>
        <Route path='/Pickupsize' element={<Pickupsize />}> </Route>
        <Route path='/Contract' element={<Contract />}> </Route>
    </Routes>
    </BrowserRouter>

  )
}

export default App
