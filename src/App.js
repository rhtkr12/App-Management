import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import Layouts from './layouts/Layouts';
import Home from '../src/views/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layouts />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
