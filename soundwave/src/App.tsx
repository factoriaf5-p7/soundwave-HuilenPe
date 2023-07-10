import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Join from './pages/Join/Join'
import Discover from './pages/Discover/Discover'
import NotFound from './pages/NotFound/NotFound'
function App() {
  return (
      <Router>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/join" element={<Join />} />
          <Route path="/404" element={<NotFound />} />
      </Router>
  )
}

export default App
