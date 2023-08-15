import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Layouts from './layouts/Layouts';
import Home from '../src/views/Home'
import Products from '../src/views/Products';
import Users from '../src/views/Users';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path='/apps/users' element={<Users />} />
          <Route path='/apps/products' element={<Products />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
