import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { rooms } from '../data/roomContent';
import { useState } from 'react';

export default function RoomDetail() {
  const { id } = useParams();
  const room = rooms[parseInt(id)];
  const [imageError, setImageError] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  if (!room) return <div className="section text-center"><h2>Phòng không tồn tại</h2><Link to="/rooms" className="btn btn-primary mt-8">Quay lại</Link></div>;

  const colors = [
    'linear-gradient(135deg, #100E17 0%, #1c1424 100%)', // Sảnh Chính - Deep Royal Dark
    'linear-gradient(135deg, #2c0e12 0%, #0c0204 100%)', // Khởi nguồn - Deep Maroon
    'linear-gradient(135deg, #0d1e2d 0%, #050b12 100%)', // Tìm đường cứu nước - Deep Oceanic Blue
    'linear-gradient(135deg, #38080f 0%, #0d0103 100%)', // Đấu tranh - Rich Crimson
    'linear-gradient(135deg, #182218 0%, #080c08 100%)', // Nhà nước - Pine Green/Dark Slate
    'linear-gradient(135deg, #2d2008 0%, #0f0b02 100%)', // Đạo đức - Dark Amber
    'linear-gradient(135deg, #25123e 0%, #0a0314 100%)', // Lợi ích nhân dân - Royal Purple
    'linear-gradient(135deg, #0e2a22 0%, #030a08 100%)', // Việt Nam hôm nay - Emerald Teal
    'linear-gradient(135deg, #1c2d3d 0%, #09121a 100%)', // Thế hệ trẻ - Modern Steel Blue
    'linear-gradient(135deg, #1f1414 0%, #0a0606 100%)'  // Tri ân & Kết thúc - Deep Charcoal Red
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="room-detail" 
      style={{ background: colors[room.id] || '#1A1A2E', minHeight: '100vh', display: 'flex', alignItems: 'center' }}
    >
      <div className="room-detail-overlay" style={{ pointerEvents: 'none' }} />
      <div className="room-detail-content container" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
        
        {/* Breadcrumbs Navigation */}
        <div style={{ marginBottom: '25px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '5px' }}>
          <Link to="/" style={{ color: 'var(--cream)', opacity: 0.7, textDecoration: 'none' }}>Trang chủ</Link>
          <span style={{ color: 'var(--cream)', opacity: 0.5 }}>/</span>
          <Link to="/rooms" style={{ color: 'var(--cream)', opacity: 0.7, textDecoration: 'none' }}>Phòng triển lãm</Link>
          <span style={{ color: 'var(--cream)', opacity: 0.5 }}>/</span>
          <span style={{ color: 'var(--gold-primary)', fontWeight: 'bold' }}>{room.title}</span>
        </div>

        {/* 2-Column Responsive Premium Layout */}
        <div className="room-detail-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '40px', alignItems: 'start' }}>
          
          {/* Left Column: Visual Assets */}
          <div className="room-detail-left" style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            
            {/* Main Image with Premium Frame */}
            {room.image && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.15 }} 
                className="room-detail-image-wrapper"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
                  border: '1px solid rgba(212,168,75,0.2)',
                  background: 'rgba(0,0,0,0.3)'
                }}
              >
                {!imageError ? (
                  <img
                    src={room.image}
                    alt={room.title}
                    onError={() => setImageError(true)}
                    className="room-image-content"
                    style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '420px', objectFit: 'cover' }}
                  />
                ) : (
                  <div className="room-image-content" style={{ background: `linear-gradient(135deg, rgba(196,30,58,0.2), #1A1A2E)`, display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#fff', fontSize: '1.2rem', padding: '40px', textAlign: 'center', minHeight: '300px' }}>
                    <div style={{ opacity: 0.7 }}>
                      <div style={{ fontSize: '4.5rem', marginBottom: '15px' }}>🏛️</div>
                      <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--gold-primary)' }}>{room.title}</h3>
                      <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.5)' }}>Hình ảnh đang được tải...</p>
                    </div>
                  </div>
                )}
                <div className="room-image-caption" style={{ background: 'rgba(15,15,25,0.95)', color: 'var(--gold-light)', padding: '12px var(--space-4)', fontSize: 'var(--text-sm)', textAlign: 'center', borderTop: '1px solid rgba(212,168,75,0.2)' }}>
                  📸 {room.subtitle}
                </div>
              </motion.div>
            )}

            {/* Embedded YouTube Documentary Player */}
            {room.videos && room.videos.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.3 }} 
                className="room-video-section"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(212,168,75,0.15)',
                  borderRadius: '16px',
                  padding: '20px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.4)'
                }}
              >
                <h4 className="section-resource-title" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold-light)', fontSize: '1.1rem', marginBottom: '15px', borderLeft: '3px solid var(--gold-primary)', paddingLeft: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  🎥 Phim tư liệu lịch sử
                </h4>
                
                {/* Premium Custom Video Streaming Card with Real YouTube Thumbnail */}
                <div 
                  className="custom-video-card" 
                  onClick={() => window.open(`https://www.youtube.com/watch?v=${room.videos[0].id}`, '_blank')}
                  style={{
                    position: 'relative',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                    border: '1px solid rgba(212,168,75,0.2)',
                    transition: 'all 0.3s ease',
                    aspectRatio: '16/9',
                    background: '#000'
                  }}
                >
                  <img 
                    src={`https://img.youtube.com/vi/${room.videos[0].id}/hqdefault.jpg`} 
                    alt={room.videos[0].title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.65,
                      transition: 'transform 0.5s ease'
                    }}
                    className="video-thumbnail-img"
                  />
                  <div 
                    style={{
                      position: 'absolute',
                      inset: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)',
                    }}
                  >
                    <div 
                      className="play-button-glow"
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        background: 'rgba(212,168,75,0.9)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 0 20px rgba(212,168,75,0.5)',
                        transition: 'transform 0.3s ease'
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5V19L19 12L8 5Z" fill="#100E17"/>
                      </svg>
                    </div>
                  </div>
                  <div 
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '12px 15px',
                      background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <span style={{ color: '#fff', fontSize: '0.85rem', fontWeight: 'bold', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '80%' }}>
                      {room.videos[0].title}
                    </span>
                    <span style={{ color: 'var(--gold-primary)', fontSize: '0.75rem', fontWeight: 'bold' }}>
                      YOUTUBE ↗
                    </span>
                  </div>
                </div>

                <div className="video-caption" style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginTop: '10px', fontStyle: 'italic' }}>
                  Click để xem tư liệu chính gốc trên YouTube
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Historical Content & References */}
          <div className="room-detail-text" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            
            {/* Year Badge */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              className="room-badge"
              style={{
                display: 'inline-block',
                background: 'rgba(212,168,75,0.2)',
                color: 'var(--gold-light)',
                border: '1px solid var(--gold-primary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                letterSpacing: '2px',
                padding: '4px 14px',
                borderRadius: '20px',
                marginBottom: '15px',
                width: 'fit-content'
              }}
            >
              📅 {room.year || 'Lịch sử'}
            </motion.div>

            <motion.h1 
              initial={{ y: 30, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.2 }} 
              className="room-detail-title"
              style={{ fontSize: '3.2rem', fontFamily: 'var(--font-display)', marginBottom: '10px', lineHeight: '1.2', color: '#fff' }}
            >
              {room.title}
            </motion.h1>
            
            <motion.h2 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.3 }} 
              className="room-detail-subtitle"
              style={{ fontSize: '1.4rem', color: 'var(--gold-primary)', marginBottom: '20px', fontWeight: '400', fontFamily: 'var(--font-body)' }}
            >
              {room.subtitle}
            </motion.h2>
            
            {/* Scrollable description area to make text clean and fit screen */}
            <div className="desc-scroll-area" style={{ maxHeight: '320px', overflowY: 'auto', paddingRight: '15px', marginBottom: '20px' }}>
              <motion.p 
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.4 }} 
                className="room-detail-desc"
                style={{ fontSize: '1.1rem', lineHeight: '1.8', opacity: 0.9, textAlign: 'justify', color: '#e2e2e7' }}
              >
                {room.desc}
              </motion.p>
            </div>

            {/* Premium Interactive Quote Box */}
            {room.quote && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                <blockquote 
                  className="room-quote" 
                  onClick={() => setShowQuote(!showQuote)}
                  style={{
                    background: 'rgba(212,168,75,0.06)',
                    borderLeft: '4px solid var(--gold-primary)',
                    padding: '20px 25px',
                    borderRadius: '0 12px 12px 0',
                    margin: '15px 0 25px 0',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2)',
                    border: '1px solid rgba(212,168,75,0.1)',
                    borderLeftWidth: '4px'
                  }}
                >
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--gold-light)', margin: 0, lineHeight: '1.5' }}>
                    "{room.quote}"
                  </p>
                  <cite style={{ display: 'block', marginTop: '10px', color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', fontWeight: 'bold' }}>
                    - Chủ tịch Hồ Chí Minh
                  </cite>
                </blockquote>
              </motion.div>
            )}

            {/* Historical Articles and Research papers */}
            {room.articles && room.articles.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.7 }} 
                className="room-articles-section"
                style={{
                  marginTop: '15px',
                  borderTop: '1px solid rgba(255,255,255,0.1)',
                  paddingTop: '20px'
                }}
              >
                <h4 className="section-resource-title" style={{ fontFamily: 'var(--font-display)', color: 'var(--gold-light)', fontSize: '1.1rem', marginBottom: '15px', borderLeft: '3px solid var(--gold-primary)', paddingLeft: '10px' }}>
                  📖 Tài liệu báo chí & Nghiên cứu uy tín
                </h4>
                <div className="articles-grid" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {room.articles.map((art, index) => (
                    <a 
                      href={art.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      key={index} 
                      className="article-card"
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(212,168,75,0.15)',
                        padding: '16px 20px',
                        borderRadius: '12px',
                        textDecoration: 'none',
                        transition: 'all 0.25s ease',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.15)'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <span className="source-badge">{art.source}</span>
                        {art.date && <span className="date-badge">{art.date}</span>}
                      </div>
                      <span className="article-title" style={{ color: '#ffffff', fontSize: '1rem', fontWeight: '600', lineHeight: '1.4' }}>{art.title}</span>
                      <span className="article-link-text" style={{ color: 'var(--gold-light)', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '4px', fontWeight: 'bold' }}>
                        Đọc tài liệu chính thống ↗
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Back & Next Navigation Buttons */}
            <motion.div 
              initial={{ y: 30, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.8 }} 
              className="room-detail-actions"
              style={{ display: 'flex', gap: '15px', marginTop: '30px', flexWrap: 'wrap' }}
            >
              {parseInt(id) > 0 ? (
                <Link to={'/room/' + (parseInt(id)-1)} className="btn btn-outline-gold" style={{ textDecoration: 'none', padding: '12px 24px' }}>
                  ← Phòng trước
                </Link>
              ) : (
                <Link to="/rooms" className="btn btn-outline-gold" style={{ textDecoration: 'none', padding: '12px 24px' }}>
                  ← Quay lại Sảnh
                </Link>
              )}
              
              {parseInt(id) < 9 ? (
                <Link to={'/room/' + (parseInt(id)+1)} className="btn btn-primary" style={{ textDecoration: 'none', padding: '12px 24px' }}>
                  Phòng tiếp theo →
                </Link>
              ) : (
                <Link to="/quiz" className="btn btn-primary" style={{ textDecoration: 'none', padding: '12px 24px' }}>
                  Làm bài Quiz ôn tập →
                </Link>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}