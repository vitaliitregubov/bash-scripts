#! /usr/bin/bash

#IF-ELSE STATEMENT
# read -p "Type your password" PASS 
# if [ "$PASS" == "0000" ]
# then
#     echo "welcome"
# elif [ "$PASS" == "" ]
# then
#     echo "empty input!"
# else
#     echo "permission denied"
# fi

# FILE="file.txt"

# if [ -f file1.txt ]
# then
#     echo "it is a file"
# elif [ -d file1.txt ]
# then
#     echo "it is a directory"
# else
#     echo "it does not exist"
# fi

# CASE STATEMENT
# read -p "are you adult?" ANSWER
# case "$ANSWER" in
#     [y/Y] | [yY][eE][sS])
#         echo "permitted"
#         ;;
#     [nN] | [nN][oO])
#         echo "denied!"
#         ;;
#     *)
#         echo "Invalid input"
#         ;;
# esac

# LOOP
# FILES=$(ls *.txt)
# NEW="new"

# for FILE in $FILES
#     do 
#         echo "renaming $FILE to new-$FILE"
#         mv $FILE $NEW-$FILE
# done

# ls

