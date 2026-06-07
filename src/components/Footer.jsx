import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <h3>Bảo tàng Số</h3>
            <p>Dự án môn học Đạo đức cách mạng và Tư tưởng Hồ Chí Minh</p>
          </div>
          <div className="footer-links">
            <h4>Khám phá</h4>
            <Link to="/rooms">Phòng triển lãm</Link>
            <Link to="/timeline">Dòng thời gian</Link>
            <Link to="/map">Bản đồ tương tác</Link>
            <Link to="/quiz">Bài kiểm tra</Link>
          </div>
          <div className="footer-quote">
            <blockquote>"Không có gì quý hơn độc lập tự do"</blockquote>
            <cite>- Hồ Chí Minh</cite>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 - Bảo tàng Số Tư tưởng Hồ Chí Minh | Dự án sinh viên</p>
        </div>
      </div>
    </footer>
  );
}