#!/usr/bin/env bash
echo "┏━━━ 🕵️‍♀️ LINT: eslint src --ext ts,js,tsx,jsx ━━━━━━━"
yarn eslint --cache --max-warning 0 src
