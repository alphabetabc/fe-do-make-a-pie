#!/usr/bin/env sh

set -e

pnpm run build:gh-pages

cd dist

git init
git config user.name 'alpabetX'
git config user.email 'alphabet_working_pc@inner.mail'
git add -A
git commit -m 'deploy'

git push -f git@github.com:alphabetabc/fe-do-make-a-pie.git master:gh-pages

rimraf ./.git/
cd -