import { motion } from 'framer-motion';
import RoomCard from './RoomCard';
import { rooms } from '../data/roomContent';
export default function RoomList() {
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1}} className="section section-cream">
      <div className="container">
        <h2 className="section-title">Khu triển lãm</h2>
        <p className="section-subtitle">10 khu triển lãm tương tác đưa bạn qua hành trình cuộc đời Chủ tịch Hồ Chí Minh</p>
        <div className="room-grid">
          {rooms.map((room, i) => <RoomCard key={room.id} room={room} index={i} />)}
        </div>
      </div>
    </motion.section>
  );
}