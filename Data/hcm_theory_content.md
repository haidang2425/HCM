# Nội dung lý thuyết cho web tĩnh: Tư tưởng Hồ Chí Minh

> Mục đích sử dụng: file này được viết lại theo dạng **học liệu web**, chia thành module, lesson, key points, flashcard và gợi ý hiển thị. Nội dung là bản tổng hợp, diễn giải có cấu trúc để đưa vào Claude Code/React/Next.js/Vite, không phải bản chép nguyên văn giáo trình.

---

## Cấu trúc dữ liệu gợi ý cho Claude Code

```ts
export type Lesson = {
  id: string;
  chapterId: string;
  title: string;
  summary: string;
  learningObjectives: string[];
  keyPoints: string[];
  details: { heading: string; body: string[] }[];
  flashcards: { front: string; back: string }[];
  reviewQuestions: string[];
};
```

Gợi ý giao diện web tĩnh:

- Trang chủ: giới thiệu môn học, tiến trình 6 chương, nút “Học lý thuyết” và “Làm quiz”.
- Trang chương: mỗi chương có mục tiêu, sơ đồ tư duy, các lesson ngắn.
- Trang lesson: khối tóm tắt, nội dung chi tiết, flashcard, câu hỏi ôn nhanh.
- Trang quiz: lọc theo chương, chế độ luyện tập, chế độ thi, hiển thị giải thích sau khi chọn đáp án.
- Trang tổng ôn: bảng so sánh các khái niệm dễ nhầm, mốc thời gian, tác phẩm, luận điểm tiêu biểu.

---

# Tổng quan môn học

Tư tưởng Hồ Chí Minh là hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam. Nội dung cốt lõi xoay quanh con đường giải phóng dân tộc, độc lập dân tộc gắn liền với chủ nghĩa xã hội, xây dựng Đảng, xây dựng Nhà nước của nhân dân, do nhân dân, vì nhân dân, đại đoàn kết dân tộc, đoàn kết quốc tế, văn hóa, đạo đức và con người.

Môn học không chỉ yêu cầu ghi nhớ khái niệm mà còn cần hiểu được vì sao các luận điểm đó hình thành, chúng được vận dụng như thế nào trong cách mạng Việt Nam và có ý nghĩa gì đối với sinh viên hiện nay. Khi thiết kế web học tập, nên trình bày nội dung theo hướng: khái niệm → bối cảnh → luận điểm → ví dụ lịch sử → câu hỏi kiểm tra.

---

# Chương 1. Khái niệm, đối tượng, phương pháp nghiên cứu và ý nghĩa học tập

## Lesson 1. Khái niệm tư tưởng Hồ Chí Minh

### Tóm tắt
Tư tưởng Hồ Chí Minh là nền tảng tư tưởng quan trọng của cách mạng Việt Nam, cùng với chủ nghĩa Mác - Lênin giữ vai trò kim chỉ nam cho hành động của Đảng. Khái niệm này nhấn mạnh tính hệ thống, tính toàn diện, tính cách mạng và khoa học.

### Mục tiêu học tập

- Hiểu được định nghĩa tư tưởng Hồ Chí Minh.
- Nhận diện các thành tố cơ bản trong khái niệm: hệ thống quan điểm, toàn diện, sâu sắc, cách mạng Việt Nam.
- Phân biệt tư tưởng Hồ Chí Minh với một vài câu nói rời rạc hoặc tư tưởng cá nhân đơn thuần.

### Nội dung chính

#### 1. Bản chất của khái niệm
Tư tưởng Hồ Chí Minh không phải là tập hợp ngẫu nhiên các câu nói hoặc kinh nghiệm riêng lẻ. Đó là một hệ thống quan điểm được hình thành trong quá trình Hồ Chí Minh hoạt động cách mạng, nghiên cứu lý luận, tổng kết thực tiễn Việt Nam và thế giới.

#### 2. Nội dung cốt lõi
Các vấn đề cơ bản của cách mạng Việt Nam gồm: giải phóng dân tộc, độc lập dân tộc gắn liền với chủ nghĩa xã hội, xây dựng Đảng, xây dựng Nhà nước, đại đoàn kết, đoàn kết quốc tế, văn hóa, đạo đức và con người.

#### 3. Vị trí trong hệ tư tưởng của Đảng
Tư tưởng Hồ Chí Minh cùng với chủ nghĩa Mác - Lênin là nền tảng tư tưởng, kim chỉ nam cho hành động của Đảng Cộng sản Việt Nam. Đây là điểm thường xuất hiện trong câu hỏi trắc nghiệm.

### Flashcards

- **Hỏi:** Tư tưởng Hồ Chí Minh là gì?  
  **Đáp:** Là hệ thống quan điểm toàn diện và sâu sắc về những vấn đề cơ bản của cách mạng Việt Nam.
- **Hỏi:** Tư tưởng Hồ Chí Minh có vị trí gì trong Đảng?  
  **Đáp:** Cùng với chủ nghĩa Mác - Lênin là nền tảng tư tưởng và kim chỉ nam cho hành động của Đảng.

## Lesson 2. Đối tượng và nhiệm vụ nghiên cứu

### Tóm tắt
Đối tượng nghiên cứu của môn học là quá trình sản sinh, hình thành, phát triển và hiện thực hóa tư tưởng Hồ Chí Minh trong cách mạng Việt Nam.

### Nội dung chính

#### 1. Đối tượng nghiên cứu
Môn học nghiên cứu tư tưởng Hồ Chí Minh như một hệ thống lý luận gắn với thực tiễn. Vì vậy, đối tượng không chỉ là tiểu sử Hồ Chí Minh mà còn là quá trình tư tưởng của Người đi vào đời sống cách mạng Việt Nam.

#### 2. Nhiệm vụ nghiên cứu
Nhiệm vụ gồm: làm rõ cơ sở hình thành tư tưởng, các giai đoạn phát triển, nội dung cơ bản, giá trị lý luận và thực tiễn, đồng thời vận dụng trong học tập và đời sống.

#### 3. Ý nghĩa với sinh viên
Sinh viên học môn này để nâng cao năng lực tư duy lý luận, rèn luyện bản lĩnh chính trị, bồi dưỡng đạo đức, hình thành thái độ sống có trách nhiệm với cộng đồng và đất nước.

### Câu hỏi ôn nhanh

1. Vì sao không thể chỉ học môn này bằng cách ghi nhớ tiểu sử?
2. Đối tượng của môn học có bao gồm quá trình hiện thực hóa tư tưởng không?
3. Ý nghĩa học tập môn học đối với sinh viên là gì?

## Lesson 3. Phương pháp nghiên cứu

### Tóm tắt
Nghiên cứu tư tưởng Hồ Chí Minh phải dựa trên phương pháp luận khoa học, kết hợp giữa lịch sử và logic, lý luận và thực tiễn, kế thừa và phát triển.

### Nội dung chính

#### 1. Thống nhất tính Đảng và tính khoa học
Khi nghiên cứu cần đứng trên lập trường của chủ nghĩa Mác - Lênin và đường lối cách mạng Việt Nam, đồng thời bảo đảm khách quan, khoa học, tránh suy diễn chủ quan.

#### 2. Thống nhất lý luận và thực tiễn
Tư tưởng Hồ Chí Minh hình thành từ thực tiễn đấu tranh cách mạng. Vì vậy, học lý thuyết phải liên hệ với bối cảnh lịch sử và thực tiễn hiện nay.

#### 3. Quan điểm lịch sử - cụ thể
Mỗi luận điểm cần đặt trong hoàn cảnh cụ thể. Ví dụ, quan điểm về sách lược với Pháp năm 1946 phải hiểu trong bối cảnh nước Việt Nam Dân chủ Cộng hòa còn non trẻ và phải đối diện nhiều kẻ thù.

#### 4. Quan điểm toàn diện và hệ thống
Không tách rời từng luận điểm khỏi chỉnh thể tư tưởng Hồ Chí Minh. Độc lập dân tộc, chủ nghĩa xã hội, Đảng, Nhà nước, đoàn kết, đạo đức và con người có quan hệ chặt chẽ với nhau.

---

# Chương 2. Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh

## Lesson 1. Cơ sở thực tiễn

### Tóm tắt
Tư tưởng Hồ Chí Minh hình thành từ thực tiễn Việt Nam cuối thế kỷ XIX, đầu thế kỷ XX và thực tiễn thế giới thời đại đế quốc chủ nghĩa, cách mạng vô sản và phong trào giải phóng dân tộc.

### Nội dung chính

#### 1. Bối cảnh Việt Nam
Cuối thế kỷ XIX, Việt Nam trở thành thuộc địa của thực dân Pháp. Các phong trào yêu nước theo khuynh hướng phong kiến và dân chủ tư sản lần lượt thất bại. Thực tiễn đó đặt ra yêu cầu tìm một con đường cứu nước mới.

#### 2. Bối cảnh thế giới
Thế giới có nhiều biến đổi: chủ nghĩa tư bản chuyển sang giai đoạn đế quốc chủ nghĩa, phong trào công nhân phát triển, Cách mạng Tháng Mười Nga mở ra thời đại mới, phong trào giải phóng dân tộc ở các thuộc địa trỗi dậy.

#### 3. Ý nghĩa đối với Hồ Chí Minh
Hồ Chí Minh nhận ra rằng muốn giải phóng dân tộc không thể đi theo lối cũ. Người tìm đường cứu nước bằng cách khảo sát thực tiễn nhiều nước, so sánh các cuộc cách mạng và tiếp cận chủ nghĩa Mác - Lênin.

## Lesson 2. Cơ sở lý luận

### Tóm tắt
Tư tưởng Hồ Chí Minh được hình thành trên nền tảng truyền thống dân tộc, tinh hoa văn hóa nhân loại và chủ nghĩa Mác - Lênin. Trong đó, chủ nghĩa Mác - Lênin giữ vai trò quyết định bản chất cách mạng và khoa học.

### Nội dung chính

#### 1. Truyền thống dân tộc
Các giá trị nổi bật gồm chủ nghĩa yêu nước, tinh thần đoàn kết, ý chí độc lập tự cường, lòng nhân nghĩa, truyền thống cần cù, lạc quan và khoan dung. Chủ nghĩa yêu nước là giá trị cốt lõi, là động lực lớn trong quá trình Hồ Chí Minh ra đi tìm đường cứu nước.

#### 2. Tinh hoa văn hóa phương Đông
Hồ Chí Minh tiếp thu có chọn lọc các yếu tố tích cực của Nho giáo, Phật giáo, Lão giáo và chủ nghĩa Tam dân của Tôn Trung Sơn. Người không tiếp thu máy móc mà chọn những yếu tố phù hợp với mục tiêu giải phóng dân tộc và con người.

#### 3. Tinh hoa văn hóa phương Tây
Người tiếp cận tư tưởng dân chủ, tự do, bình đẳng, bác ái, tinh thần pháp quyền và giá trị tiến bộ từ các cuộc cách mạng tư sản như Mỹ và Pháp, đồng thời nhận ra giới hạn của chúng trong vấn đề giải phóng thuộc địa.

#### 4. Chủ nghĩa Mác - Lênin
Đây là cơ sở thế giới quan và phương pháp luận quyết định. Từ chủ nghĩa Mác - Lênin, Hồ Chí Minh tìm thấy con đường giải phóng dân tộc theo cách mạng vô sản, gắn độc lập dân tộc với chủ nghĩa xã hội.

## Lesson 3. Nhân tố chủ quan Hồ Chí Minh

### Tóm tắt
Bên cạnh cơ sở khách quan, phẩm chất cá nhân của Hồ Chí Minh có vai trò rất quan trọng: lòng yêu nước, thương dân, trí tuệ, bản lĩnh, năng lực tự học, tư duy độc lập và khả năng tổng kết thực tiễn.

### Nội dung chính

Hồ Chí Minh là người có hoài bão lớn, ý chí kiên định, lối sống giản dị, khả năng học ngoại ngữ, làm nhiều nghề, tiếp xúc với nhiều tầng lớp xã hội và nhiều nền văn hóa. Nhờ đó, Người có điều kiện khảo nghiệm thực tiễn rộng lớn và lựa chọn con đường cứu nước phù hợp.

## Lesson 4. Các giai đoạn hình thành và phát triển tư tưởng Hồ Chí Minh

### Mốc cần nhớ

- **Trước 1911:** Hình thành lòng yêu nước, chí hướng cứu nước.
- **1911–1920:** Tìm tòi, khảo nghiệm con đường cứu nước; đến với chủ nghĩa Lênin.
- **1921–1930:** Hình thành cơ bản tư tưởng về cách mạng Việt Nam; chuẩn bị về chính trị, tư tưởng, tổ chức cho sự ra đời của Đảng.
- **1930–1941:** Vượt qua thử thách, giữ vững đường lối cách mạng đúng đắn.
- **1941–1969:** Phát triển, bổ sung, hoàn thiện tư tưởng trong lãnh đạo cách mạng Việt Nam.

### Các sự kiện thường gặp trong quiz

- 5/6/1911: Nguyễn Tất Thành ra đi tìm đường cứu nước.
- 1919: Nguyễn Ái Quốc gửi bản yêu sách của nhân dân An Nam tới Hội nghị Versailles.
- 1920: Đọc Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và thuộc địa của Lênin; tham gia Đại hội Tours và đứng về Quốc tế III.
- 1925: Tác phẩm Bản án chế độ thực dân Pháp.
- 1927: Tác phẩm Đường Kách mệnh.
- 1930: Chủ trì Hội nghị hợp nhất các tổ chức cộng sản, thành lập Đảng Cộng sản Việt Nam, soạn thảo Cương lĩnh chính trị đầu tiên.
- 28/1/1941: Trở về Tổ quốc sau 30 năm hoạt động ở nước ngoài.

---

# Chương 3. Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội

## Lesson 1. Vấn đề độc lập dân tộc

### Tóm tắt
Độc lập dân tộc là quyền thiêng liêng, bất khả xâm phạm của mỗi dân tộc. Theo Hồ Chí Minh, độc lập phải là độc lập thật sự, gắn với tự do, cơm no, áo ấm, hạnh phúc của nhân dân.

### Nội dung chính

#### 1. Độc lập là quyền dân tộc cơ bản
Hồ Chí Minh khẳng định mọi dân tộc đều có quyền sống, quyền sung sướng và quyền tự do. Độc lập dân tộc không phải sự ban phát của nước lớn mà là quyền tự nhiên, chính đáng của các dân tộc.

#### 2. Độc lập phải toàn diện và thực chất
Độc lập không chỉ là có quốc kỳ, quốc hiệu, chính phủ riêng. Nếu nhân dân vẫn đói nghèo, không được học hành, không có tự do thì độc lập chưa có ý nghĩa đầy đủ.

#### 3. “Không có gì quý hơn độc lập, tự do”
Luận điểm này thể hiện giá trị cao nhất của độc lập, tự do đối với dân tộc Việt Nam và các dân tộc bị áp bức.

## Lesson 2. Cách mạng giải phóng dân tộc

### Tóm tắt
Cách mạng giải phóng dân tộc ở thuộc địa trước hết nhằm đánh đổ ách thống trị của chủ nghĩa thực dân, giành độc lập dân tộc và thiết lập chính quyền của nhân dân.

### Nội dung chính

#### 1. Tính chất và nhiệm vụ hàng đầu
Ở các nước thuộc địa, mâu thuẫn chủ yếu là mâu thuẫn giữa toàn thể dân tộc bị áp bức với chủ nghĩa thực dân, đế quốc. Vì vậy, nhiệm vụ hàng đầu là giải phóng dân tộc.

#### 2. Con đường cách mạng vô sản
Hồ Chí Minh lựa chọn con đường cách mạng vô sản vì con đường này giải quyết triệt để vấn đề dân tộc, gắn giải phóng dân tộc với giải phóng giai cấp và giải phóng con người.

#### 3. Lực lượng cách mạng
Cách mạng là sự nghiệp của toàn dân. Công nhân và nông dân là gốc cách mạng; đồng thời cần tập hợp mọi lực lượng yêu nước có thể tập hợp.

#### 4. Bạo lực cách mạng và phương pháp hòa bình
Hồ Chí Minh coi trọng hòa bình, thương lượng khi có thể, nhưng khi kẻ thù dùng bạo lực xâm lược thì nhân dân phải dùng bạo lực cách mạng để tự vệ và giành độc lập.

## Lesson 3. Độc lập dân tộc gắn liền với chủ nghĩa xã hội

### Tóm tắt
Đây là nội dung cốt lõi trong tư tưởng Hồ Chí Minh. Độc lập dân tộc là cơ sở, tiền đề để đi lên chủ nghĩa xã hội; chủ nghĩa xã hội là điều kiện bảo đảm độc lập dân tộc vững chắc.

### Nội dung chính

#### 1. Vì sao độc lập phải gắn với chủ nghĩa xã hội?
Độc lập nếu không đem lại đời sống ấm no, tự do, hạnh phúc cho nhân dân thì chưa trọn vẹn. Chủ nghĩa xã hội là con đường để bảo đảm quyền làm chủ của nhân dân, phát triển đất nước và chống nguy cơ lệ thuộc trở lại.

#### 2. Bản chất của chủ nghĩa xã hội
Theo Hồ Chí Minh, chủ nghĩa xã hội là xã hội do nhân dân lao động làm chủ, có nền kinh tế phát triển, văn hóa đạo đức tiến bộ, con người được giải phóng, không còn áp bức bóc lột.

#### 3. Mục tiêu của chủ nghĩa xã hội
Mục tiêu tổng quát là không ngừng nâng cao đời sống vật chất và tinh thần của nhân dân. Các mục tiêu cụ thể gồm chính trị dân chủ, kinh tế phát triển, văn hóa tiến bộ, xã hội công bằng, con người phát triển toàn diện.

## Lesson 4. Quá độ lên chủ nghĩa xã hội ở Việt Nam

### Tóm tắt
Việt Nam đi lên chủ nghĩa xã hội từ một nước nông nghiệp lạc hậu, bỏ qua chế độ tư bản chủ nghĩa. Vì vậy, thời kỳ quá độ là quá trình lâu dài, khó khăn, phải cải tạo xã hội cũ và xây dựng xã hội mới.

### Nội dung chính

#### 1. Đặc điểm quá độ
Việt Nam có xuất phát điểm thấp, hậu quả chiến tranh nặng nề, lực lượng sản xuất chưa phát triển. Do đó phải vừa xây dựng, vừa cải tạo, vừa bảo vệ Tổ quốc.

#### 2. Nhiệm vụ lịch sử
Xóa bỏ tàn tích của chế độ cũ, xây dựng các yếu tố mới phù hợp với quy luật tiến lên chủ nghĩa xã hội trên các lĩnh vực: chính trị, kinh tế, văn hóa, xã hội và con người.

#### 3. Biện pháp xây dựng chủ nghĩa xã hội
Hồ Chí Minh nhấn mạnh phát huy sức dân: đem tài dân, sức dân, của dân làm lợi cho dân. Muốn xây dựng chủ nghĩa xã hội trước hết cần có con người xã hội chủ nghĩa.

---

# Chương 4. Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của nhân dân, do nhân dân, vì nhân dân

## Lesson 1. Tư tưởng về Đảng Cộng sản Việt Nam

### Tóm tắt
Đảng Cộng sản Việt Nam là nhân tố quyết định hàng đầu đưa cách mạng Việt Nam đến thắng lợi. Đảng phải có chủ nghĩa làm cốt, phải trong sạch, vững mạnh, gắn bó với nhân dân.

### Nội dung chính

#### 1. Sự ra đời của Đảng
Theo Hồ Chí Minh, Đảng Cộng sản Việt Nam ra đời là kết quả của sự kết hợp chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào yêu nước Việt Nam.

#### 2. Vai trò lãnh đạo của Đảng
Cách mạng trước hết phải có Đảng cách mệnh. Đảng tổ chức, vận động nhân dân trong nước và liên hệ với phong trào cách mạng thế giới.

#### 3. Đảng là đạo đức, là văn minh
Đảng không có lợi ích riêng ngoài lợi ích của dân tộc và nhân dân. Đạo đức của Đảng thể hiện ở mục tiêu giải phóng dân tộc, giải phóng xã hội, giải phóng con người.

#### 4. Xây dựng Đảng
Xây dựng Đảng gồm xây dựng về tư tưởng, chính trị, tổ chức và đạo đức. Cán bộ, đảng viên phải chống chủ nghĩa cá nhân, quan liêu, tham ô, lãng phí, đặc quyền đặc lợi.

## Lesson 2. Nhà nước của nhân dân, do nhân dân, vì nhân dân

### Tóm tắt
Nhà nước trong tư tưởng Hồ Chí Minh là nhà nước dân chủ, nhân dân là chủ và nhân dân làm chủ. Nhà nước phải phục vụ nhân dân, chăm lo đời sống nhân dân.

### Nội dung chính

#### 1. Nhà nước của nhân dân
Mọi quyền lực nhà nước thuộc về nhân dân. Nhân dân có quyền bầu ra, kiểm soát và bãi miễn đại biểu nếu đại biểu không xứng đáng.

#### 2. Nhà nước do nhân dân
Nhân dân tham gia xây dựng, tổ chức và quản lý nhà nước thông qua các hình thức dân chủ trực tiếp và dân chủ đại diện.

#### 3. Nhà nước vì nhân dân
Mục tiêu của nhà nước là phục vụ lợi ích của nhân dân. Cán bộ, công chức là “công bộc” của dân, không phải “quan cách mạng”.

## Lesson 3. Nhà nước pháp quyền và sự kết hợp giữa pháp luật với đạo đức

### Tóm tắt
Hồ Chí Minh đề cao một nhà nước hợp hiến, hợp pháp, quản lý xã hội bằng pháp luật, đồng thời kết hợp nhuần nhuyễn pháp luật với đạo đức.

### Nội dung chính

#### 1. Hợp hiến, hợp pháp
Sau Cách mạng Tháng Tám, Hồ Chí Minh sớm chú trọng tổng tuyển cử, xây dựng Hiến pháp, tạo cơ sở pháp lý cho Nhà nước Việt Nam Dân chủ Cộng hòa.

#### 2. Pháp luật nghiêm minh
Pháp luật phải đúng, đủ và được thực thi nghiêm. Ai vi phạm cũng phải bị xử lý đúng người, đúng tội, không có vùng đặc quyền.

#### 3. Đạo đức trong quản lý nhà nước
Điểm đặc sắc là kết hợp pháp luật và đạo đức. Pháp luật tạo khuôn khổ bắt buộc; đạo đức tạo nền tảng tự giác, liêm chính và trách nhiệm.

## Lesson 4. Công tác cán bộ

### Tóm tắt
Cán bộ là cái gốc của mọi công việc. Đánh giá cán bộ phải khách quan, toàn diện, công tâm; dùng cán bộ phải đúng người, đúng việc.

### Nội dung chính

- Hiểu và đánh giá đúng cán bộ.
- Chọn người có đức, có tài, gần dân, biết phục vụ dân.
- Chống bệnh cục bộ, hẹp hòi, tư túng, kiêu ngạo.
- Đào tạo, bồi dưỡng và kiểm tra cán bộ thường xuyên.

---

# Chương 5. Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế

## Lesson 1. Vai trò của đại đoàn kết toàn dân tộc

### Tóm tắt
Đại đoàn kết toàn dân tộc là vấn đề chiến lược, có ý nghĩa quyết định thành công của cách mạng. Đoàn kết không phải thủ đoạn nhất thời mà là đường lối lâu dài.

### Nội dung chính

#### 1. Đại đoàn kết là chiến lược
Hồ Chí Minh xem đoàn kết là sức mạnh, là then chốt của thành công. Cách mạng muốn thắng lợi phải tập hợp được đông đảo nhân dân.

#### 2. Chủ thể của đại đoàn kết
Chủ thể là toàn thể nhân dân Việt Nam: mọi giai cấp, tầng lớp, dân tộc, tôn giáo, giới tính, lứa tuổi, người Việt Nam trong và ngoài nước, miễn là có lòng yêu nước và muốn phụng sự Tổ quốc.

#### 3. Nền tảng của khối đoàn kết
Nền tảng là liên minh công nhân, nông dân và trí thức dưới sự lãnh đạo của Đảng. Đồng thời, phải mở rộng đoàn kết với tất cả lực lượng yêu nước.

## Lesson 2. Nguyên tắc và hình thức tổ chức đại đoàn kết

### Tóm tắt
Đại đoàn kết phải dựa trên lợi ích chung của dân tộc, có tổ chức, có lãnh đạo, thực hiện qua Mặt trận dân tộc thống nhất và nguyên tắc hiệp thương dân chủ.

### Nội dung chính

#### 1. Lấy lợi ích dân tộc làm điểm tương đồng
Muốn đoàn kết phải tìm điểm chung, tôn trọng khác biệt không trái lợi ích dân tộc. Mục tiêu chung là độc lập, thống nhất, tự do, hạnh phúc cho nhân dân.

#### 2. Mặt trận dân tộc thống nhất
Mặt trận là hình thức tổ chức của khối đại đoàn kết. Đảng lãnh đạo Mặt trận nhưng phải tôn trọng nguyên tắc tự nguyện, hiệp thương dân chủ, đoàn kết lâu dài, chân thành.

#### 3. Đoàn kết gắn với đấu tranh
Đoàn kết không có nghĩa là xuôi chiều, che giấu sai lầm. Cần đấu tranh chống chia rẽ, hẹp hòi, định kiến, đồng thời xây dựng sự thống nhất thật sự.

## Lesson 3. Đoàn kết quốc tế

### Tóm tắt
Đoàn kết quốc tế là kết hợp sức mạnh dân tộc với sức mạnh thời đại. Cách mạng Việt Nam là một bộ phận của cách mạng thế giới.

### Nội dung chính

#### 1. Lực lượng đoàn kết quốc tế
Hồ Chí Minh chủ trương đoàn kết với phong trào cộng sản và công nhân quốc tế, các nước xã hội chủ nghĩa, các dân tộc bị áp bức, các lực lượng hòa bình, dân chủ và tiến bộ trên thế giới.

#### 2. Nguyên tắc đoàn kết quốc tế
Độc lập, tự chủ; tôn trọng lẫn nhau; bình đẳng, cùng có lợi; kết hợp lợi ích dân tộc với nghĩa vụ quốc tế trong sáng.

#### 3. Ý nghĩa
Nhờ đoàn kết quốc tế, cách mạng Việt Nam tranh thủ được sự đồng tình, ủng hộ của nhân dân tiến bộ thế giới, đồng thời đóng góp vào phong trào giải phóng dân tộc và hòa bình thế giới.

---

# Chương 6. Tư tưởng Hồ Chí Minh về văn hóa, đạo đức, con người

## Lesson 1. Tư tưởng Hồ Chí Minh về văn hóa

### Tóm tắt
Văn hóa là một mặt trận, có vai trò soi đường cho quốc dân đi. Văn hóa phải phục vụ nhân dân, phục vụ kháng chiến, kiến quốc và xây dựng con người mới.

### Nội dung chính

#### 1. Khái niệm văn hóa
Hồ Chí Minh nhìn văn hóa như tổng hợp các phương thức sinh hoạt và biểu hiện do con người sáng tạo ra để thích ứng với nhu cầu đời sống và sự sinh tồn.

#### 2. Vị trí của văn hóa
Văn hóa thuộc kiến trúc thượng tầng nhưng có quan hệ chặt chẽ với kinh tế, chính trị, xã hội. Chính trị giải phóng mở đường cho văn hóa phát triển; văn hóa góp phần thúc đẩy chính trị và kinh tế.

#### 3. Chức năng của văn hóa
Văn hóa bồi dưỡng tư tưởng đúng đắn, nâng cao dân trí, bồi dưỡng phẩm chất tốt đẹp, hướng con người tới chân - thiện - mỹ.

#### 4. Xây dựng nền văn hóa mới
Nền văn hóa mới phải có tính dân tộc, khoa học và đại chúng; chống lạc hậu, mê tín, xa hoa, lười biếng, tham nhũng và các thói hư tật xấu.

## Lesson 2. Tư tưởng Hồ Chí Minh về đạo đức

### Tóm tắt
Đạo đức là gốc của người cách mạng. Người có tài mà không có đạo đức thì không lãnh đạo được nhân dân và khó làm việc lớn.

### Nội dung chính

#### 1. Vai trò của đạo đức
Đạo đức là nền tảng của người cách mạng, giống như gốc của cây, nguồn của sông. Đạo đức giúp người cách mạng vượt qua khó khăn, chống chủ nghĩa cá nhân và giữ vững lý tưởng.

#### 2. Chuẩn mực đạo đức cách mạng
Các chuẩn mực cơ bản gồm: trung với nước, hiếu với dân; cần, kiệm, liêm, chính, chí công vô tư; thương yêu con người; có tinh thần quốc tế trong sáng.

#### 3. Nguyên tắc xây dựng đạo đức
Nói đi đôi với làm; xây đi đôi với chống; tu dưỡng đạo đức suốt đời; nêu gương của cán bộ, đảng viên.

#### 4. Chống chủ nghĩa cá nhân
Chủ nghĩa cá nhân được xem là căn bệnh nguy hiểm, đẻ ra nhiều thói xấu như tham ô, lãng phí, quan liêu, kiêu ngạo, cục bộ, bè phái.

## Lesson 3. Tư tưởng Hồ Chí Minh về con người

### Tóm tắt
Con người vừa là mục tiêu, vừa là động lực của cách mạng. Hồ Chí Minh nhìn con người như một chỉnh thể thống nhất giữa cá nhân và xã hội, đức và tài, quyền lợi và nghĩa vụ.

### Nội dung chính

#### 1. Con người là vốn quý nhất
Mọi đường lối, chính sách phải hướng tới con người, giải phóng con người, đem lại cuộc sống ấm no, tự do, hạnh phúc.

#### 2. Con người là động lực cách mạng
Nhân dân là chủ thể sáng tạo lịch sử. Cách mạng muốn thành công phải tin dân, dựa vào dân, phát huy sức dân.

#### 3. Xây dựng con người mới
Muốn xây dựng chủ nghĩa xã hội trước hết cần có con người xã hội chủ nghĩa. Con người mới phải có lý tưởng, đạo đức, tri thức, sức khỏe, năng lực lao động, tinh thần tập thể và ý thức làm chủ.

#### 4. Chiến lược trồng người
Giáo dục, đào tạo con người là công việc lâu dài. Vì lợi ích mười năm trồng cây, vì lợi ích trăm năm trồng người. Trong web học tập, phần này có thể trình bày bằng timeline hoặc infographic về giáo dục, đạo đức và trách nhiệm công dân.

---

# Bảng tổng ôn nhanh

| Chủ đề | Luận điểm cần nhớ | Dễ nhầm với |
|---|---|---|
| Khái niệm tư tưởng Hồ Chí Minh | Hệ thống quan điểm toàn diện, sâu sắc về cách mạng Việt Nam | Không phải chỉ là tư tưởng cá nhân hoặc vài câu nói riêng lẻ |
| Cơ sở quyết định tính khoa học, cách mạng | Chủ nghĩa Mác - Lênin | Truyền thống dân tộc là cơ sở quan trọng nhưng không phải yếu tố quyết định bản chất khoa học, cách mạng |
| Con đường cứu nước | Độc lập dân tộc gắn liền với chủ nghĩa xã hội | Không phải con đường phong kiến hoặc dân chủ tư sản |
| Cách mạng thuộc địa | Nhiệm vụ hàng đầu là giải phóng dân tộc | Không đồng nhất với đấu tranh giai cấp thuần túy ngay từ đầu |
| Đảng Cộng sản Việt Nam | Kết hợp chủ nghĩa Mác - Lênin, phong trào công nhân và phong trào yêu nước | Không chỉ là sản phẩm của phong trào công nhân |
| Nhà nước | Của dân, do dân, vì dân | Không phải nhà nước đứng trên nhân dân |
| Đại đoàn kết | Vấn đề chiến lược, quyết định thành công | Không phải thủ đoạn chính trị tạm thời |
| Văn hóa | Soi đường cho quốc dân đi | Không chỉ là văn nghệ, lễ hội |
| Đạo đức | Gốc của người cách mạng | Không thể thay thế bằng tài năng đơn thuần |
| Con người | Mục tiêu và động lực của cách mạng | Không chỉ là đối tượng quản lý |

---

# Mốc thời gian ôn thi

| Năm/thời điểm | Sự kiện | Ý nghĩa |
|---|---|---|
| 5/6/1911 | Nguyễn Tất Thành ra đi tìm đường cứu nước | Bắt đầu hành trình tìm con đường cứu nước mới |
| 1919 | Gửi bản yêu sách của nhân dân An Nam | Đòi quyền dân tộc, dân chủ tại Hội nghị Versailles |
| 1920 | Đến với Luận cương của Lênin, tham gia Đại hội Tours | Chuyển biến từ chủ nghĩa yêu nước đến chủ nghĩa cộng sản |
| 1925 | Bản án chế độ thực dân Pháp | Tố cáo chủ nghĩa thực dân, thức tỉnh các dân tộc thuộc địa |
| 1927 | Đường Kách mệnh | Chuẩn bị lý luận, chính trị, tổ chức cho cách mạng Việt Nam |
| 1930 | Thành lập Đảng Cộng sản Việt Nam | Bước ngoặt lịch sử của cách mạng Việt Nam |
| 28/1/1941 | Hồ Chí Minh về nước | Trực tiếp lãnh đạo cách mạng Việt Nam |
| 1945 | Cách mạng Tháng Tám, Tuyên ngôn Độc lập | Khai sinh nước Việt Nam Dân chủ Cộng hòa |
| 1946 | Tổng tuyển cử, Hiến pháp đầu tiên | Xây dựng nhà nước hợp hiến, hợp pháp |
| 1965 | “Không có gì quý hơn độc lập, tự do” | Chân lý thời đại về độc lập và tự do |
| 1969 | Di chúc, Nâng cao đạo đức cách mạng | Tổng kết tư tưởng về Đảng, đạo đức, con người |

---

# Gợi ý chia route cho web tĩnh

```txt
/
/theory
/theory/chuong-1
/theory/chuong-2
/theory/chuong-3
/theory/chuong-4
/theory/chuong-5
/theory/chuong-6
/quiz
/quiz?chapter=chuong_1_nhap_mon
/review/timeline
/review/flashcards
```

# Gợi ý tính năng quiz

- Lọc câu hỏi theo chương.
- Random câu hỏi theo số lượng: 10, 20, 50 câu.
- Sau khi chọn đáp án: hiện đúng/sai, đáp án đúng và giải thích.
- Nếu `answer_key = null`: hiển thị nhãn “Cần duyệt đáp án”, không tính điểm.
- Lưu tiến độ vào `localStorage`.
- Có chế độ “ôn sai”: lưu lại các câu người học trả lời sai.

# Prompt ngắn cho Claude Code

```txt
Hãy tạo một web tĩnh học môn Tư tưởng Hồ Chí Minh bằng React + Vite + TypeScript. Dùng file hcm_theory_content.md để xây dựng trang lý thuyết 6 chương. Dùng hcm_quiz_bank.json làm ngân hàng câu hỏi. Yêu cầu: giao diện tiếng Việt, responsive, có trang lý thuyết, quiz, flashcard, timeline, lọc câu theo chương, random quiz, chấm điểm, giải thích đúng/sai, lưu câu sai vào localStorage. Với câu có answer_key=null, hiển thị “Cần duyệt đáp án” và không tính điểm.
```
