import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const cities = [
  {name:'Cao Bằng', title:'Cao Bằng (Pắc Bó)', desc:'Đầu năm 1941, Bác Hồ về nước sau 30 năm bôn ba, sống và làm việc tại hang Pắc Bó.', x:200, y:40},
  {name:'Tuyên Quang', title:'Tuyên Quang (Tân Trào)', desc:'Thủ đô khu giải phóng, nơi diễn ra Quốc dân Đại hội Tân Trào tháng 8/1945.', x:160, y:80},
  {name:'Hà Nội', title:'Hà Nội (Ba Đình)', desc:'Ngày 2/9/1945, Bác Hồ đọc bản Tuyên ngôn Độc lập. Nơi Bác sống và làm việc lâu nhất.', x:190, y:120},
  {name:'Nghệ An', title:'Nghệ An (Làng Sen)', desc:'Quê hương của Bác. Nơi lưu giữ những kỷ niệm tuổi thơ của Người.', x:150, y:240},
  {name:'Huế', title:'Thừa Thiên Huế', desc:'Nơi Bác cùng gia đình sống những năm tháng tuổi thơ và thiếu thời (1895-1901, 1906-1909).', x:280, y:390},
  {name:'Bình Thuận', title:'Bình Thuận (Trường Dục Thanh)', desc:'Năm 1910, Bác dừng chân dạy học tại trường Dục Thanh trước khi vào Nam.', x:300, y:670},
  {name:'TP.HCM', title:'TP. Hồ Chí Minh (Bến Nhà Rồng)', desc:'Ngày 5/6/1911, người thanh niên Nguyễn Tất Thành ra đi tìm đường cứu nước.', x:240, y:700},
];

export default function VietnamMap() {
  const [active, setActive] = useState(null);

  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1}} className="section section-cream">
      <div className="container">
        <h2 className="section-title">Bản đồ Di tích Hồ Chí Minh</h2>
        <p className="section-subtitle">Di chuột qua các địa danh trên bản đồ Việt Nam để khám phá dấu chân Người</p>
        
        <div className="map-container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative'}}>
          
          {/* Map and Active Info Side-by-side on desktop */}
          <div style={{display: 'flex', flexWrap: 'wrap', width: '100%', justifyContent: 'center', gap: '40px'}}>
            
            {/* SVG Map */}
            <div style={{width: '350px', position: 'relative'}}>
              <svg viewBox="0 0 703 900" className="vietnam-map-svg" style={{width: '100%', height: 'auto', filter: 'drop-shadow(0px 10px 15px rgba(0,0,0,0.1))'}}>
                <image href="/images/vietnam-map.svg" width="703" height="900" opacity="0.6" />
                
                {cities.map((c, i) => (
                  <g key={i} 
                     onMouseEnter={() => setActive(i)} 
                     onClick={() => setActive(i)}
                     style={{cursor:'pointer', transition: 'all 0.3s'}}>
                    <circle cx={c.x} cy={c.y} r="12" fill={active === i ? "var(--gold-primary)" : "var(--red-primary)"} className="map-city-dot" />
                    <circle cx={c.x} cy={c.y} r="35" fill="none" stroke={active === i ? "var(--gold-primary)" : "var(--red-primary)"} strokeWidth="3" opacity="0.6">
                      <animate attributeName="r" values="12;35" dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.8;0" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                    <text x={c.x + 25} y={c.y + 8} fontSize="28" fill="var(--ink)" fontWeight="bold" style={{pointerEvents: 'none', filter: 'drop-shadow(0 2px 2px rgba(255,255,255,0.8))'}}>{c.name}</text>
                  </g>
                ))}
              </svg>
            </div>

            {/* Info Panel */}
            <div style={{flex: '1', minWidth: '300px', maxWidth: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <AnimatePresence mode="wait">
                {active !== null ? (
                  <motion.div 
                    key={active}
                    initial={{opacity:0, x: 20}} 
                    animate={{opacity:1, x: 0}} 
                    exit={{opacity:0, x: -20}}
                    className="map-info-panel"
                    style={{
                      background: 'var(--white)',
                      padding: '30px',
                      borderRadius: 'var(--border-radius-lg)',
                      boxShadow: 'var(--shadow-md)',
                      borderLeft: '4px solid var(--red-primary)'
                    }}
                  >
                    <div style={{fontSize: '3rem', marginBottom: '10px'}}>📍</div>
                    <h3 style={{color: 'var(--red-dark)', marginBottom: '15px'}}>{cities[active].title}</h3>
                    <p style={{fontSize: '1.1rem', lineHeight: '1.6'}}>{cities[active].desc}</p>
                  </motion.div>
                ) : (
                  <motion.div 
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    style={{
                      padding: '30px',
                      borderRadius: 'var(--border-radius-lg)',
                      border: '2px dashed var(--slate-light)',
                      textAlign: 'center',
                      color: 'var(--slate)'
                    }}
                  >
                    <div style={{fontSize: '3rem', marginBottom: '10px', opacity: 0.5}}>👆</div>
                    <h3>Khám phá bản đồ</h3>
                    <p>Hãy chọn một địa danh trên bản đồ để xem chi tiết các sự kiện lịch sử gắn liền với Bác Hồ.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </motion.section>
  );
}