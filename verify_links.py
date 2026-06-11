import re
import os
import urllib.request
import ssl

room_path = "src/data/roomContent.js"
theory_path = "src/data/theoryData.js"

urls = set()

if os.path.exists(room_path):
    with open(room_path, 'r', encoding='utf-8') as f:
        content = f.read()
        for u in re.findall(r'https?://[^\s"\',`]+', content):
            urls.add(u)

if os.path.exists(theory_path):
    with open(theory_path, 'r', encoding='utf-8') as f:
        content = f.read()
        for u in re.findall(r'https?://[^\s\)"\',`]+', content):
            urls.add(u)

print(f"Found {len(urls)} unique URLs. Verifying...")

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

for url in sorted(urls):
    # Standardize links that might have tailing punctuation
    clean_url = url.rstrip('.)]')
    try:
        req = urllib.request.Request(
            clean_url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
        )
        with urllib.request.urlopen(req, context=ctx, timeout=5) as response:
            print(f"[OK] {response.status} : {clean_url}")
    except Exception as e:
        print(f"[BROKEN] {type(e).__name__} : {clean_url} (Error: {e})")
