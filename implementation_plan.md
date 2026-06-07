# 🏛️ Kế hoạch Nâng cấp Premium - Bảo tàng Số Tư tưởng HCM

## Bối cảnh

- **Deadline**: Tối nay (07/06/2026)
- **Phạm vi**: Premium Upgrade toàn diện
- **Chiến lược**: Phân 2 pha – **Phase 1 (tối nay)** tập trung tính năng có impact cao nhất, **Phase 2 (sau nộp)** hoàn thiện TypeScript, i18n, PWA

> [!IMPORTANT]
> Vì deadline rất gấp, Phase 1 giữ nguyên JSX (không migrate TypeScript) để tối ưu thời gian. TypeScript migration sẽ nằm ở Phase 2 sau khi nộp bài.

---

## User Requirements Summary

| Yêu cầu | Quyết định |
|----------|-----------|
| Quiz bank | Dùng **tất cả 975 câu**, random 30 câu/lần, lọc theo chương + cấp độ |
| Certificate | Điều kiện tối thiểu **≥50%** |
| Phong cách | Giữ nguyên "bảo tàng cổ điển", hào hùng lịch sử |
| Ảnh | Tạo folder riêng `public/images/`, user tải ảnh web về đặt vào |
| Âm thanh | Tạo folder `public/audio/`, có fallback nếu không có file |
| Gamification | Không |
| Deploy | GitHub Pages |
| TypeScript | Có (Phase 2) |
| i18n | Có – Việt + Anh (Phase 2) |
| Unit tests | Không |
| Lỗi chữ | "chiến công hiển hách" + "di sản bất diệt" |

---

## Phase 1: Tối nay – Maximum Impact 🔥

### Mô-đun 1: Chuẩn bị cấu trúc & Fix lỗi cơ bản

---

#### [NEW] Thư mục ảnh và âm thanh

Tạo cấu trúc thư mục:
```
public/
├── images/
│   ├── rooms/          ← 10 ảnh phòng triển lãm (user tải về)
│   ├── timeline/       ← Ảnh cho dòng thời gian
│   └── hero/           ← Ảnh hero background
├── audio/
│   └── (user thêm file nhạc .mp3 vào đây)
└── ...
```

Tạo file `public/images/README.md` hướng dẫn user đặt ảnh.

#### [MODIFY] [Hero.jsx](file:///c:/Documents/Project/HCM/src/components/Hero.jsx)
- Sửa "chiến công kinh hoàng" → "chiến công hiển hách"
- Sửa "di sản bất bại" → "di sản bất diệt"
- Thêm hiệu ứng particles thực (animated floating particles)
- Thêm gradient overlay mạnh hơn

#### [MODIFY] [Footer.jsx](file:///c:/Documents/Project/HCM/src/components/Footer.jsx)
- Đổi `<a href="/#/...">` → `<Link to="...">` (React Router)

#### [MODIFY] [App.jsx](file:///c:/Documents/Project/HCM/src/App.jsx)
- Thêm `ScrollToTop` component (scroll về đầu trang khi chuyển route)
- Thêm `AudioProvider` context cho nhạc nền
- Thêm route cho Theory, QuizBank (trang quiz mới)
- Lazy loading components với `React.lazy` + `Suspense`

---

### Mô-đun 2: Quiz nâng cao (975 câu)

---

#### [NEW] `src/components/QuizBank.jsx`
Trang quiz mới sử dụng toàn bộ 975 câu từ `hcm_quiz_verified_public.json`:

- **Màn hình Setup**: Chọn chương (7 chương + "Tất cả"), chọn số câu (10/20/30/50), chọn cấp độ (Dễ/Trung bình/Khó/Tất cả)
- **Random engine**: Trộn câu hỏi theo filter, random không trùng
- **Quiz flow**: Giống Quiz hiện tại nhưng nâng cấp:
  - Hiển thị `explanation_short` sau khi trả lời
  - Hiển thị `option_feedback` cho từng lựa chọn
  - Badge chương (color-coded)
  - Nút "Lưu câu sai" → localStorage
- **Kết quả**: Điểm, phần trăm, breakdown theo chương, thời gian làm bài
- **Certificate**: Chỉ hiển thị nút "Nhận chứng nhận" khi ≥50%

#### [NEW] `src/components/ReviewWrong.jsx`
Trang ôn lại câu sai:
- Load câu sai từ localStorage
- Cho phép luyện lại
- Nút xóa câu đã thuộc

#### [MODIFY] [Certificate.jsx](file:///c:/Documents/Project/HCM/src/components/Certificate.jsx)
- Kiểm tra điều kiện ≥50% trước khi cho tạo chứng nhận
- Hiển thị thông báo nếu chưa đủ điều kiện

---

### Mô-đun 3: Trang Lý thuyết (6 chương)

---

#### [NEW] `src/data/theoryData.js`
Parse nội dung từ `hcm_theory_content.md` thành JS data structure:
- 6 chương, mỗi chương có nhiều lessons
- Mỗi lesson có: summary, keyPoints, details, flashcards, reviewQuestions

#### [NEW] `src/components/Theory.jsx`
Trang lý thuyết chính:
- **Sidebar** mục lục 6 chương (collapsible, sticky)
- **Content area** hiển thị nội dung bài học
- **Flashcards** component (flip animation)
- **"Đọc thêm"** cards từ `hcm_media_manifest.json`
- **Nút "Làm quiz chương này"** → link đến QuizBank với filter sẵn

#### [NEW] `src/components/TheoryChapter.jsx`
Chi tiết chương:
- Lesson cards
- Key points highlighted
- Bảng tổng ôn nhanh
- Mốc thời gian (nếu chương 2)

---

### Mô-đun 4: Bản đồ Việt Nam cải tiến

---

#### [MODIFY] [VietnamMap.jsx](file:///c:/Documents/Project/HCM/src/components/VietnamMap.jsx)
- Thay SVG vẽ tay bằng **SVG Việt Nam chính xác** (simplified path data)
- Thêm nhiều địa danh hơn (Huế, Pác Bó, Kim Liên, Sài Gòn...)
- Tooltip hiển thị **tại vị trí hover** (không phải dưới map)
- Mỗi địa danh có icon và mô tả lịch sử
- Animation pulse cho các điểm đánh dấu

---

### Mô-đun 5: Dashboard có biểu đồ

---

#### [MODIFY] [Dashboard.jsx](file:///c:/Documents/Project/HCM/src/components/Dashboard.jsx)
- Tích hợp **Recharts** (đã cài sẵn):
  - BarChart cho GDP qua các năm
  - PieChart cho phân bổ ngành
  - LineChart cho tỷ lệ biết chữ theo thời gian
- Animated number counting (scroll into view → count up)
- Cards có gradient border và glow effect

---

### Mô-đun 6: Ảnh phòng triển lãm & Fallback

---

#### [MODIFY] [roomContent.js](file:///c:/Documents/Project/HCM/src/data/roomContent.js)
- Đổi image paths từ `/images/room-*.jpg` → `/images/rooms/room-0.jpg`, `/images/rooms/room-1.jpg`...
- Thêm `fallbackGradient` cho mỗi phòng (gradient đẹp nếu không có ảnh)
- Thêm `fallbackIcon` (emoji lớn)

#### [MODIFY] [RoomDetail.jsx](file:///c:/Documents/Project/HCM/src/components/RoomDetail.jsx)
- Khi ảnh lỗi: hiển thị **gradient placeholder đẹp** + icon + title thay vì ẩn
- Thêm breadcrumb: Trang chủ > Phòng triển lãm > Phòng X

#### [MODIFY] [RoomCard.jsx](file:///c:/Documents/Project/HCM/src/components/RoomCard.jsx)
- Thêm ảnh thumbnail (nếu có) hoặc gradient đẹp hơn

---

### Mô-đun 7: Nhạc nền & Audio

---

#### [NEW] `src/components/AudioPlayer.jsx`
- Nút play/pause nhạc nền (fixed bottom-right)
- Auto-detect file trong `/audio/` hoặc hardcode list
- **Fallback**: Nếu không có file audio → ẩn player hoàn toàn
- Volume control
- Persist mute state trong localStorage

---

### Mô-đun 8: UI/UX Polish

---

#### [MODIFY] [index.css](file:///c:/Documents/Project/HCM/src/index.css)
- Thêm CSS cho Theory, QuizBank, ReviewWrong, AudioPlayer
- Thêm @keyframes cho particles, counting, flashcard flip

#### [MODIFY] [App.css](file:///c:/Documents/Project/HCM/src/App.css)
- CSS cho bản đồ mới
- Dashboard charts styling
- Breadcrumb styling
- Loading skeleton
- Improved responsive breakpoints
- Dark mode toggle button styling

#### [NEW] `src/components/ScrollToTop.jsx`
- Scroll về đầu trang khi route thay đổi

#### [NEW] `src/components/Loading.jsx`
- Loading spinner / skeleton component

#### [MODIFY] [Navbar.jsx](file:///c:/Documents/Project/HCM/src/components/Navbar.jsx)
- Thêm link "Lý thuyết" và "Ngân hàng đề" vào navigation
- Thêm dark mode toggle button
- Thêm audio toggle button

---

### Mô-đun 9: Dark Mode

---

#### [MODIFY] [index.css](file:///c:/Documents/Project/HCM/src/index.css)
- Thêm `[data-theme="dark"]` CSS variables
- Dark theme: nền tối, chữ sáng, giữ accent colors (đỏ-vàng)

#### [NEW] `src/hooks/useTheme.js`
- Custom hook quản lý dark/light mode
- Persist vào localStorage
- Detect system preference

---

### Mô-đun 10: Search

---

#### [NEW] `src/components/SearchModal.jsx`
- Modal tìm kiếm (Ctrl+K hoặc click icon)
- Tìm kiếm trong: rooms, quiz, theory content
- Hiển thị kết quả nhóm theo loại
- Click → navigate đến trang tương ứng

---

## Phase 2: Sau nộp bài (tuần sau)

| Tính năng | Mô tả |
|-----------|-------|
| **TypeScript migration** | Chuyển tất cả `.jsx` → `.tsx`, thêm type definitions |
| **i18n (Việt + Anh)** | Dùng react-i18next, tạo file dịch `vi.json` + `en.json` |
| **PWA offline** | Service worker, manifest.json, offline caching |
| **Code splitting** | Dynamic imports cho routes và data files lớn |
| **Error Boundary** | React Error Boundary cho từng route |
| **Performance** | Lazy load 3.6MB quiz JSON, virtual scrolling cho review |

---

## Proposed Changes – File Summary

### New Files (Phase 1)
| File | Mô tả |
|------|-------|
| `public/images/rooms/README.md` | Hướng dẫn đặt ảnh phòng |
| `public/audio/README.md` | Hướng dẫn đặt file nhạc |
| `src/components/QuizBank.jsx` | Quiz nâng cao 975 câu |
| `src/components/ReviewWrong.jsx` | Ôn lại câu sai |
| `src/components/Theory.jsx` | Trang lý thuyết 6 chương |
| `src/components/TheoryChapter.jsx` | Chi tiết chương lý thuyết |
| `src/components/AudioPlayer.jsx` | Nhạc nền player |
| `src/components/ScrollToTop.jsx` | Auto scroll top |
| `src/components/Loading.jsx` | Loading states |
| `src/components/SearchModal.jsx` | Tìm kiếm toàn trang |
| `src/data/theoryData.js` | Dữ liệu lý thuyết parsed |
| `src/hooks/useTheme.js` | Dark mode hook |

### Modified Files (Phase 1)
| File | Thay đổi chính |
|------|---------------|
| `src/App.jsx` | Routes mới, ScrollToTop, lazy loading, AudioProvider |
| `src/index.css` | Dark mode vars, new component styles |
| `src/App.css` | Map, dashboard charts, breadcrumb, skeleton, flashcard |
| `src/components/Hero.jsx` | Fix text, particles, background |
| `src/components/Footer.jsx` | `<a>` → `<Link>` |
| `src/components/Navbar.jsx` | Links mới, dark mode toggle |
| `src/components/VietnamMap.jsx` | SVG chính xác, tooltip tại chỗ |
| `src/components/Dashboard.jsx` | Recharts integration |
| `src/components/Certificate.jsx` | Điều kiện ≥50% |
| `src/components/RoomDetail.jsx` | Gradient fallback, breadcrumb |
| `src/components/RoomCard.jsx` | Thumbnail/gradient |
| `src/data/roomContent.js` | Image paths mới, fallback data |

---

## Verification Plan

### Manual Verification
1. `npm run dev` → kiểm tra tất cả routes hoạt động
2. Test quiz: chọn chương, random 30 câu, kiểm tra feedback
3. Test certificate: thử với <50% (phải bị chặn) và ≥50% (được tạo)
4. Test responsive: mobile, tablet, desktop
5. Test dark mode toggle
6. Test audio player (có/không file audio)
7. Test bản đồ hover tooltip
8. Test search modal
9. `npm run build` → deploy GitHub Pages

### Build Verification
```bash
npm run build
npm run preview
```

---

## Thứ tự thực hiện

1. ⬜ Tạo folder cấu trúc (images, audio)
2. ⬜ Fix lỗi cơ bản (Hero text, Footer links, ScrollToTop)
3. ⬜ Dark mode (CSS vars + hook)
4. ⬜ Theory page (data + components)
5. ⬜ QuizBank (975 câu, random, filter)
6. ⬜ ReviewWrong (localStorage)
7. ⬜ Certificate update (≥50%)
8. ⬜ Vietnam Map cải tiến
9. ⬜ Dashboard + Recharts
10. ⬜ Room image fallbacks
11. ⬜ Audio player
12. ⬜ Search modal
13. ⬜ App routing update
14. ⬜ Navbar update
15. ⬜ CSS polish & responsive
16. ⬜ Build & test
