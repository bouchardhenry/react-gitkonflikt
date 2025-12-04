import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Calculator from './pages/Calculator'
import UserList from './pages/UserList'
import TodoPage from './pages/Todo'
import UserList from './pages/userList/UserList'
import Nav from './components/Nav'

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/todo' element={<TodoPage/>}/>
          <Route path='/user-list' element={<UserList/>}/>
          <Route path='/calculator' element={<Calculator/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
