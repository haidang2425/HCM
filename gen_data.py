# ———— DATA FILES ————
def gen_data():
    # quizData.js
    quiz = r"""export const quizData = [
  {id:1,level:"Cơ bản",question:"Chủ tịch Hồ Chí Minh sinh ngày tháng năm nào?",options:["19/5/1890","19/5/1891","2/9/1890","3/2/1891"],answer:0},
  {id:2,level:"Cơ bản",question:"Quê hương của Chủ tịch Hồ Chí Minh ở tỉnh nào?",options:["Hà Tĩnh","Nghệ An","Thanh Hóa","Quảng Bình"],answer:1},
  {id:3,level:"Cơ bản",question:"Bến Nhà Rồng nằm ở thành phố nào?",options:["Hà Nội","Đà Nẵng","Hải Phòng","TP. Hồ Chí Minh"],answer:3},
  {id:4,level:"Cơ bản",question:"Nguyễn Tất Thành ra đi tìm đường cứu nước vào năm nào?",options:["1910","1911","1912","1913"],answer:1},
  {id:5,level:"Cơ bản",question:"Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường nào?",options:["Ba Đình","Hồ Chí Minh","Lăng Chủ tịch","Nhà hát Lớn"],answer:0},
  {id:6,level:"Cơ bản",question:"Câu nói Không có gì quý hơn độc lập tự do là của ai?",options:["Phạm Văn Đồng","Võ Nguyên Giáp","Hồ Chí Minh","Lê Duẩn"],answer:2},
  {id:7,level:"Cơ bản",question:"Hồ Chí Minh có những tên gọi nào?",options:["Nguyễn Sinh Cung","Nguyễn Ái Quốc","Cả A và B","Văn Ba"],answer:2},
  {id:8,level:"Cơ bản",question:"Tác phẩm Đường Kách Mệnh được viết năm nào?",options:["1925","1927","1930","1941"],answer:1},
  {id:9,level:"Cơ bản",question:"Lăng Chủ tịch Hồ Chí Minh nằm ở đâu?",options:["Quận 1 TP.HCM","Ba Đình Hà Nội","Đà Nẵng","Huế"],answer:1},
  {id:10,level:"Cơ bản",question:"Đạo đức cách mạng theo Hồ Chí Minh gồm?",options:["Trung Hiếu","Cần Kiệm Liêm Chính","Nhân Nghĩa Lễ Trí Tín","Dũng cảm Kiên cường"],answer:1},
  {id:11,level:"Trung bình",question:"Hồ Chí Minh thành lập Đảng CSVN ngày nào?",options:["3/2/1930","2/9/1945","19/5/1941","7/5/1954"],answer:0},
  {id:12,level:"Trung bình",question:"Hồ Chí Minh viết Di chúc năm nào?",options:["1967","1968","1969","1965"],answer:2},
  {id:13,level:"Trung bình",question:"Cần Kiệm Liêm Chính là bài học về?",options:["Đạo đức cách mạng","Kinh tế","Quân sự","Ngoại giao"],answer:0},
  {id:14,level:"Trung bình",question:"Hồ Chí Minh tham gia sáng lập tổ chức nào năm 1920?",options:["Quốc tế CS","ĐCS Pháp","Hội Liên hiệp dân tộc thuộc địa","Cả B và C"],answer:3},
  {id:15,level:"Trung bình",question:"Phong trào Học tập làm theo Bác phát động năm nào?",options:["2006","2011","2016","2021"],answer:0},
  {id:16,level:"Trung bình",question:"Hồ Chí Minh đến nước nào đầu tiên?",options:["Anh","Mỹ","Pháp","Liên Xô"],answer:2},
  {id:17,level:"Trung bình",question:"Nước lấy dân làm gốc thể hiện tư tưởng gì?",options:["Quân sự","Nhà nước của dân do dân vì dân","Kinh tế","Văn hóa"],answer:1},
  {id:18,level:"Trung bình",question:"Hồ Chí Minh viết báo nào ở Pháp?",options:["Người cùng khổ","Nhân đạo","Đời sống công nhân","Tia sáng"],answer:0},
  {id:19,level:"Trung bình",question:"Việc gì có lợi cho dân thì phải?",options:["Làm cho kỳ được","Suy nghĩ kỹ","Hỏi ý kiến","Coi chừng"],answer:0},
  {id:20,level:"Trung bình",question:"Hồ Chí Minh rời Việt Nam lần cuối năm nào?",options:["1967","1969","1965","1968"],answer:1},
  {id:21,level:"Nâng cao",question:"Đạo đức là gốc của người cách mạng nghĩa là?",options:["Đạo đức hơn tài năng","Phải có đạo đức mới làm cách mạng","Tài năng không cần","Hy sinh đạo đức"],answer:1},
  {id:22,level:"Nâng cao",question:"Nhà nước của dân do dân vì dân khác nhà nước tư sản thế nào?",options:["Không khác","Do dân bầu phục vụ nhân dân","Một đảng lãnh đạo","Dân không quyền"],answer:1},
  {id:23,level:"Nâng cao",question:"HCM vận dụng triết lý nào trong tư tưởng đạo đức?",options:["Phật giáo","Nho Phật và tinh hoa nhân loại","Lão giáo","Chỉ Mác-Lênin"],answer:1},
  {id:24,level:"Nâng cao",question:"Vì sao Liêm là phẩm chất quan trọng?",options:["Tham ô là tội ác","Cán bộ là đầy tớ dân phải trong sạch","Giúp thăng tiến","Cả A và B"],answer:3},
  {id:25,level:"Nâng cao",question:"Tác phẩm nào thể hiện rõ tư tưởng HCM về đạo đức?",options:["Nhật ký trong tù","Đường Kách Mệnh","Sửa đổi lối làm việc","Cả 3"],answer:3},
  {id:26,level:"Nâng cao",question:"HCM kế thừa tư tưởng thân dân từ triều đại nào?",options:["Lý-Trần","Nguyễn","Lê sơ","Tây Sơn"],answer:2},
  {id:27,level:"Nâng cao",question:"Tư tưởng Nhân dân là chủ thể lịch sử bắt nguồn từ?",options:["Mác-Lênin","Lịch sử VN","Cả hai","Dân chủ Tây"],answer:2},
  {id:28,level:"Nâng cao",question:"Thực hành dân chủ theo HCM là gì?",options:["Bầu cử","Dân quyết định việc liên quan lợi ích mình","Cán bộ tự quyết","Dân chỉ góp ý"],answer:1},
  {id:29,level:"Nâng cao",question:"Tính cách mạng và khoa học trong tư tưởng HCM do?",options:["Kết hợp lý luận và thực tiễn","Lý luận thuần túy","Kinh nghiệm cá nhân","Sao chép nước ngoài"],answer:0},
  {id:30,level:"Nâng cao",question:"Giá trị tư tưởng HCM với thế hệ trẻ?",options:["Chỉ lịch sử","Kim chỉ nam định hướng lý tưởng sống","Không phù hợp","Chỉ trong chính trị"],answer:1}
];"""
    write("data/quizData.js", quiz)
    print("  -> quizData.js")
