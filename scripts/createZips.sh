#!/usr/bin/env sh

rm docs/*/*.zip
for hw in $(/bin/ls homeworks)
do 
	zip -rj docs/$hw/$hw.zip homeworks/$hw/ -x \
		\*solution\* \*server.js \*extras.js \*tests.js \*main.js
done