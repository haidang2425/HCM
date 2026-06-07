import { motion } from 'framer-motion';
import { useState } from 'react';
const cities = [
  {name:'Hà Nội',title:'Hà Nội - Thủ đô',desc:'Trái tim của cả nước. Nơi Bác Hồ đọc Tuyên ngôn Độc lập.',x:48,y:28},
  {name:'TP.HCM',title:'TP. Hồ Chí Minh',desc:'Thành phố mang tên Bác. Đầu tàu kinh tế của cả nước.',x:52,y:75},
  {name:'Đà Nẵng',title:'Đà Nẵng',desc:'Thành phố biển năng động, trung tâm kinh tế miền Trung.',x:70,y:55},
  {name:'Nghệ An',title:'Nghệ An',desc:'Quê hương Bác Hồ kính yêu. Nơi có làng Sen, làng Hoàng Trù.',x:37,y:66},
  {name:'Cao Bằng',title:'Cao Bằng',desc:'Nơi Bác về nước sau 30 năm, tại cột mốc 108, Pắc Bó.',x:46,y:10},
];
export default function VietnamMap() {
  const [active, setActive] = useState(null);
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1}} className="section section-cream">
      <div className="container">
        <h2 className="section-title">Bản đồ Việt Nam tương tác</h2>
        <p className="section-subtitle">Di chuột qua các địa danh để khám phá thông tin</p>
        <div className="map-container">
          <svg viewBox="0 0 120 160" className="vietnam-map-svg">
            <path d="M50,5 L55,3 L60,5 L65,8 L70,12 L65,18 L58,20 L52,18 L48,15 L45,10 Z" fill="#2D8732" opacity="0.6"/>
            <path d="M45,15 L52,18 L58,20 L65,18 L70,22 L75,28 L72,32 L68,35 L62,33 L55,30 L48,28 L42,25 L40,20 Z" fill="#3A9B3A" opacity="0.7"/>
            <path d="M40,25 L48,28 L55,32 L60,35 L62,40 L65,45 L68,50 L70,55 L65,58 L58,56 L50,55 L42,52 L38,48 L35,42 L36,35 Z" fill="#4CAF50" opacity="0.7"/>
            <path d="M35,48 L42,52 L50,55 L58,56 L62,60 L65,65 L62,70 L58,72 L52,70 L45,68 L38,65 L35,60 L33,55 Z" fill="#66BB6A" opacity="0.6"/>
            <path d="M38,70 L45,72 L52,74 L58,76 L62,80 L65,85 L62,90 L58,92 L52,90 L45,88 L40,85 L36,80 L35,75 Z" fill="#81C784" opacity="0.6"/>
            <path d="M40,88 L45,90 L52,92 L58,94 L62,98 L60,102 L55,105 L50,103 L45,100 L42,96 L40,92 Z" fill="#A5D6A7" opacity="0.5"/>
            {cities.map((c, i) => (
              <g key={i} onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)} style={{cursor:'pointer'}}>
                <circle cx={c.x} cy={c.y} r="3" fill="#C41E3A" stroke="#fff" strokeWidth="1.5" className="map-city-dot" />
                <circle cx={c.x} cy={c.y} r="6" fill="none" stroke="#C41E3A" strokeWidth="1" opacity="0.4" />
              </g>
            ))}
          </svg>
          {active !== null && (
            <motion.div initial={{opacity:0,scale:0.8}} animate={{opacity:1,scale:1}} className="map-tooltip">
              <h4>{cities[active].title}</h4>
              <p>{cities[active].desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}