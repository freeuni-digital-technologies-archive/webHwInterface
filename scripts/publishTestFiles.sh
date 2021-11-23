#!/usr/bin/env sh

changes=$(git status --porcelain)
if [ ! -z $changed ]
then
	echo "changes exist in repository. commit first"
	exit 1
fi

echo $2

current_branch=$(git branch --show-current)
rm -r dist
yarn build-student-tests

git checkout dist
cp -r dist/* docs/
git add .
git commit -m "auto commit"
git push
git checkout $current_branch


