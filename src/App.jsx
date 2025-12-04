import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Calculator from './pages/Calculator'
import UserList from './pages/UserList'
import Todo from './pages/Todo'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/todo' element={<Todo/>}/>
          <Route path='/user-list' element={<UserList/>}/>
          <Route path='/calculator' element={<Calculator/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
