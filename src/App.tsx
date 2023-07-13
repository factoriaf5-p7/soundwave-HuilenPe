import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Discover } from './pages/Discover/discover'
import { Home } from './pages/Home/Home'
import { Join } from './pages/Join/join'
import Index from './pages/Index/Index'
import NotFound from './pages/NotFound/NotFound'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/join" element={<Join />} />
        <Route path="/notFound" element={<NotFound />} />
      </Routes>
    </>  
  )
}

export default App
