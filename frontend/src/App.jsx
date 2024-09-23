import './App.css'
import Home from './components/Home/Home'
import Posts from './components/Posts/Posts'
import Admin from './components/Admin/Admin'
import './universal.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/admin' element={<Admin/>} />
    </Routes>
  )
}

export default App
