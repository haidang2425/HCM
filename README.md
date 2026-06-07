# Bảo Tàng Số - Tư Tưởng Hồ Chí Minh

**Digital Museum of Ho Chi Minh Thought**

> Dự án môn học: **Đạo đức cách mạng và Tư tưởng Hồ Chí Minh**
> Trường Đại học Công nghệ Thông tin (UIT)

🌐 **Live Demo:** [https://hcm-blue-psi.vercel.app/#/](https://hcm-blue-psi.vercel.app/#/)

---

## Mục lục

1. [Giới thiệu](#giới-thiệu)
2. [Tính năng chính](#tính-năng-chính)
3. [Tech Stack](#tech-stack)
4. [Cấu trúc dự án](#cấu-trúc-dự-án)
5. [Yêu cầu hệ thống](#yêu-cầu-hệ-thống)
6. [Hướng dẫn cài đặt](#hướng-dẫn-cài-đặt)
7. [Hướng dẫn chạy thử](#hướng-dẫn-chạy-thử)
8. [Hướng dẫn sử dụng](#hướng-dẫn-sử-dụng)
9. [Deploy](#deploy)
10. [Scripts Python](#scripts-python)
11. [Ghi chú kỹ thuật](#ghi-chú-kỹ-thuật)

---

## Giới thiệu

Đây là sản phẩm **Bảo tàng Số tương tác** về cuộc đời, sự nghiệp và tư tưởng của Chủ tịch Hồ Chí Minh. Xây dựng bằng React + Vite, chạy trực tiếp trên trình duyệt mà không cần máy chủ riêng.

**Mục tiêu:** Khi giảng viên quét QR code trên poster, người dùng bước vào một bảo tàng số, khám phá lịch sử, hiểu tư tưởng Hồ Chí Minh, trải nghiệm các khu triển lãm, tham gia quiz và nhận chứng nhận hoàn thành.

---

## Tính năng chính

| STT | Tính năng | Mô tả |
|-----|-----------|-------|
| 1 | **10 phòng triển lãm** | 10 khu vực tương ứng với hành trình cuộc đời Bác Hồ |
| 2 | **Dòng thời gian** | Các mốc son lịch sử từ 1911 đến nay, click để xem chi tiết |
| 3 | **Bản đồ Việt Nam** | SVG bản đồ tương tác, hover vào địa danh để xem thông tin |
| 4 | **Dashboard thành tựu** | 6 chỉ số kinh tế-xã hội + 4 achievement counter |
| 5 | **Quiz 30 câu** | 3 cấp độ: Cơ bản (10 câu), Trung bình (10 câu), Nâng cao (10 câu) |
| 6 | **Chứng nhận hoàn thành** | Nhập họ tên, xuất file PDF và PNG |
| 7 | **Thiết kế responsive** | Hiển thị đẹp trên máy bàn, tablet, điện thoại |
| 8 | **Animation** | Chuyển cảnh mượt mà, hiệu ứng scroll, hover |

---

## Tech Stack

| Công nghệ | Phiên bản | Mục đích |
|-----------|-----------|----------|
| React | 19 | Framework chính |
| Vite | 8.0 | Build tool, dev server |
| React Router | 7 | Điều hướng (HashRouter) |
| Framer Motion | 12 | Animation, page transition |
| Recharts | 3 | Biểu đồ Dashboard |
| html2canvas | 1.4 | Chụp certificate sang PNG |
| jsPDF | 4 | Tạo file PDF certificate |
| CSS Variables | — | Design system, theme |

---

## Cấu trúc dự án

```
HCM/
├── index.html               # File HTML chính
├── package.json             # Config dự án, dependencies
├── vite.config.js           # Config Vite
├── eslint.config.js         # Config ESLint
├── .gitignore               # Bỏ qua khi push git
├── README.md                # File hướng dẫn
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── main.jsx             # Điểm vào React app
│   ├── App.jsx              # Router + Layout
│   ├── index.css            # Design system (CSS variables)
│   ├── App.css              # Component styles
│   │
│   ├── data/
│   │   ├── roomContent.js   # 10 phòng triển lãm
│   │   ├── quizData.js      # 30 câu hỏi
│   │   ├── timelineData.js  # 10 mốc lịch sử
│   │   └── dashboardData.js # Số liệu thành tựu
│   │
│   └── components/
│       ├── Navbar.jsx       # Thanh điều hướng
│       ├── Hero.jsx         # Trang chủ fullscreen
│       ├── RoomList.jsx     # Danh sách phòng
│       ├── RoomCard.jsx     # Card từng phòng
│       ├── RoomDetail.jsx   # Chi tiết phòng
│       ├── Timeline.jsx     # Dòng thời gian
│       ├── VietnamMap.jsx   # Bản đồ SVG
│       ├── Dashboard.jsx    # Thống kê thành tựu
│       ├── Quiz.jsx         # Bài kiểm tra
│       ├── Certificate.jsx  # Chứng nhận hoàn thành
│       └── Footer.jsx       # Chân trang
│
├── Data/                    # Dữ liệu nguồn (txt, pdf)
│
├── dist/                    # Sản phẩm build (tự sinh, không commit)
│
├── gen_data.py              # Script tạo dữ liệu
├── build_part1.py           # Script build phần 1
└── generate_qr.py           # Script tạo QR code
```

---

## Yêu cầu hệ thống

| Yêu cầu | Phiên bản tối thiểu |
|---------|---------------------|
| Node.js | 18+ (khuyến dùng 20 LTS) |
| npm | 9+ |
| Python | 3.8+ (nếu dùng scripts) |
| Trình duyệt | Chrome / Firefox / Edge / Safari hiện đại |

**Kiểm tra:**
```bash
node --version   # v18.x.x trở lên
npm --version    # 9.x.x trở lên
```

---

## Hướng dẫn cài đặt

### Bước 1: Clone repository

```bash
git clone https://github.com/<username>/HCM.git
cd HCM
```

Hoặc nếu đã có source code, mở Terminal tại thư mục dự án.

### Bước 2: Cài đặt thư viện

```bash
npm install
```

> **Nếu gặp lỗi:** Xóa cache rồi cài lại:
> ```bash
> # Windows
> rmdir /s /q node_modules
> del package-lock.json
> npm install
>
> # Mac/Linux
> rm -rf node_modules package-lock.json
> npm install
> ```

---

## Hướng dẫn chạy thử

### Dev Server (khuyến dùng)

```bash
npm run dev
```

Mở trình duyệt tại `http://localhost:5173/`

### Build production

```bash
npm run build
```

Tạo folder `dist/` chứa toàn bộ file tĩnh.

### Preview bản build

```bash
npm run preview
```

Xem bản build tại `http://localhost:4173/`

### Lint code

```bash
npm run lint
```

---

## Hướng dẫn sử dụng

### Trang chủ (Hero)
- Hình ảnh mở đầu fullscreen
- Bấm **"Bắt đầu hành trình"** để vào khu triển lãm
- Bấm **"Dòng thời gian"** để xem timeline

### Khu triển lãm (10 phòng)
- Gallery card hiển thị tất cả phòng
- Bấm **"Khám phá"** vào từng phòng
- Trong phòng: đọc nội dung, xem câu trích dẫn
- Bấm **"Phòng trước"** / **"Phòng tiếp"** để chuyển
- Phòng cuối cùng: nút **"Làm bài Quiz"**

### Dòng thời gian
- 10 mốc sự kiện từ 1911 đến 2025
- **Click** vào từng mốc để mở/đóng chi tiết

### Bản đồ tương tác
- SVG bản đồ Việt Nam
- **Hover** vào các địa danh để xem thông tin popup

### Dashboard thành tựu
- 6 chỉ số: GDP, tỉ lệ biết chữ, kỹ sư CNTT, công bố quốc tế, người dùng Internet, khách quốc tế
- 4 achievement: Di sản văn hóa, Trường đại học, Bệnh viện, Khu công nghiệp

### Quiz
- 30 câu hỏi về tư tưởng Hồ Chí Minh
- 3 cấp độ: Cơ bản (xanh), Trung bình (cam), Nâng cao (đỏ)
- Sau câu cuối: bấm **"Xem kết quả"**
- Kết quả: điểm số, phần trăm, xếp loại A–D

### Chứng nhận hoàn thành
- Nhập **Họ tên** vào ô input
- Bấm **"Tạo chứng nhận"**
- Bấm **"Download PNG"** hoặc **"Download PDF"** để tải về

---

## Deploy

### Vercel (đang dùng — nhanh nhất)

```bash
npm install -g vercel
vercel
```

Tự động nhận diện Vite project, deploy xong có link ngay.

### GitHub Pages

```bash
npm run build
npx gh-pages -d dist
```

Truy cập: `https://<username>.github.io/<repo-name>/`

### Netlify (kéo thả)

1. Build: `npm run build`
2. Kéo folder `dist/` vào [netlify.com/drop](https://app.netlify.com/drop)

---

## Scripts Python

### `generate_qr.py` — Tạo QR Code

Tạo QR code trỏ tới trang web live demo.

**Cài thư viện:**
```bash
pip install qrcode[pil]
```

**Chạy:**
```bash
python generate_qr.py
```

Output: `qr_code.png` trong cùng thư mục.

### `gen_data.py` — Tạo dữ liệu

Script xử lý dữ liệu từ folder `Data/`.

### `build_part1.py` — Build phần 1

Script hỗ trợ build nội dung.

---

## Ghi chú kỹ thuật

### Tại sao dùng HashRouter?
Dùng `HashRouter` (đường dẫn có `/#/`) thay vì `BrowserRouter` để deploy lên GitHub Pages và Netlify không bị lỗi 404 khi load trang.

### Thêm nội dung phòng
Mở file `src/data/roomContent.js`, mỗi phòng là một object:
```js
{
  id: 0,          // Số thứ tự (0–9)
  title: "",      // Tên phòng
  subtitle: "",   // Mô tả phụ
  desc: "",       // Nội dung chính
  quote: "",      // Câu trích dẫn (có thể để trống)
  year: ""        // Mốc thời gian
}
```

### Thêm câu hỏi quiz
Mở file `src/data/quizData.js`, thêm object:
```js
{
  id: 31,
  level: "Cơ bản",   // "Cơ bản" | "Trung bình" | "Nâng cao"
  question: "Câu hỏi mới?",
  options: ["A", "B", "C", "D"],
  answer: 0           // Index của đáp án đúng (0=A, 1=B, 2=C, 3=D)
}
```

### Lỗi thường gặp

| Lỗi | Nguyên nhân | Cách khắc phục |
|-----|-------------|----------------|
| `npm install` bị lỗi | Mạng yếu, Node cũ | Kiểm tra mạng, cập nhật Node.js |
| Trang web trắng | Chưa chạy dev server | Chạy `npm run dev` |
| Certificate không tải | Liên quan CORS | Chạy bằng `npm run dev` |
| GitHub Pages trắng | Quên chạy deploy | Chạy `npx gh-pages -d dist` |
| 404 khi deploy | Sai route config | Dùng HashRouter (đã cấu hình sẵn) |

---

**Trạng thái:** Hoàn thành ✓
**Deployed tại:** [https://hcm-blue-psi.vercel.app/#/](https://hcm-blue-psi.vercel.app/#/)
