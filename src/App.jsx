
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/views/Home'
import Favorites from './components/views/Favorites'
import Navbar from './components/Navbar'

function App() {
 

  return (
    <>
      <Navbar />
      <Routes >
        <Route path='home' element={<Home/> }      />
        <Route path='favorites' element={ <Favorites /> } />
      </Routes>
    </>
  )
}

export default App
