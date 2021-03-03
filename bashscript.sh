#! /usr/bin/bash

read -p "Type your password" PASS 
if [ "$PASS" == "0000" ]
then
    echo "welcome"
elif [ "$PASS" == "" ]
then
    echo "empty input!"
else
    echo "permission denied"
fi

