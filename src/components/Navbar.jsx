import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import SearchModal from './SearchModal';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path) => location.pathname === path ? 'nav-active' : '';

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">🏛️</span>
          <span className="brand-text">Bảo tàng HCM</span>
        </Link>
        
        <div className="nav-controls-mobile" style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
          <button className="theme-toggle" onClick={() => setSearchOpen(true)} title="Tìm kiếm" style={{fontSize: '1.2rem'}}>
            🔍
          </button>
          <button className="theme-toggle" onClick={toggleTheme} title="Giao diện Sáng/Tối" style={{fontSize: '1.2rem'}}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        
        <div className={'nav-links ' + (menuOpen ? 'open' : '')}>
          <Link to="/" className={isActive('/')} onClick={() => setMenuOpen(false)}>Trang chủ</Link>
          <Link to="/theory" className={isActive('/theory')} onClick={() => setMenuOpen(false)}>Lý thuyết</Link>
          <Link to="/rooms" className={isActive('/rooms')} onClick={() => setMenuOpen(false)}>Phòng triển lãm</Link>
          <Link to="/timeline" className={isActive('/timeline')} onClick={() => setMenuOpen(false)}>Dòng thời gian</Link>
          <Link to="/map" className={isActive('/map')} onClick={() => setMenuOpen(false)}>Bản đồ</Link>
          <Link to="/dashboard" className={isActive('/dashboard')} onClick={() => setMenuOpen(false)}>Thành tựu</Link>
          <Link to="/quizbank" className={isActive('/quizbank')} onClick={() => setMenuOpen(false)}>Ngân hàng đề</Link>
          
          <div className="nav-actions" style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
            <button className="theme-toggle" onClick={() => setSearchOpen(true)} title="Tìm kiếm" style={{fontSize: '1.2rem', cursor: 'pointer', background: 'none', border: 'none'}}>
              🔍
            </button>
            <button className="theme-toggle" onClick={toggleTheme} title="Giao diện Sáng/Tối" style={{fontSize: '1.2rem'}} id="desktop-theme-toggle">
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
            <Link to="/quiz" className={'btn btn-gold nav-quiz-btn ' + isActive('/quiz')} onClick={() => setMenuOpen(false)}>Quiz Mini</Link>
          </div>
        </div>
      </div>
      
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </nav>
  );
}