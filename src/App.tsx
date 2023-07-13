import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Discover } from './pages/Discover/discover'
import { Home } from './pages/Home/Home'
import { Join } from './pages/Join/join'
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/join" element={<Join />} />
      </Routes>
    </>  
  )
}

export default App
