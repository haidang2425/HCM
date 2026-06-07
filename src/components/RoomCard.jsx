import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
export default function RoomCard({ room, index }) {
  const colors = ['#C41E3A','#8B1A2B','#D4A84B','#1A1A2E','#2D2D44','#B8860B','#C41E3A','#8B1A2B','#D4A84B','#1A1A2E'];
  const icons = ['🏛️','🌄','🚢','⚔️','🏛️','📜','❤️','🇻🇳','🌟','🙏'];
  return (
    <motion.div
      className="room-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="room-card-icon" style={{ background: colors[room.id] }}>{icons[room.id]}</div>
      <div className="room-card-body">
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