import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import RoomList from './components/RoomList';
import RoomDetail from './components/RoomDetail';
import Timeline from './components/Timeline';
import VietnamMap from './components/VietnamMap';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import Certificate from './components/Certificate';
import './App.css';

function HomePage() {
  return (
    <>
      <Hero />
      <RoomList />
      <Dashboard />
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/rooms" element={<RoomList />} />
        <Route path="/room/:id" element={<RoomDetail />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/map" element={<VietnamMap />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/certificate" element={<Certificate />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}