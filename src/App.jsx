
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import FindCar from './pages/FindCar'
import Anime from './pages/Anime'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/findcar' element={<FindCar />}/>
      <Route path='/anime' element ={<Anime />} />
    </Routes>
  )
}

export default App
