# Bảo tàng Số - Tư tưởng Hồ Chí Minh

**Digital Museum of Ho Chi Minh Thought**

Dự án: **Xây dựng Bảo tàng số tương tác về Đạo đức cách mạng và Tư tưởng Hồ Chí Minh**

## 📖 Giới thiệu

Đây là sản phẩm **Bảo tàng Số tương tác** về cuộc đời, sự nghiệp và tư tưởng của Chủ tịch Hồ Chí Minh. Sản phẩm được xây dựng bằng React + Vite, mang đến trải nghiệm mượt mà, sống động ngay trên trình duyệt mà không cần cài đặt phần mềm.

## ✨ Tính năng nổi bật

- **10 phòng triển lãm:** 10 khu vực tương ứng với hành trình cuộc đời Bác.
- **Dòng thời gian (Timeline):** Các mốc son lịch sử từ 1911 đến nay.
- **Bản đồ tương tác:** Bản đồ Việt Nam SVG tương tác, xem chi tiết các địa danh.
- **Ngân hàng trắc nghiệm (Quiz):** Gần 1000 câu hỏi ôn tập chuyên sâu. Hỗ trợ tính năng tự động lọc câu sai, làm ngẫu nhiên, xem câu trước/sau.
- **Chứng nhận hoàn thành:** Nhập tên cá nhân, hệ thống xuất chứng chỉ đạt chuẩn định dạng PNG/PDF.
- **Dashboard số liệu:** Giao diện trực quan thống kê các chỉ số kinh tế - xã hội.
- **Giao diện đa thiết bị:** Responsive hoàn thiện, tự động thích ứng với Điện thoại, Tablet, Máy tính (tích hợp Dark/Light mode).

## 🚀 Hướng dẫn cài đặt cho người mới

Để lấy source code về máy và chạy, bạn cần cài đặt **[Node.js](https://nodejs.org/en/)** (bản 18 trở lên) và **[Git](https://git-scm.com/)**.

### Bước 1: Clone dự án về máy
Mở Terminal (hoặc Command Prompt / PowerShell ở thư mục muốn lưu) và chạy:
```bash
git clone <Đường-link-GitHub-của-bạn.git>
cd <Tên-thư-mục-vừa-clone>
```

### Bước 2: Cài đặt thư viện phụ thuộc
Chạy lệnh sau để tải toàn bộ các gói (packages) cần thiết:
```bash
npm install
```
*(Lưu ý: Nếu bị lỗi cài đặt, bạn có thể thử xóa file `package-lock.json` hoặc thư mục `node_modules` đi và chạy lại lệnh trên)*

### Bước 3: Khởi động Dev Server
```bash
npm run dev
```
Terminal sẽ hiển thị đường link local (thường là `http://localhost:5173/`). Hãy copy dán lên trình duyệt để trải nghiệm website.

## 📦 Build và Deploy lên Internet

### Cấu hình Build tĩnh (Production)
Nếu bạn muốn build website ra để chuẩn bị tải lên hosting:
```bash
npm run build
```
Hệ thống sẽ tạo ra thư mục `dist/`. Bạn có thể dùng lệnh `npm run preview` để kiểm tra thư mục này hoạt động có tốt không trước khi up lên mạng.

### Deploy cực nhanh qua Vercel (Miễn phí)
Trong máy của bạn cần cài đặt Vercel CLI.
```bash
npx vercel
```
Bấm `Y` và nhập theo các tùy chọn trên Terminal. Một đường dẫn `https://...vercel.app` trực tuyến sẽ được cấp phát ngay lập tức.

## 🛠️ Công nghệ (Tech Stack)

| Công nghệ | Version | Mục đích |
|-----------|---------|----------|
| **React** | 19 | Framework UI Chính |
| **Vite** | 8.0 | Build tool, Dev Server cực nhanh |
| **React Router** | 7 | Xử lý các đường dẫn |
| **Framer Motion**| 12 | Xử lý hoạt ảnh (Animation) siêu mượt |
| **html2canvas** | 1.4 | Render chứng nhận (chụp ảnh màn hình ra PNG) |
| **jsPDF** | 3.0 | Hỗ trợ xuất file định dạng PDF |
| **CSS thuần** | - | Styling hệ thống, thiết kế theo chuẩn CSS Variables |

---
