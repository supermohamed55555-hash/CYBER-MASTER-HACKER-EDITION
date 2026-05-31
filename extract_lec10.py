import os
try:
    import pypdf
except ImportError:
    os.system("pip install pypdf")
    import pypdf

reader = pypdf.PdfReader("lectures/Lec 10 Cybersecurity.pdf")
print("Total Pages:", len(reader.pages))
text_content = []
for i, page in enumerate(reader.pages):
    text_content.append(f"--- Page {i+1} ---")
    text_content.append(page.extract_text())

# Create scratch dir if not exist
os.makedirs("scratch", exist_ok=True)
with open("scratch/lec10_content.txt", "w", encoding="utf-8") as f:
    f.write("\n".join(text_content))
print("Successfully extracted Lec 10 text to scratch/lec10_content.txt")
