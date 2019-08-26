#!/bin/bash
cp ./index.html ./dist/
cp -R ./css ./dist/
cp ./README.md ./dist/
git subtree push --prefix dist origin master