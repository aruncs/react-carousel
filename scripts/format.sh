#!/bin/sh
declare -a list 
str=$(git status --porcelain)
echo "foooooo"
echo $str
#IFS='\n'
#read -ra ADDR <<< "$str"
#for i in "${ADDR[@]}"; do
    # process "$i"
    #x=$(i:3)
#    echo $i
#done
#prettier --no-semi --write "../src/components/carousel/Carousel.jsx ../src/components/card/Card.jsx"
#echo $str
