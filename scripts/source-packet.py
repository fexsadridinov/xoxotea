"""Generate a complete readable source snapshot and tracked file inventory."""
from pathlib import Path
import subprocess

root = Path(__file__).resolve().parents[1]
paths = subprocess.check_output(['git', 'ls-files', '-z'], cwd=root).decode().split('\0')
paths = sorted(p for p in paths if p and (root/p).is_file())
code_suffixes = {'.tsx', '.ts', '.css', '.mjs', '.cjs', '.py', '.json', '.yaml', '.svg'}
code = [p for p in paths if (Path(p).suffix in code_suffixes or p == '.gitignore') and not p.startswith('audit/')]
parts = ['# Complete source packet\n\nThis snapshot contains every tracked code, content, configuration and SVG source file, without abbreviated bodies. Binary media and PDFs are present in the repository and inventoried in FILE-TREE.md. Design, assumptions, prompts and audit results have separate complete documents.\n']
for name in code:
    body = (root/name).read_text()
    language = {'.tsx':'tsx', '.ts':'typescript', '.mjs':'javascript', '.cjs':'javascript', '.py':'python', '.svg':'xml'}.get(Path(name).suffix, Path(name).suffix[1:])
    parts.append(f'\n## {name}\n\n````{language}\n{body.rstrip()}\n````\n')
(root/'CODE.md').write_text(''.join(parts))
all_paths = sorted(set(paths + ['CODE.md', 'FILE-TREE.md']))
rows = ['# Complete repository file tree\n\nPaths preserve the full directory hierarchy. Generated build/dependency directories and raw reproducible audit reports are excluded by gitignore.\n\n| Path | Bytes |\n| --- | ---: |\n']
for name in all_paths:
    size = '—' if name == 'FILE-TREE.md' else str((root/name).stat().st_size)
    rows.append(f'| `{name}` | {size} |\n')
(root/'FILE-TREE.md').write_text(''.join(rows))
print(f'{len(code)} complete source files; {len(all_paths)} repository paths')
