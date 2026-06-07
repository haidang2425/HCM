# 📸 Hướng Dẫn Tìm Kiếm Hình Ảnh cho Bảo Tàng Số

Hãy tải hình ảnh từ các nguồn tự do (free) dưới đây và đặt vào folder `public/images/`

## 🔗 Nguồn Hình Ảnh Được Khuyến Khích

### Wikimedia Commons (Free Use)
- **URL:** https://commons.wikimedia.org/
- **Tìm:** Gõ tên theo các hướng dẫn dưới, download hình `.jpg` có kích thước lớn (1200px+)

### Wikipedia Images
- **URL:** https://en.wikipedia.org/ hoặc https://vi.wikipedia.org/
- **Các bài viết liên quan:**
  - [Ho Chi Minh](https://en.wikipedia.org/wiki/Ho_Chi_Minh)
  - [Hồ Chí Minh (VI)](https://vi.wikipedia.org/wiki/H%E1%BB%93_Ch%C3%AD_Minh)

### Báo Việt & Tư Liệu Công Cộng
- **Báo Nhân Dân:** https://nhandan.vn (tìm ảnh lịch sử Bác Hồ)
- **Báo Lao Động:** https://laodong.vn
- **TTXVN:** https://www.ttxvn.com.vn

---

## 📋 Danh Sách Hình Ảnh Cần Tìm & Tên File

| ID | Phòng | Tên File | Mô Tả Cần Tìm | Gợi Ý URL |
|--|--|--|--|--|
| 0 | Sảnh Chính | `entrance.jpg` | Logo Bảo tàng Hồ Chí Minh hoặc Quảng trường Ba Đình | [Lăng HCM](https://commons.wikimedia.org/wiki/Ho_Chi_Minh_Mausoleum) |
| 1 | Khởi nguồn | `room-1-origins.jpg` | Nguyễn Sinh Cung tuổi trẻ (1890-1906) hoặc quê hương Nghệ An | Tìm "Ho Chi Minh young" hoặc "Nghệ An province" |
| 2 | Tìm đường cứu nước | `room-2-journey.jpg` | Nguyễn Ái Quốc ở Pháp (1919-1930) hoặc Hội nghị Tours 1920 | [Comintern Congress](https://commons.wikimedia.org/wiki/3rd_World_Congress_of_the_Comintern) |
| 3 | Độc lập | `room-3-independence.jpg` | Quảng trường Ba Đình 2/9/1945 hoặc tuyên ngôn độc lập được đọc | [Ba Dinh Declaration](https://commons.wikimedia.org/wiki/Ba_Dinh_Declaration_of_Independence) |
| 4 | Nhà nước của dân | `room-4-state.jpg` | Hồ Chí Minh làm việc với dân (1945-1950) hoặc Quốc hội VN | Tìm "Ho Chi Minh President" + "1945-1950" |
| 5 | Đạo đức cách mạng | `room-5-morality.jpg` | Hồ Chí Minh tuổi cao niên (1950s-1960s) gặp gỡ dân hoặc cán bộ | Tìm "Ho Chi Minh moral" hoặc "Ho Chi Minh 1950s" |
| 6 | Lợi ích nhân dân | `room-6-people.jpg` | Hồ Chí Minh với nhân dân, trẻ em, nông dân (1950s-1960s) | Tìm "Ho Chi Minh with people" |
| 7 | Việt Nam hôm nay | `room-7-modern-vietnam.jpg` | Thành phố Việt Nam hiện đại, skyline Hà Nội/TP.HCM | Tìm "Hanoi skyline" hoặc "Ho Chi Minh City modern" |
| 8 | Thế hệ trẻ | `room-8-youth.jpg` | Thanh niên Việt Nam, sinh viên, hoạt động xã hội | Tìm "Vietnam youth" hoặc "Vietnamese students" |
| 9 | Tri ân | `room-9-tribute.jpg` | Lăng Hồ Chí Minh, Quảng trường Ba Đình, hoặc Di tích Kim Liên | [Ho Chi Minh Mausoleum](https://commons.wikimedia.org/wiki/Ho_Chi_Minh_Mausoleum) |

---

## 🎯 Hướng Dẫn Chi Tiết - Ví Dụ

### Cách tìm trên Wikimedia Commons:

1. **Vào:** https://commons.wikimedia.org/
2. **Tìm kiếm:** (ví dụ) "Ho Chi Minh 1945" hoặc "Ba Dinh Square"
3. **Chọn hình** có chất lượng tốt, kích thước lớn, không bị dấu nước
4. **Download:** Click phải → "Save image as" → lưu vào `d:\HCM\public\images\`
5. **Đổi tên** thành tên file đúng từ bảng trên (ví dụ: `room-3-independence.jpg`)

### Cách tìm từ Wikipedia:

1. **Tìm bài viết** về Hồ Chí Minh hoặc sự kiện lịch sử
2. **Scroll xuống** phần "Infobox" hoặc "Gallery"
3. **Click vào hình** → màn hình phóng to
4. **Click phải vào hình** → "Save image as"
5. **Tên file** phải trùng khớp với bảng trên

---

## 📐 Yêu Cầu Hình Ảnh

- **Kích thước:** Tối thiểu 1200px rộng (để responsive tốt)
- **Format:** `.jpg` hoặc `.png` (`.jpg` tốt hơn về file size)
- **Chất lượng:** Rõ ràng, không mờ, không bị dấu nước
- **Nội dung:** Phù hợp với chủ đề phòng, có lịch sử, có thông tin

---

## ✅ Kiểm Tra Lại

Sau khi tải xong 9 hình, kiểm tra folder `public/images/`:

```
d:\HCM\public\images\
├── entrance.jpg
├── room-1-origins.jpg
├── room-2-journey.jpg
├── room-3-independence.jpg
├── room-4-state.jpg
├── room-5-morality.jpg
├── room-6-people.jpg
├── room-7-modern-vietnam.jpg
├── room-8-youth.jpg
└── room-9-tribute.jpg
```

Khi chạy `npm run dev`, bảo tàng sẽ tự động hiển thị hình ảnh!

---

## 🤔 Giải Thích Lựa Chọn Wikimedia Commons

✅ **Lợi ích:**
- Hoàn toàn miễn phí, hợp pháp
- Không cần xin phép (hầu hết CC BY-SA)
- Hình chất lượng cao
- Có thông tin tác giả, nguồn gốc rõ ràng

❌ **Tránh:**
- Không sử dụng hình từ Google Images trực tiếp (vi phạm bản quyền)
- Không hotlink từ các website (chậm, không ổn định)
- Không sử dụng ảnh chưa xin phép

---

## 💡 Mẹo Tìm Kiếm

1. **Tìm tiếng Anh** cho kết quả tốt hơn: "Ho Chi Minh" thay vì "Hồ Chí Minh"
2. **Thêm năm** để lọc chính xác: "Ho Chi Minh 1945" hoặc "Ba Dinh 1945"
3. **Tìm "Black and white"** nếu muốn ảnh lịch sử cũ
4. **Dùng "Comintern"** để tìm ảnh Nguyễn Ái Quốc ở Liên Xô/Pháp

---

Chúc bạn tìm được các hình ảnh tuyệt vời! 🎨✨
