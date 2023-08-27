import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Layouts from './layouts/Layouts';
import Home from '../src/views/Home'
import Products from '../src/views/Products';
import Product from '../src/views/Product';
import Users from '../src/views/Users';
import Profile from '../src/views/Profile'
import Login from '../src/views/Login'
import Register from '../src/views/Register'
import Dashboard from '../src/views/Dashboard'
import Admin from '../src/views/Admin'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layouts />}>
          <Route index element={<Home />} />
          {/* Users */}
          <Route path='apps/users' element={<Users />} >
            <Route path='profile' element={<Profile />} />
          </Route>
          {/* Products */}
          <Route path='apps/products' element={<Products />} />
          <Route path='apps/products/product/:id' element={<Product />} />
          {/* </Route> */}
          {/* Admin */}
          <Route path='dashboard' element={<Dashboard />}>
            <Route path='admin' elemnet={<Admin />} />
          </Route>
        </Route>
        {/* Default Pages */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App;
