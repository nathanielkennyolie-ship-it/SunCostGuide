#!/usr/bin/env python3
"""Stub — adds shadcn/ui components."""
import sys, subprocess
components = sys.argv[1:] if len(sys.argv) > 1 else []
if not components:
    print("Usage: python shadcn_add.py button card dialog")
    sys.exit(1)
for c in components:
    subprocess.run(["npx", "shadcn@latest", "add", c, "--yes"])
