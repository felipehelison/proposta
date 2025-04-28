import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import RegisterClient from './components/auth/RegisterClient';
import NewProposal from './components/proposal/NewProposal';
import Pipeline from './components/pipeline/Pipeline';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<RegisterClient />} />
        <Route path="/proposal" element={<NewProposal />} />
        <Route path="/pipeline" element={<Pipeline />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
