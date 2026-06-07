import { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';
export default function Certificate() {
  const [params] = useSearchParams();
  const score = params.get('score') || '0';
  const total = params.get('total') || '30';
  const [name, setName] = useState('');
  const [generated, setGenerated] = useState(false);
  const pct = Math.round((parseInt(score)/parseInt(total))*100);
  const today = new Date().toLocaleDateString('vi-VN');
  const handleGenerate = () => {
    if (!name.trim()) return alert('Vui lòng nhập họ tên!');
    setGenerated(true);
  };
  const handleDownload = () => {
    const el = document.getElementById('certificate-content');
    if (!el) return;
    import('html2canvas').then(html2canvas => {
      html2canvas.default(el).then(canvas => {
        const link = document.createElement('a');
        link.download = 'Chung-nhan-' + name + '.png';
        link.href = canvas.toDataURL();
        link.click();
      });
    });
  };
  const handleDownloadPDF = () => {
    const el = document.getElementById('certificate-content');
    if (!el) return;
    import('html2canvas').then(html2canvas => {
      html2canvas.default(el).then(canvas => {
        import('jspdf').then(jsPDF => {
          const { default: JsPDF } = jsPDF;
          const pdf = new JsPDF('landscape', 'mm', 'a4');
          const imgData = canvas.toDataURL('image/png');
          pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);
          pdf.save('Chung-nhan-' + name + '.pdf');
        });
      });
    });
  };
  if (!generated) {
    return (
      <motion.section initial={{opacity:0}} animate={{opacity:1}} className="section section-cream">
        <div className="container">
          <div className="cert-form">
            <h2 className="section-title">Nhận chứng nhận</h2>
            <p className="section-subtitle">Nhập họ tên để tạo chứng nhận hoàn thành</p>
            <div className="cert-score-display">
              <span>Điểm: {score}/{total} ({pct}%)</span>
            </div>
            <input type="text" className="cert-input" placeholder="Nhập họ tên của bạn" value={name} onChange={e => setName(e.target.value)} />
            <button className="btn btn-gold btn-lg mt-8" onClick={handleGenerate}>Tạo chứng nhận</button>
          </div>
        </div>
      </motion.section>
    );
  }
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1}} className="section section-cream">
      <div className="container text-center">
        <div id="certificate-content" className="certificate">
          <div className="cert-border">
            <div className="cert-header">
              <div className="cert-emblem">🇻🇳</div>
              <h1>CHỨNG NHẬN HOÀN THÀNH</h1>
              <p className="cert-sub">Bảo tàng Số - Tư tưởng Hồ Chí Minh</p>
            </div>
            <div className="cert-body">
              <p className="cert-label">Chứng nhận rằng</p>
              <h2 className="cert-name">{name}</h2>
              <p className="cert-label">đã hoàn thành hành trình khám phá</p>
              <p className="cert-course">Bảo tàng Số về Tư tưởng Hồ Chí Minh</p>
              <div className="cert-score-box">
                <span className="cert-score-label">Kết quả</span>
                <span className="cert-score-value">{score}/{total}</span>
                <span className="cert-pct">{pct}%</span>
              </div>
              <p className="cert-date">Ngày: {today}</p>
            </div>
            <div className="cert-footer-text">
              <p>"Học tập và làm theo tư tưởng, đạo đức, phong cách Hồ Chí Minh"</p>
            </div>
          </div>
        </div>
        <div className="cert-download-actions mt-8">
          <button className="btn btn-primary" onClick={handleDownload}>Download PNG</button>
          <button className="btn btn-gold" onClick={handleDownloadPDF}>Download PDF</button>
        </div>
      </div>
    </motion.section>
  );
}