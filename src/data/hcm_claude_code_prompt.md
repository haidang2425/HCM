# Prompt cho Claude Code trong VSCode

Bạn đang xây dựng một web tĩnh học tập môn Tư tưởng Hồ Chí Minh bằng React + Vite + TypeScript + Tailwind.

## File dữ liệu có sẵn
- `src/data/hcm_theory_content.md`: nội dung lý thuyết theo chương.
- `src/data/hcm_quiz_verified_public.json`: ngân hàng quiz đã có đáp án, giải thích ngắn, chương, feedback từng lựa chọn. Không có `answer_key: null`.
- `src/data/hcm_media_manifest.json`: danh sách link bài viết, gợi ý hình ảnh, caption theo từng chương.

## Yêu cầu chức năng
1. Tạo trang Home có hero, giới thiệu môn học, nút vào học lý thuyết và nút luyện quiz.
2. Tạo trang Theory:
   - Hiển thị 6 chương.
   - Có sidebar mục lục.
   - Mỗi chương có card “Đọc thêm” lấy từ `hcm_media_manifest.json`.
   - Có block “Mẹo nhớ nhanh” ở cuối mỗi chương.
3. Tạo trang Quiz:
   - Lọc câu hỏi theo chương.
   - Luyện từng câu hoặc làm bài theo bộ 10/20/50 câu.
   - Sau khi chọn đáp án, hiển thị đúng/sai, đáp án đúng, giải thích ngắn và feedback từng lựa chọn.
   - Với câu nhiều đáp án như `AB` hoặc `ABC`, cho phép chọn nhiều lựa chọn.
4. Tạo trang Review:
   - Lưu câu sai vào localStorage.
   - Cho người học luyện lại câu sai.
5. Tạo component MediaCard:
   - Hiển thị title, note, external link.
   - Với ảnh chưa có local file thì dùng placeholder đẹp, không hotlink ảnh nếu chưa chắc quyền sử dụng.
6. Thiết kế giao diện trẻ trung, phù hợp sản phẩm sáng tạo sinh viên, responsive, dễ đọc trên điện thoại.

## Lưu ý kỹ thuật
- Không hard-code câu hỏi vào component. Đọc từ JSON.
- Không tự sửa đáp án trong code.
- Nếu thiếu ảnh local, tạo placeholder gradient và nút “Xem nguồn”.
- Tất cả text tiếng Việt có dấu chuẩn UTF-8.
