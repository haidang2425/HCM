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
            <a href="/#/rooms">Phòng triển lãm</a>
            <a href="/#/timeline">Dòng thời gian</a>
            <a href="/#/map">Bản đồ tương tác</a>
            <a href="/#/quiz">Bài kiểm tra</a>
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