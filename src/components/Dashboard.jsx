import { motion } from 'framer-motion';
import { dashboardData, achievementData } from '../data/dashboardData';
export default function Dashboard() {
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1}} className="section section-dark">
      <div className="container">
        <h2 className="section-title text-gold">Thành tựu Việt Nam</h2>
        <p className="section-subtitle" style={{color:'var(--gold-light)'}}>Những con số ấn tượng sau hơn 50 năm thống nhất đất nước</p>
        <div className="dashboard-grid">
          {Object.entries(dashboardData).map(([key, item], i) => (
            <motion.div key={key} className="dashboard-card"
              initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.1}} viewport={{once:true}}
            >
              <div className="dashboard-value">{item.value}</div>
              <div className="dashboard-label">{item.label}</div>
              <p className="dashboard-desc">{item.desc}</p>
              {item.growth && <span className="dashboard-growth">+{item.growth}</span>}
            </motion.div>
          ))}
        </div>
        <div className="achievement-row">
          {achievementData.map((item, i) => (
            <motion.div key={i} className="achievement-item"
              initial={{opacity:0,scale:0}} whileInView={{opacity:1,scale:1}} transition={{delay:i*0.15}} viewport={{once:true}}
            >
              <div className="achievement-number" style={{color:item.color}}>{item.value.toLocaleString()}</div>
              <div className="achievement-label">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}