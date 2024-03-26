#!/bin/bash

find ./build/static/js -name 'main.*.js' -exec sh -c 'uglifyjs --compress --mangle -- ./build/static/js/main.*.js > $1-compress && cat $1-compress > $1 && rm $1-compress' sh {} \;
