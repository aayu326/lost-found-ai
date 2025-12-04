import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import ReportLost from './pages/ReportLost'
import ReportFound from './pages/ReportFound'
import Matches from './pages/Matches'
import LostItems from './pages/LostItems'
import FoundItems from './pages/FoundItems'

function Navigation() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <nav>
      <div className="container">
        <h1>Lost & Found AI</h1>
        <ul>
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/lost" className={isActive('/lost')}>Lost Items</Link></li>
          <li><Link to="/found" className={isActive('/found')}>Found Items</Link></li>
          <li><Link to="/matches" className={isActive('/matches')}>Matches</Link></li>
        </ul>
      </div>
    </nav>
  )
}

function App() {
  return (
    <Router>
      <Navigation />
      <main>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/report-lost" element={<ReportLost />} />
            <Route path="/report-found" element={<ReportFound />} />
            <Route path="/matches" element={<Matches />} />
            <Route path="/lost" element={<LostItems />} />
            <Route path="/found" element={<FoundItems />} />
          </Routes>
        </div>
      </main>
    </Router>
  )
}

export default App
