import re
import json

def split_section(text, heading):
    if heading not in text:
        return ""
    part = text.split(heading)[1]
    next_headers = ['\n# ', '\n## ', '\n### ']
    min_idx = len(part)
    for h in next_headers:
        idx = part.find(h)
        if idx != -1 and idx < min_idx:
            min_idx = idx
    return part[:min_idx].strip()

def parse_markdown():
    with open('src/data/hcm_theory_content.md', 'r', encoding='utf-8') as f:
        content = f.read()

    # Normalize newlines
    content = content.replace('\r\n', '\n')

    # Split by chapters
    chapter_blocks = content.split('\n# Chương ')
    
    chapters = []
    
    for block in chapter_blocks[1:]:
        lines = block.strip().split('\n')
        chapter_title = lines[0].strip()
        chapter_id = 'chuong_' + chapter_title.split('.')[0].strip()
        
        # Split by lessons
        lesson_blocks = block.split('\n## Lesson ')
        
        lessons = []
        for l_block in lesson_blocks[1:]:
            l_block = l_block.strip()
            lesson_title = l_block.split('\n')[0].strip()
            
            # Find Tóm tắt
            summary = ""
            if '### Tóm tắt' in l_block:
                summary = split_section(l_block, '### Tóm tắt')
            
            # Find Nội dung chính
            details = []
            if '### Nội dung chính' in l_block:
                main_part = split_section(l_block, '### Nội dung chính')
                
                # Split by ####
                if '#### ' in main_part:
                    h4_blocks = main_part.split('#### ')
                    for h4 in h4_blocks[1:]:
                        h4 = h4.strip()
                        h_title = h4.split('\n')[0].strip()
                        h_body = '\n'.join(h4.split('\n')[1:]).strip()
                        h_body_paras = [p.strip() for p in h_body.split('\n') if p.strip()]
                        details.append({"heading": h_title, "body": h_body_paras})
                else:
                    main_paras = [p.strip() for p in main_part.split('\n') if p.strip()]
                    details.append({"heading": "Nội dung", "body": main_paras})
            
            # Find Flashcards
            flashcards = []
            if '### Flashcards' in l_block:
                fc_part = split_section(l_block, '### Flashcards')
                fc_lines = fc_part.strip().split('\n')
                
                current_q = ""
                current_a = ""
                for line in fc_lines:
                    if line.startswith('- **Hỏi:**'):
                         if current_q:
                             flashcards.append({"front": current_q, "back": current_a})
                         current_q = line.replace('- **Hỏi:**', '').strip()
                         current_a = ""
                    elif line.startswith('  **Đáp:**'):
                         current_a = line.replace('  **Đáp:**', '').strip()
                if current_q:
                    flashcards.append({"front": current_q, "back": current_a})

            lessons.append({
                "id": lesson_title.lower().replace(' ', '_').replace('.', ''),
                "chapterId": chapter_id,
                "title": lesson_title,
                "summary": summary,
                "details": details,
                "flashcards": flashcards
            })
            
        chapters.append({
            "id": chapter_id,
            "title": 'Chương ' + chapter_title,
            "lessons": lessons
        })

    output = f"export const theoryData = {json.dumps(chapters, ensure_ascii=False, indent=2)};\n"
    
    with open('src/data/theoryData.js', 'w', encoding='utf-8') as f:
        f.write(output)

if __name__ == '__main__':
    parse_markdown()
