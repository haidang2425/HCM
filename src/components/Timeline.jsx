import { motion } from 'framer-motion';
import { timelineData } from '../data/timelineData';
import { useState } from 'react';
export default function Timeline() {
  const [activeIdx, setActiveIdx] = useState(null);
  const iconMap = {anchor:'🚢',star:'⭐',flag:'🏳️',home:'🏠',scroll:'📜',trophy:'🏆',heart:'❤️',map:'🗺️',refresh:'🔄',sun:'☀️'};
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1}} className="section section-dark">
      <div className="container">
        <h2 className="section-title text-gold">Dòng thời gian lịch sử</h2>
        <p className="section-subtitle" style={{color:'var(--gold-light)'}}>Hành trình từ 1911 đến nay — bấm vào từng mốc để xem chi tiết</p>
        <div className="timeline">
          <div className="timeline-line" />
          <div className="timeline-items">
            {timelineData.map((item, idx) => (
              <div key={idx} className={'timeline-item ' + (activeIdx === idx ? 'active' : '')}>
                <div className="timeline-dot-wrap" onClick={() => setActiveIdx(activeIdx === idx ? null : idx)}>
                  <div className="timeline-dot">{iconMap[item.icon] || '📌'}</div>
                  <span className="timeline-year">{item.year}</span>
                </div>
                <motion.div
                  className="timeline-content"
                  initial={false}
                  animate={{ height: activeIdx === idx ? 'auto' : 0, opacity: activeIdx === idx ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="timeline-content-inner">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}