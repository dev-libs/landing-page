#!/bin/bash
cp ./*.html ./dist/
cp -R ./css ./dist/
cp -r ./fonts ./dist/
cp -r ./scripts ./dist/
cp -r ./videos ./dist/
cp ./README.md ./dist/
git add -A
git commit -m "Deploy to netlify"
git push
git subtree push --prefix dist origin netlify