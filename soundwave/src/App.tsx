import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Join } from './pages/Join/join'
import { Discover } from './pages/Discover/discover'
import NotFound from './pages/NotFound/NotFound'
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/join" element={<Join />} />
          <Route path="/404" element={<NotFound />} />
      </Routes>
    </>  
  )
}

export default App
