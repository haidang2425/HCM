import { motion } from 'framer-motion';
import { dashboardData, achievementData } from '../data/dashboardData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const gdpData = [
  { year: '2019', gdp: 327 },
  { year: '2020', gdp: 343 },
  { year: '2021', gdp: 366 },
  { year: '2022', gdp: 409 },
  { year: '2023', gdp: 430 },
];

const exportData = [
  { name: 'Nông nghiệp', value: 12 },
  { name: 'Công nghiệp & XD', value: 45 },
  { name: 'Dịch vụ', value: 43 }
];
const COLORS = ['#4CAF50', '#C41E3A', '#D4A84B'];

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

        {/* Charts Section */}
        <div style={{marginTop: '60px', display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'space-between'}}>
          <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} style={{flex: '1 1 500px', background: 'var(--ink-light)', padding: '20px', borderRadius: '16px', boxShadow: 'var(--shadow-md)'}}>
            <h3 style={{color: 'var(--cream)', marginBottom: '20px', textAlign: 'center'}}>Tăng trưởng GDP (Tỷ USD)</h3>
            <div style={{height: 300}}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={gdpData} margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#4A4A5A" />
                  <XAxis dataKey="year" stroke="#A0A0A0" />
                  <YAxis stroke="#A0A0A0" />
                  <Tooltip contentStyle={{backgroundColor: '#1A1A2E', borderColor: '#4A4A5A'}} />
                  <Legend />
                  <Line type="monotone" dataKey="gdp" name="GDP" stroke="var(--gold-primary)" strokeWidth={3} activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} style={{flex: '1 1 400px', background: 'var(--ink-light)', padding: '20px', borderRadius: '16px', boxShadow: 'var(--shadow-md)'}}>
            <h3 style={{color: 'var(--cream)', marginBottom: '20px', textAlign: 'center'}}>Cơ cấu GDP (%)</h3>
            <div style={{height: 300}}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={exportData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    fill="#8884d8"
                    paddingAngle={5}
                    dataKey="value"
                    label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {exportData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{backgroundColor: '#1A1A2E', borderColor: '#4A4A5A', color: '#fff'}} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        <div className="achievement-row" style={{marginTop: '60px'}}>
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