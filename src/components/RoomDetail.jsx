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

  const colors = ['#1A1A2E','#8B1A2B','#1A1A2E','#C41E3A','#2D2D44','#8B1A2B','#C41E3A','#1A1A2E','#D4A84B','#1A1A2E'];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="room-detail" style={{background:colors[room.id] || '#1A1A2E'}}>
      <div className="room-detail-overlay" />
      <div className="room-detail-content container">
        <Link to="/rooms" className="room-back-btn">← Quay lại</Link>

        <div className="room-detail-layout">
          {room.image && !imageError && (
            <motion.div initial={{opacity:0,x:20}} animate={{opacity:1,x:0}} transition={{delay:0.15}} className="room-detail-image">
              <img
                src={room.image}
                alt={room.title}
                onError={() => setImageError(true)}
                className="room-image-content"
              />
              <div className="room-image-caption">📸 {room.subtitle}</div>
            </motion.div>
          )}

          <div className="room-detail-text">
            <motion.h1 initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.2}} className="room-detail-title">{room.title}</motion.h1>
            <motion.h2 initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.3}} className="room-detail-subtitle">{room.subtitle}</motion.h2>
            <motion.p initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.4}} className="room-detail-desc">{room.desc}</motion.p>

            {room.quote && (
              <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}}>
                <blockquote className="room-quote" onClick={() => setShowQuote(!showQuote)}>
                  <p>"{room.quote}"</p>
                  <cite>- Chủ tịch Hồ Chí Minh</cite>
                </blockquote>
              </motion.div>
            )}

            <motion.div initial={{y:30,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:0.8}} className="room-detail-actions">
              {parseInt(id) > 0 && <Link to={'/room/' + (parseInt(id)-1)} className="btn btn-outline">← Phòng trước</Link>}
              {parseInt(id) < 9 && <Link to={'/room/' + (parseInt(id)+1)} className="btn btn-gold">Phòng tiếp →</Link>}
              {parseInt(id) === 9 && <Link to="/quiz" className="btn btn-gold">Làm bài Quiz →</Link>}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}