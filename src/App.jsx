
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import FindCar from './pages/FindCar'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/findcar' element={<FindCar />}/>
    </Routes>
  )
}

export default App
