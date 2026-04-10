import { Route, Routes } from 'react-router'
import MainLayout from './components/layout/MainLayout'
import Home from './pages/Home'
import Measure from './pages/Measure'
import Helps from './pages/Helps'
import Templates from './pages/Templates'
import Steps from './pages/Steps'
import Contact from './pages/Contact'
import Login from './pages/Login'
import About from './pages/About'
import Account from './pages/Account'
import Register from './pages/Register'

function App() {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/measure' element={<Measure/>}/>
        <Route path='/helps' element={<Helps/>}/>
        <Route path='/templates' element={<Templates/>}/>
        <Route path='/steps' element={<Steps/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register />}/>
      </Route>
    </Routes>
  )
}

export default App