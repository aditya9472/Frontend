import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/AuthPage/Login';
import SignupPage from './pages/AuthPage/SignupPage';
import HomePage from './pages/HomePage/HomePage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default App;
