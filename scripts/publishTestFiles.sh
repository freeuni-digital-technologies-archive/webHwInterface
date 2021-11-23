#!/usr/bin/env sh

changes=$(git status --porcelain)
echo $changes
if [[ ! -z $changes ]]
then
	echo "changes exist in repository. commit first"
	exit 1
fi

if [[ $2 == "zip" ]]
then
	yarn createZips
fi

current_branch=$(git branch --show-current)
rm -r dist
# make sure changes are synced first
git checkout dist
git pull
# go back to build from source
git checkout $current_branch
yarn build-student-tests
git checkout dist
cp -r dist/* docs/
git add docs/
git commit -m "auto commit"
git push
git checkout $current_branch

