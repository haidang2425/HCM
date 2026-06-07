import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { rooms } from '../data/roomContent';
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'nav-active' : '';
  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">🏛️</span>
          <span className="brand-text">Bảo tàng HCM</span>
        </Link>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </button>
        <div className={'nav-links ' + (menuOpen ? 'open' : '')}>
          <Link to="/" className={isActive('/')} onClick={() => setMenuOpen(false)}>Trang chủ</Link>
          <Link to="/rooms" className={isActive('/rooms')} onClick={() => setMenuOpen(false)}>Phòng triển lãm</Link>
          <Link to="/timeline" className={isActive('/timeline')} onClick={() => setMenuOpen(false)}>Dòng thời gian</Link>
          <Link to="/map" className={isActive('/map')} onClick={() => setMenuOpen(false)}>Bản đồ</Link>
          <Link to="/dashboard" className={isActive('/dashboard')} onClick={() => setMenuOpen(false)}>Thành tựu</Link>
          <Link to="/quiz" className={'btn btn-gold nav-quiz-btn ' + isActive('/quiz')} onClick={() => setMenuOpen(false)}>Quiz</Link>
        </div>
      </div>
    </nav>
  );
}