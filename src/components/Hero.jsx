import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-particles" />
      <div className="hero-content">
        <motion.div initial={{opacity:0,y:50}} animate={{opacity:1,y:0}} transition={{duration:1}}>
          <h1 className="hero-title">Bảo tàng Số</h1>
          <h2 className="hero-title-sub">Tư tưởng Hồ Chí Minh</h2>
          <p className="hero-subtitle">
            Khám phá cuộc đời anh hùng dân tộc, những chiến công hiển hách, tư tưởng vĩ đại
            và di sản bất diệt mà Chủ tịch Hồ Chí Minh để lại cho dân tộc Việt Nam
          </p>
          <div className="hero-actions">
            <Link to="/rooms" className="btn btn-primary btn-lg">🏛️ Bắt đầu hành trình</Link>
            <Link to="/timeline" className="btn btn-primary btn-lg">📅 Dòng thời gian</Link>
            <Link to="/dashboard" className="btn btn-primary btn-lg">📊 Thành tựu đất nước</Link>
          </div>
        </motion.div>
      </div>
      <motion.div className="hero-scroll" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.5}}>
        <span>Cuộn xuống để khám phá</span>
        <div className="scroll-indicator" />
      </motion.div>
    </section>
  );
}