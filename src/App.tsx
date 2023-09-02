
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Content from './components/Content'

import Profile from './pages/Profile'


import './App.css'
import Home from './pages/Home'
function App() {

  return (
    <>
    <Routes>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/profile/:id' element={<Content/>}/>
    </Routes>
    </>
  )
}

export default App
