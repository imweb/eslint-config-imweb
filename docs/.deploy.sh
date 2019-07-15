#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 新建 Git 仓库
git init
git add -A
git commit -m 'deploy doc'

# 发布到 Github
git push -f https://github.com/imweb/eslint-config-imweb.git master:gh-pages
