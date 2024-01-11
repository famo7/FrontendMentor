import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Success from './components/Success';

function App () {

  return (
    <div className='p-7 bg-white w:full h-screen sm:flex sm:justify-center sm:items-center sm:bg-primary'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/success' element={<Success />}></Route>
      </Routes>
    </div>
  )
}

export default App
