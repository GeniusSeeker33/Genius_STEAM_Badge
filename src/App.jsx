import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Quiz from './pages/Quiz';
import BadgeLanding from './pages/BadgeLanding';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-500 text-white p-6">

        {/* Navigation */}
        <nav className="mb-6 space-x-4 text-lg">
          <Link to="/quiz" className="hover:underline">🎓 Quiz</Link>
          {/* Removed Mint Badge link */}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/quiz" element={<Quiz />} />

          {/* NEW: STEAM Card landing pages */}
          <Route path="/badge/:badgeKey" element={<BadgeLanding />} />

          {/* Optional: default route */}
          <Route path="/" element={<Quiz />} />
        </Routes>
      </div>
    </Router>
  );
}





