import React, { Suspense } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';
import AudioPlayer from './components/AudioPlayer';
import './App.css';

const RoomList = React.lazy(() => import('./components/RoomList'));
const RoomDetail = React.lazy(() => import('./components/RoomDetail'));
const Timeline = React.lazy(() => import('./components/Timeline'));
const VietnamMap = React.lazy(() => import('./components/VietnamMap'));
const Dashboard = React.lazy(() => import('./components/Dashboard'));
const Quiz = React.lazy(() => import('./components/Quiz'));
const Certificate = React.lazy(() => import('./components/Certificate'));
const Theory = React.lazy(() => import('./components/Theory'));

function HomePage() {
  return (
    <>
      <Hero />
      <Suspense fallback={<Loading />}>
        <RoomList />
        <Dashboard />
      </Suspense>
    </>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loading />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/theory" element={<Theory />} />
          <Route path="/rooms" element={<RoomList />} />
          <Route path="/room/:id" element={<RoomDetail />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/map" element={<VietnamMap />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/certificate" element={<Certificate />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <main className="main-content">
          <AnimatedRoutes />
        </main>
        <Footer />
        <AudioPlayer />
      </div>
    </HashRouter>
  );
}