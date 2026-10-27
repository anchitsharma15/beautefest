"""Check release assets and links before cloud publication."""
import json
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit

root = Path(sys.argv[1]).resolve()

class Document(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = []
        self.links = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        for key in ('href', 'src'):
            if key in attrs:
                self.links.append(attrs[key])

home = (root / 'index.html').read_text()
assert 'CLIENT REVIEW PREVIEW' not in home, 'Review banner must not reach production'
assert 'Official logo pending' not in home
assert 'assets/beautefest-logo.png' in home
assert 'Skincare, Cosmetics &amp; Makeup' in home or 'Skincare, Cosmetics & Makeup' in home
assert 'data-product-category=' in home
assert 'data-enquiry=' in home
for required in ['assets/beautefest-logo.png', 'favicon.png', 'app.js', 'styles.css', 'robots.txt', 'sitemap.xml', '.nojekyll', 'privacy/index.html']:
    assert (root / required).is_file(), required
for page in root.rglob('*.html'):
    doc = Document()
    doc.feed(page.read_text())
    assert len(doc.ids) == len(set(doc.ids)), f'Duplicate IDs in {page}'
    for link in doc.links:
        parts = urlsplit(link)
        if parts.scheme or parts.netloc:
            continue
        if not parts.path:
            if parts.fragment:
                assert parts.fragment in doc.ids, (page, link)
            continue
        destination = root / parts.path.lstrip('/') if parts.path.startswith('/') else page.parent / parts.path
        assert destination.exists(), (page, link)
print('Approved release passed local asset, page, logo and product-focus checks.')
