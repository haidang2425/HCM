import os, json

BASE = r"D:\HCM\src"

def write(path, content):
    full = os.path.join(BASE, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"  {path}")

# ============ DATA FILES ============

# Room Content
rooms = """export const rooms = [
  {
    id: 0,
    title: "S\u1ea3nh Ch\xednh",
    subtitle: "B\u1ea3o t\xe0ng s\u1ed1 t\u01b0\u01a1ng t\xe1c v\u1ec1 T\u01b0 t\u01b0\u1edfng H\u1ed3 Ch\xed Minh",
    desc: "Ch\xe0o m\u1eebng b\u1ea1n \u0111\u1ebfn v\u1edbi h\xe0nh tr\xecnh kh\xe1m ph\xe1 cu\u1ed9c \u0111\u1eddi v\xe0 s\u1ef1 nghi\u1ec7p c\u1ee7a Ch\u1ee7 t\u1ecbch H\u1ed3 Ch\xed Minh. H\xe3y b\u1eaft \u0111\u1ea7u h\xe0nh tr\xecnh qua 9 khu tri\u1ec3n l\xe3m.",
    bgColor: "linear-gradient(135deg, #1A1A2E, #C41E3A)",
    icon: "museum"
  },
  {
    id: 1,
    title: "Kh\u1edfi ngu\u1ed3n",
    subtitle: "Qu\xea h\u01b0\u01a1ng v\xe0 gia \u0111\xecnh",
    desc: "Ng\xe0y 19/5/1890, t\u1ea1i l\xe0ng Ho\xe0ng Tr\xf9, x\xe3 Kim Li\xean, huy\u1ec7n Nam \u0110\xe0n, t\u1ec9nh Ngh\u1ec7 An, m\u1ed9t ng\u01b0\u1eddi con \u01b0u t\xfa c\u1ee7a d\xe2n t\u1ed9c \u0111\xe3 c\u1ea5t ti\u1ebfng kh\xf3c ch\xe0o \u0111\u1eddi. \u0110\xf3 l\xe0 Nguy\u1ec5n Sinh Cung, sau n\xe0y l\xe0 Nguy\u1ec5n T\u1ea5t Th\xe0nh, Nguy\u1ec5n \xc1i Qu\u1ed1c v\xe0 cu\u1ed1i c\xf9ng l\xe0 H\u1ed3 Ch\xed Minh.",
    quote: "T\xf4i c\xf3 m\u1ed9t ham mu\u1ed1n, ham mu\u1ed1n t\u1ed9t b\u1eadc, l\xe0 l\xe0m sao cho n\u01b0\u1edbc ta \u0111\u01b0\u1ee3c ho\xe0n to\xe0n \u0111\u1ed9c l\u1eadp, d\xe2n ta \u0111\u01b0\u1ee3c ho\xe0n to\xe0n t\u1ef1 do, \u0111\u1ed3ng b\xe0o ai c\u0169ng c\xf3 c\u01a1m \u0103n \xe1o m\u1eb7c, ai c\u0169ng \u0111\u01b0\u1ee3c h\u1ecdc h\xe0nh.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Ho_Chi_Minh_birthplace_Kim_Lien.jpg/800px-Ho_Chi_Minh_birthplace_Kim_Lien.jpg",
    year: "1890-1911"
  },
  {
    id: 2,
    title: "T\xecm \u0111\u01b0\u1eddng c\u1ee9u n\u01b0\u1edbc",
    subtitle: "H\xe0nh tr\xecnh 30 n\u0103m b\xf4n ba",
    desc: "Ng\xe0y 5/6/1911, t\u1ea1i B\u1ebfn Nh\xe0 R\u1ed3ng, ng\u01b0\u1eddi thanh ni\xean Nguy\u1ec5n T\u1ea5t Th\xe0nh l\xean t\xe0u \u0110\xf4 \u0111\u1ed1c Latouche-Tr\xe9ville b\u1eaft \u0111\u1ea7u h\xe0nh tr\xecnh ra \u0111i t\xecm \u0111\u01b0\u1eddng c\u1ee9u n\u01b0\u1edbc. Ng\u01b0\u1eddi \u0111\xe3 \u0111\u1ebfn Ph\xe1p, Anh, M\u1ef9, Li\xean X\xf4, Trung Qu\u1ed1c v\xe0 nhi\u1ec1u n\u01b0\u1edbc kh\xe1c.",
    quote: "T\u1ef1 do cho \u0111\u1ed3ng b\xe0o t\xf4i, \u0111\u1ed9c l\u1eadp cho T\u1ed5 qu\u1ed1c t\xf4i, \u0111\xe2y l\xe0 t\u1ea5t c\u1ea3 nh\u1eefng g\xec t\xf4i mu\u1ed1n, \u0111\xe2y l\xe0 t\u1ea5t c\u1ea3 nh\u1eefng g\xec t\xf4i hi\u1ec3u.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Ben_Nha_Rong.jpg/800px-Ben_Nha_Rong.jpg",
    year: "1911-1941"
  },
  {
    id: 3,
    title: "\u0110\u1ea5u tranh gi\xe0nh \u0111\u1ed9c l\u1eadp",
    subtitle: "C\xe1ch m\u1ea1ng Th\xe1ng T\xe1m v\xe0 \u0111\u1ed9c l\u1eadp d\xe2n t\u1ed9c",
    desc: "Ng\xe0y 2/9/1945, t\u1ea1i Qu\u1ea3ng tr\u01b0\u1eddng Ba \u0110\xecnh, Ch\u1ee7 t\u1ecbch H\u1ed3 Ch\xed Minh \u0111\u1ecdc Tuy\xean ng\xf4n \u0110\u1ed9c l\u1eadp, khai sinh ra n\u01b0\u1edbc Vi\u1ec7t Nam D\xe2n ch\u1ee7 C\u1ed9ng h\xf2a. \u0110\xe2y l\xe0 k\u1ebft qu\u1ea3 c\u1ee7a 30 n\u0103m chu\u1ea9n b\u1ecb v\xe0 \u0111\u1ea5u tranh kh\xf4ng m\u1ec7t m\u1ecfi.",
    quote: "Kh\xf4ng c\xf3 g\xec qu\xfd h\u01a1n \u0111\u1ed9c l\u1eadp t\u1ef1 do.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Ho_Chi_Minh_reading_declaration.jpg/800px-Ho_Chi_Minh_reading_declaration.jpg",
    year: "1941-1954"
  },
  {
    id: 4,
    title: "Nh\xe0 n\u01b0\u1edbc c\u1ee7a d\xe2n",
    subtitle: "X\xe2y d\u1ef1ng ch\xednh quy\u1ec1n c\xe1ch m\u1ea1ng",
    desc: "Sau ng\xe0y \u0111\u1ed9c l\u1eadp, H\u1ed3 Ch\xed Minh l\xe3nh \u0111\u1ea1o c\xf4ng cu\u1ed9c x\xe2y d\u1ef1ng nh\xe0 n\u01b0\u1edbc ki\u1ec3u m\u1edbi - nh\xe0 n\u01b0\u1edbc c\u1ee7a d\xe2n, do d\xe2n, v\xec d\xe2n. Hi\u1ebfn ph\xe1p 1946 ra \u0111\u1eddi v\u1edbi nh\u1eefng quy\u1ec1n c\u01a1 b\u1ea3n c\u1ee7a c\xf4ng d\xe2n.",
    quote: "N\u01b0\u1edbc ta l\xe0 n\u01b0\u1edbc d\xe2n ch\u1ee7. Bao nhi\xeau l\u1ee3i \xedch \u0111\u1ec1u v\xec d\xe2n. Bao nhi\xeau quy\u1ec1n h\u1ea1n \u0111\u1ec1u c\u1ee7a d\xe2n.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Ho_Chi_Minh_1946.jpg/800px-Ho_Chi_Minh_1946.jpg",
    year: "1945-1969"
  },
  {
    id: 5,
    title: "\u0110\u1ea1o \u0111\u1ee9c c\xe1ch m\u1ea1ng",
    subtitle: "T\u01b0 t\u01b0\u1edfng H\u1ed3 Ch\xed Minh v\u1ec1 \u0111\u1ea1o \u0111\u1ee9c",
    desc: "Ch\u1ee7 t\u1ecbch H\u1ed3 Ch\xed Minh lu\xf4n coi \u0111\u1ea1o \u0111\u1ee9c l\xe0 g\u1ed1c c\u1ee7a ng\u01b0\u1eddi c\xe1ch m\u1ea1ng. Ng\u01b0\u1eddi \u0111\u1ec1 cao c\xe1c ph\u1ea9m ch\u1ea5t: C\u1ea7n, Ki\u1ec7m, Li\xeam, Ch\xednh, Ch\xed c\xf4ng v\xf4 t\u01b0. Ng\u01b0\u1eddi n\xf3i: 'C\u0169ng nh\u01b0 s\xf4ng th\xec c\xf3 ngu\u1ed3n m\u1edbi c\xf3 n\u01b0\u1edbc, kh\xf4ng c\xf3 ngu\u1ed3n th\xec s\xf4ng c\u1ea1. C\xe2y ph\u1ea3i c\xf3 g\u1ed1c, kh\xf4ng c\xf3 g\u1ed1c th\xec c\xe2y h\xe9o. Ng\u01b0\u1eddi c\xe1ch m\u1ea1ng ph\u1ea3i c\xf3 \u0111\u1ea1o \u0111\u1ee9c, kh\xf4ng c\xf3 \u0111\u1ea1o \u0111\u1ee9c th\xec d\xf9 t\xe0i gi\u1ecfi m\u1ea5y c\u0169ng kh\xf4ng l\xe3nh \u0111\u1ea1o \u0111\u01b0\u1ee3c nh\xe2n d\xe2n'.",
    quote: "C\u1ea7n, Ki\u1ec7m, Li\xeam, Ch\xednh - Ch\xed c\xf4ng v\xf4 t\u01b0.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Ho_Chi_Minh_1954.jpg/800px-Ho_Chi_Minh_1954.jpg",
    year: "1954-1969"
  },
  {
    id: 6,
    title: "L\u1ee3i \xedch nh\xe2n d\xe2n l\xe0 tr\xean h\u1ebft",
    subtitle: "T\u01b0 t\u01b0\u1edfng v\xec d\xe2n",
    desc: "Su\u1ed1t cu\u1ed9c \u0111\u1eddi, H\u1ed3 Ch\xed Minh ch\u1ec9 c\xf3 m\u1ed9t mong \u01b0\u1edbc: d\xe2n t\u1ed9c \u0111\u01b0\u1ee3c \u0111\u1ed9c l\u1eadp, nh\xe2n d\xe2n \u0111\u01b0\u1ee3c t\u1ef1 do, ai c\u0169ng c\xf3 c\u01a1m \u0103n \xe1o m\u1eb7c, ai c\u0169ng \u0111\u01b0\u1ee3c h\u1ecdc h\xe0nh. Ng\u01b0\u1eddi d\u1eb7n: 'Vi\u1ec7c g\xec l\u1ee3i cho d\xe2n th\xec ph\u1ea3i l\xe0m cho k\u1ef3 \u0111\u01b0\u1ee3c, vi\u1ec7c g\xec h\u1ea1i cho d\xe2n th\xec ph\u1ea3i tr\xe1nh.'",
    quote: "Vi\u1ec7c g\xec l\u1ee3i cho d\xe2n th\xec ph\u1ea3i l\xe0m. Vi\u1ec7c g\xec h\u1ea1i cho d\xe2n th\xec ph\u1ea3i tr\xe1nh.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ho_Chi_Minh_with_children.jpg/800px-Ho_Chi_Minh_with_children.jpg",
    year: "1969-1975"
  },
  {
    id: 7,
    title: "Vi\u1ec7t Nam h\xf4m nay",
    subtitle: "Th\xe0nh t\u1ef1u \u0111\u1ea5t n\u01b0\u1edbc sau 50 n\u0103m",
    desc: "T\u1eeb m\u1ed9t n\u01b0\u1edbc ngh\xe8o n\xe0n l\u1ea1c h\u1eadu, Vi\u1ec7t Nam \u0111\xe3 v\u01b0\u01a1n m\xecnh tr\u1edf th\xe0nh qu\u1ed1c gia c\xf3 thu nh\u1eadp trung b\xecnh, h\u1ed9i nh\u1eadp qu\u1ed1c t\u1ebf s\xe2u r\u1ed9ng. GDP kh\xf4ng ng\u1eebng t\u0103ng tr\u01b0\u1edfng, \u0111\u1eddi s\u1ed1ng nh\xe2n d\xe2n kh\xf4ng ng\u1eebng \u0111\u01b0\u1ee3c c\u1ea3i thi\u1ec7n.",
    quote: "T\u00e2y ti\u1ebfn \u0111o\xe0n k\u1ec1u vang kh\xfac qu\xe2n h\xe0nh...",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Ho_Chi_Minh_City_skyline.jpg/800px-Ho_Chi_Minh_City_skyline.jpg",
    year: "1975-nay"
  },
  {
    id: 8,
    title: "Th\u1ebf h\u1ec7 tr\u1ebb",
    subtitle: "H\u1ecdc t\u1eadp v\xe0 l\xe0m theo t\u01b0 t\u01b0\u1edfng H\u1ed3 Ch\xed Minh",
    desc: "Th\u1ebf h\u1ec7 tr\u1ebb Vi\u1ec7t Nam h\xf4m nay ti\u1ebfp t\u1ee5c h\u1ecdc t\u1eadp v\xe0 l\xe0m theo t\u01b0 t\u01b0\u1edfng, \u0111\u1ea1o \u0111\u1ee9c, phong c\xe1ch H\u1ed3 Ch\xed Minh. Sinh vi\xean, thanh ni\xean c\u1ea3 n\u01b0\u1edbc thi \u0111ua h\u1ecdc t\u1eadp, lao \u0111\u1ed9ng s\xe1ng t\u1ea1o, g\xf3p ph\u1ea7n x\xe2y d\u1ef1ng \u0111\u1ea5t n\u01b0\u1edbc ph\u1ed3n vinh.",
    quote: "Non s\xf4ng Vi\u1ec7t Nam c\xf3 tr\u1edf n\xean v\u1ebb vang hay kh\xf4ng... ch\xednh l\xe0 nh\u1edd m\u1ed9t ph\u1ea7n l\u1edbn \u1edf c\xf4ng h\u1ecdc t\u1eadp c\u1ee7a c\xe1c ch\xe1u.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Vietnam_student_graduation.jpg/800px-Vietnam_student_graduation.jpg",
    year: "T\u01b0\u01a1ng lai"
  },
  {
    id: 9,
    title: "Tri \xe2n v\xe0 k\u1ebft th\xfac",
    subtitle: "T\u01b0\u1edfng nh\u1edb v\xe0 bi\u1ebft \u01a1n",
    desc: "H\xe0nh tr\xecnh c\u1ee7a ch\xfang ta t\u1ea1m d\u1eebng \u1edf \u0111\xe2y. Nh\u01b0ng t\u01b0 t\u01b0\u1edfng H\u1ed3 Ch\xed Minh s\u1ebd m\xe3i m\xe3i soi \u0111\u01b0\u1eddng cho d\xe2n t\u1ed9c Vi\u1ec7t Nam. H\xe3y c\xf9ng l\xe0m b\xe0i ki\u1ec3m tra \u0111\u1ec3 c\u1ee7ng c\u1ed1 ki\u1ebfn th\u1ee9c v\xe0 nh\u1eadn ch\u1ee9ng nh\u1eadn ho\xe0n th\xe0nh.",
    quote: "H\u1ed3 Ch\xed Minh mu\xf4n n\u0103m! H\u1ed3 Ch\xed Minh mu\xf4n n\u0103m!",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Ho_Chi_Minh_Mausoleum.jpg/800px-Ho_Chi_Minh_Mausoleum.jpg",
    year: "M\xe3i m\xe3i"
  }
];
"""
write("data/roomContent.js", rooms)
print("  data/roomContent.js")
