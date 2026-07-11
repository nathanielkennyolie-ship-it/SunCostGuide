#!/usr/bin/env python3
"""Stub — generates tailwind.config.js with custom theme."""
import json, sys
config = {
    "darkMode": "class",
    "content": ["./src/**/*.{ts,tsx}"],
    "theme": {"extend": {"colors": {}}},
    "plugins": []
}
# Parse --colors and --fonts flags
for i, arg in enumerate(sys.argv):
    if arg == "--colors" and i + 1 < len(sys.argv):
        for pair in sys.argv[i+1].split():
            if ":" in pair:
                k, v = pair.split(":", 1)
                config["theme"]["extend"]["colors"][k] = v
    if arg == "--fonts" and i + 1 < len(sys.argv):
        for pair in sys.argv[i+1].split():
            if ":" in pair:
                k, v = pair.split(":", 1)
                if "fontFamily" not in config["theme"]["extend"]:
                    config["theme"]["extend"]["fontFamily"] = {}
                config["theme"]["extend"]["fontFamily"][k] = [v]
print(json.dumps(config, indent=2))
