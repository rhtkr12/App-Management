import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Layouts from './layouts/Layouts';
import Home from '../src/views/Home'
import Products from '../src/views/Products';
import Users from '../src/views/Users';
import Login from '../src/views/Login'
import Register from '../src/views/Register'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path='/apps/users' element={<Users />} />
          <Route path='/apps/products' element={<Products />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App;
