import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import ProspectiveMembers from './pages/ProspectiveMembers'
import Members from './pages/Members'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/prospective-members" element={<ProspectiveMembers />} />
            <Route path="/members" element={<Members />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
