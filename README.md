# Bao tang So - Tu tuong Ho Chi Minh

**Digital Museum of Ho Chi Minh Thought**

Du an mon hoc: **Dao duc cach mang va Tu tuong Ho Chi Minh**
Truong Dai hoc Cong nghe Thong tin (UIT)

---

## Muc luc

1. [Gioi thieu](#gioi-thieu)
2. [Tinh nang chinh](#tinh-nang-chinh)
3. [Yeu cau he thong](#yeu-cau-he-thong)
4. [Huong dan cai dat](#huong-dan-cai-dat)
5. [Huong dan chay thu](#huong-dan-chay-thu)
6. [Huong dung](#huong-dung)
7. [Cau truc du an](#cau-truc-du-an)
8. [Huong dan deploy mien phi](#huong-dan-deploy-mien-phi)
9. [Tech stack](#tech-stack)
10. [Ghi chu](#ghi-chu)

---

## Gioi thieu

Day la san pham **Bao tang So tuong tac** ve cuoc doi, su nghiep va tu tuong cua Chu tich Ho Chi Minh.
San pham duoc xay dung bang React + Vite, co the chay truc tiep trinh duyet ma khong can may chu.

**Muc tieu:** Khi giang vien quet QR code tren poster, buoc vao mot bao tang so, kham pha lich su,
hieu tu tuong Ho Chi Minh, trai nghiem cac khu trien lam, tham gia quiz va nhan chung nhan hoan thanh.

---

## Tinh nang chinh

| STT | Tinh nang | Mo ta |
|-----|-----------|-------|
| 1 | **10 phong trien lam** | 10 khu vuc tuong ung voi hanh trinh cuoc doi Bac Ho |
| 2 | **Dong thoi gian** | Cac moc son lich su tu 1911 den nay, click de xem chi tiet |
| 3 | **Ban do Viet Nam** | SVG ban do tuong tac, hover vao dia danh de xem thong tin |
| 4 | **Dashboard thanh tuu** | 6 chi so kinh te-xa hoi + 4 achievement counter |
| 5 | **Quiz 30 cau** | 3 cap do: Co ban (10 cau), Trung binh (10 cau), Nang cao (10 cau) |
| 6 | **Chung nhan hoan thanh** | Nhap ho ten, xuat file PDF va PNG |
| 7 | **Thiet ke responsive** | Hien thi dep tren may ban, tablet, dien thoai |
| 8 | **Animation** | Chuyen canh muot ma, hieu ung scroll, hover |

---

## Yeu cau he thong

Truoc khi bat dau, may tinh can co:

1. **Node.js** phien ban 18 tro len
   - Tai: https://nodejs.org/ (chon LTS)
   - Kiem tra: mo Terminal, go `node --version`
   - Neu thay `v18.x.x` hoac `v20.x.x` la duoc
2. **Trinh duyet** hien dai (Chrome, Firefox, Edge, Safari)
3. **Git** (khuyen dung de deploy)
   - Tai: https://git-scm.com/
   - Kiem tra: `git --version`

---

## Huong dan cai dat

### Buoc 1: Mo Terminal

- **Windows:** Mo CMD hoac PowerShell (Win + R, go `cmd`, Enter)
- **Mac:** Mo Terminal (Cmd + Space, go `terminal`)
- **Linux:** Mo Terminal (Ctrl + Alt + T)

### Buoc 2: Di chuyen den thu muc du an

```bash
cd D:\HCM
```

### Buoc 3: Cai dat thu vien

```bash
npm install
```

Man hinh se hien:
- Dong `added X packages`
- Khong co `ERR!` hay `ERRNO`

> **Neu gap loi:** Thu xoa `node_modules` va `package-lock.json`, chay lai:
>
> Mac/Linux:
> ```bash
> rm -rf node_modules package-lock.json
> npm install
> ```
>
> Windows:
> ```bash
> rmdir /s node_modules
> del package-lock.json
> npm install
> ```

---

## Huong dan chay thu

### Cach 1: Dev Server (khuyen dung)

```bash
npm run dev
```

Sau khi chay, terminal se hien:

```
  VITE vX.X.X  ready in Xms
  Local:   http://localhost:5173/
```

Copy link **http://localhost:5173/** vao trinh duyet de xem.

> **Luu y:** Dev server tu dong cap nhat khi sua code. Nhan `Ctrl + C` de tat.

### Cach 2: Build va chay production

```bash
npm run build
npm run preview
```

- `npm run build`: Tao folder `dist/` chua toan bo file tinh
- `npm run preview`: Mo server local de xem ban build (http://localhost:4173)

### Cach 3: Mo truc tiep file index.html

Sau khi build (`npm run build`), vao folder `dist/`, mo `index.html` bang trinh duyet.

---

## Huong dung

### 1. Trang chu (Hero)
- Hinh anh mo dau fullscreen
- Bam **"Bat dau hanh trinh"** de vao khu trien lam
- Bam **"Dong thoi gian"** de xem timeline

### 2. Khu trien lam (10 phong)
- Gallery card hien thi tat ca phong
- Bam **"Kham pha"** vao tung phong
- Trong phong: doc noi dung, xem cau trich dan
- Bam **"Phong truoc"** / **"Phong tiep"** de chuyen
- Phong cuoi cung: nut **"Lam bai Quiz"**

### 3. Dong thoi gian
- 10 moc su kien tu 1911 den 2025
- **Click** vao tung moc de mo/ong chi tiet
- Ban desktop: hien thi 2 cot xen ke

### 4. Ban do tuong tac
- SVG ban do Viet Nam
- **Hover** vao cac dia danh: Ha Noi, TP.HCM, Da Nang, Nghe An, Cao Bang
- Xem thong tin popup khi hover

### 5. Dashboard thanh tuu
- 6 chi so: GDP, ti le biet chu, ky su CNTT, cong bo quoc te, nguoi dung Internet, khach quoc te
- 4 achievement: Di san van hoa, Truong dai hoc, Benh vien, Khu cong nghiep

### 6. Quiz
- 30 cau hoi ve tu tuong Ho Chi Minh
- 3 cap do: Co ban (xanh), Trung binh (cam), Nang cao (do)
- Chon dap an, tu dong chuyen cau tiep
- Sau cau cuoi: bam **"Xem ket qua"**
- Ket qua: diem so, phan tram, xep loai A-D
- Bam **"Nhan chung nhan"** de tao certificate

### 7. Chung nhan hoan thanh
- Nhap **Ho ten** vao o input
- Bam **"Tao chung nhan"**
- Xem certificate duoc tao
- Bam **"Download PNG"** hoac **"Download PDF"** de tai ve

### 8. Navigation
- **Navbar:** Fixed tren cung: Trang chu, Phong trien lam, Dong thoi gian, Ban do, Thanh tuu, Quiz
- **Mobile:** Bam icon hamburger (3 gach) de mo menu

---

## Cau truc du an

```
D:\HCM\
+-- index.html              # File HTML chinh
+-- package.json            # Config du an, dependencies
+-- package-lock.json       # Khoa phien ban thu vien
+-- vite.config.js          # Config Vite
+-- .gitignore             # File can bo qua khi push git
+-- README.md              # File huong dan
+-- public\
|   +-- favicon.svg
+-- src\
|   +-- main.jsx            # Diem vao React app
|   +-- App.jsx             # Router + Layout
|   +-- index.css           # Design system (CSS variables)
|   +-- App.css             # Component styles
|   +-- data\
|   |   +-- roomContent.js      # 10 phong trien lam
|   |   +-- quizData.js         # 30 cau hoi
|   |   +-- timelineData.js     # 10 moc lich su
|   |   +-- dashboardData.js    # So lieu thanh tuu
|   +-- components\
|       +-- Navbar.jsx          # Thanh dieu huong
|       +-- Hero.jsx            # Trang chu fullscreen
|       +-- RoomList.jsx        # Danh sach phong
|       +-- RoomCard.jsx        # Card tung phong
|       +-- RoomDetail.jsx      # Chi tiet phong
|       +-- Timeline.jsx        # Dong thoi gian
|       +-- VietnamMap.jsx      # Ban do SVG
|       +-- Dashboard.jsx       # Thong ke thanh tuu
|       +-- Quiz.jsx            # Bai kiem tra
|       +-- Certificate.jsx     # Chung nhan hoan thanh
|       +-- Footer.jsx          # Chan trang
+-- dist\                  # San pham build (tu sinh)
    +-- index.html
    +-- assets\
        +-- index-xxx.css
        +-- index-xxx.js
```

---

## Huong dan deploy mien phi

### Cach 1: GitHub Pages (de nhat)

**Buoc 1:** Tao tai khoan GitHub (https://github.com/signup)

**Buoc 2:** Tao repository moi (New repository)
- Dat ten: `digital-museum-hcm`
- De Public
- Khong chon README hay .gitignore

**Buoc 3:** Day code len GitHub

```bash
git init
git add .
git commit -m "First commit"
git branch -M main
git remote add origin https://github.com/<username>/digital-museum-hcm.git
git push -u origin main
```

Thay `<username>` bang ten GitHub cua ban.

**Buoc 4:** Build san pham

```bash
npm run build
```

**Buoc 5:** Day folder `dist/` len GitHub Pages

```bash
npx gh-pages -d dist
```

**Buoc 6:** Truy cap
Sau khi chay xong, vao:
```
https://<username>.github.io/digital-museum-hcm/
```

### Cach 2: Vercel (nhanh nhat)

**Buoc 1:** Tao tai khoan Vercel (https://vercel.com/signup)

**Buoc 2:** Cai dat Vercel CLI

```bash
npm install -g vercel
```

**Buoc 3:** Deploy

```bash
vercel
```

- Lan dau se hoi dang nhap (login bang GitHub)
- Chon `Y` cho "Set up and deploy"
- Vercel tu dong nhan dien day la Vite project
- Sau vai giay, co link: `https://digital-museum-hcm.vercel.app`

### Cach 3: Netlify (keo tha)

**Buoc 1:** Tao tai khoan Netlify (https://app.netlify.com/signup)

**Buoc 2:** Build san pham

```bash
npm run build
```

**Buoc 3:** Keo tha folder `dist/` vao Netlify
- Mo https://app.netlify.com/drop
- Keo folder `dist/` tu may tinh vao trinh duyet
- Xong! Ban co link: `https://random-name.netlify.app`

---

## Tech stack

| Cong nghe | Phien ban | Muc dich |
|-----------|-----------|----------|
| React | 19 | Framework chinh |
| Vite | 8.0 | Build tool, dev server |
| React Router | 7 | Dieu huong (HashRouter) |
| Framer Motion | 12 | Animation, page transition |
| html2canvas | 1.4 | Chup certificate sang PNG |
| jsPDF | 3.0 | Tao file PDF certificate |
| CSS Variables | - | Design system, theme |

---

## Ghi chu

### Vi sao dung HashRouter?
Dung `HashRouter` (duong dan co `/#/`) thay vi `BrowserRouter` de deploy len GitHub Pages
va Netlify khong bi loi 404 khi load trang.

### Them noi dung phong
Mo file `src/data/roomContent.js`, moi phong la mot object:
- `id`: so thu tu (0-9)
- `title`: ten phong
- `subtitle`: mo ta phu
- `desc`: noi dung chinh
- `quote`: cau trich dan (co the de trong)
- `year`: moc thoi gian

### Them cau hoi quiz
Mo file `src/data/quizData.js`, them object:
```js
{id:31, level:"Co ban", question:"Cau hoi moi?", options:["A","B","C","D"], answer:0}
```
- `level`: "Co ban" | "Trung binh" | "Nang cao"
- `answer`: chi so cua dap an dung (0=A, 1=B, 2=C, 3=D)

### Loi thuong gap va cach khac phuc

| Loi | Nguyen nhan | Cach khac phuc |
|-----|-------------|----------------|
| `npm install` bi loi | Mat mang, Node cu | Kiem tra mang, cap nhat Node.js |
| Trang web trang | Chua chay dev server | Chay `npm run dev` |
| Certificate khong tai | Lien quan CORS | Chay bang `npm run dev` |
| GitHub Pages trang trang | Quen chay deploy | Chay `npx gh-pages -d dist` |
| 404 khi deploy | Sai route | Dung HashRouter (da cau hinh san) |

---

*Du an duoc thuc hien bang AI Coding (Codex GPT-5)*

**Trang thai:** Hoan thanh
