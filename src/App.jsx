
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import FindCar from './pages/FindCar'
import Anime from './pages/Anime'
import CarInfo from './pages/CarInfo'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/findcar' element={<FindCar />}/>
      <Route path='/carinfo/:id' element={<CarInfo />} />
      <Route path='/anime/:id' element ={<Anime />} />
    </Routes>
  )
}

export default App
