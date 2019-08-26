#!/bin/bash
cp ./*.html ./dist/
cp -R ./css ./dist/
cp -r ./fonts ./dist/
cp -r ./scripts ./dist/
cp ./README.md ./dist/
git add -A
git commit -m "Deploy to master"
git push
git subtree push --prefix dist origin master