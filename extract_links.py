import re
import os

room_path = "src/data/roomContent.js"
theory_path = "src/data/theoryData.js"

print("--- roomContent.js URLs ---")
if os.path.exists(room_path):
    with open(room_path, 'r', encoding='utf-8') as f:
        content = f.read()
        urls = re.findall(r'https?://[^\s"\',`]+', content)
        for url in urls:
            print(url)
        print("\n--- roomContent.js Video IDs ---")
        vids = re.findall(r'id:\s*[\'"]([^\'"]+)[\'"]', content)
        for vid in vids:
            print(vid)

print("\n--- theoryData.js URLs ---")
if os.path.exists(theory_path):
    with open(theory_path, 'r', encoding='utf-8') as f:
        content = f.read()
        urls = re.findall(r'https?://[^\s\)"\',`]+', content)
        for url in urls:
            print(url)
