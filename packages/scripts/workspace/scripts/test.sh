#!/usr/bin/env bash
echo "┏━━━ 🎯 TEST: $(pwd) ━━━━━━━━━━━━━━━━━━━"
yarn lerna run test --stream --scope @mediamonks/common --scope @mediamonks/brand-*

