// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import RegisterClient from './components/auth/RegisterClient';
import NewProposal from './components/proposal/NewProposal';
import Pipeline from './components/pipeline/Pipeline';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register-client" element={<RegisterClient />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/new-proposal"
            element={
              <PrivateRoute>
                <NewProposal />
              </PrivateRoute>
            }
          />
          <Route
            path="/pipeline"
            element={
              <PrivateRoute>
                <Pipeline />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
