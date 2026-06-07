import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function RoomCard({ room, index }) {
  const [imageError, setImageError] = useState(false);
  const colors = ['#C41E3A','#8B1A2B','#D4A84B','#1A1A2E','#2D2D44','#B8860B','#C41E3A','#8B1A2B','#D4A84B','#1A1A2E'];
  const icons = ['🏛️','🌄','🚢','⚔️','🏛️','📜','❤️','🇻🇳','🌟','🙏'];
  
  return (
    <motion.div
      className="room-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{position: 'relative'}}
    >
      <div 
        className="room-card-thumbnail" 
        style={{ 
          height: '160px', 
          background: imageError ? `linear-gradient(135deg, ${colors[room.id]}, #1A1A2E)` : '#eee',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: 'var(--border-radius-lg) var(--border-radius-lg) 0 0'
        }}
      >
        {!imageError && room.image ? (
          <img 
            src={room.image} 
            alt={room.title} 
            onError={() => setImageError(true)}
            style={{width: '100%', height: '100%', objectFit: 'cover'}}
          />
        ) : (
          <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '3rem', opacity: 0.5}}>
            {icons[room.id]}
          </div>
        )}
      </div>
      <div className="room-card-icon" style={{ 
        background: colors[room.id], 
        position: 'absolute', 
        right: '20px', 
        top: '130px', 
        border: '4px solid var(--white)',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.5rem',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        zIndex: 2
      }}>
        {icons[room.id]}
      </div>
      <div className="room-card-body" style={{paddingTop: '30px'}}>
        <span className="room-card-year">{room.year || ''}</span>
        <h3 className="room-card-title">{room.title}</h3>
        <p className="room-card-desc">{room.subtitle}</p>
        <div className="room-card-footer">
          <Link to={'/room/' + room.id} className="btn btn-primary btn-sm">Khám phá</Link>
        </div>
      </div>
    </motion.div>
  );
}