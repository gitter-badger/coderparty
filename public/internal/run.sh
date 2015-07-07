#!/bin/sh
# PLEASE DO NOT EDIT
# THIS SCRIPT IS USED FOR RUNNING CODERPARTY

echo "\033[1;34mCoderparty\033[0m by sqrdcat 2015"
echo ""
echo "\033[32m List of arguments :"
echo "	st 	starts the server in background"
echo "	cpt 4949	starts the server with the custom port 4949, use cpd for console output"
echo "	db	starts server without nohup, printing the output to the console. \033[0m" 
echo ""
if [ "$1" = "st" ]; then
	echo "Let the coder party begin..."
	sleep 1
	echo ""
	echo ""
	    if hash meteor 2>/dev/null; then
        echo "Checking if meteor is installed... DONE!"
        echo ""
        echo "Running meteor instance with nohup on port 1969..."
        echo "\033[31m TIP : If the console does not return the prompt, press control-c ! The server will still be running.\033[0m"
        echo ""
        echo "\033[31m TIP : The output of the meteor server will be printed to out.txt\033[0m"
        echo "========================================"
        echo ""
        nohup meteor run -p=1969 > out.txt &
    else
        echo "Checking if meteor is installed... \033[31mFAIL!\033[0m"
        echo ""
        echo "Please install meteor before continuing."
    fi
fi

if [ "$1" = "db" ]; then
	sleep 1
	echo ""
	echo ""
	    if hash meteor 2>/dev/null; then
        echo "Checking if meteor is installed... DONE!"
        echo ""
        echo "Running meteor instance on port 1969..."
        echo ""
        echo "\033[31m TIP : The output of the meteor server will be printed directly to the console.\033[0m"
        echo "========================================"
        echo ""
        meteor run -p=1969
    else
        echo "Checking if meteor is installed... \033[31mFAIL!\033[0m"
        echo ""
        echo "Please install meteor before continuing."
    fi
fi


if [ "$1" = "cpt" ]; then
	PORT=$2;
	sleep 1
	echo "Run the server on port $PORT ?"
	 read -rsp $'(Press ENTER)\n' -n1 key
	 echo ""
	 echo "\033[31mUnderstood.\033[0m"
	 	echo ""
	    if hash meteor 2>/dev/null; then
        echo "Checking if meteor is installed... DONE!"
        echo ""
        echo "Running meteor instance with nohup..."
        echo "\033[31m TIP : If the console does not return the prompt, press control-c ! The server will still be running.\033[0m"
        echo ""
        echo "\033[31m TIP : The output of the meteor server will be printed into out.txt\033[0m"
        echo "========================================"
        echo ""
        nohup meteor run -p=$PORT > out.txt &
        echo ""
        echo "\033[32m == DASHBOARD SERVER STARTED ON BACKGROUND ==\033[0m"
    else
        echo "Checking if meteor is installed... \033[31mFAIL!\033[0m"
        echo ""
        echo "Please install meteor before continuing."
    fi
fi




if [ "$1" = "cpd" ]; then
	PORT=$2;
	sleep 1
	echo "Run the server on port $PORT ?"
	 read -rsp $'(Press ENTER)\n' -n1 key
	 echo ""
	 echo "\033[31mUnderstood.\033[0m"
	    if hash meteor 2>/dev/null; then
        echo "Checking if meteor is installed... DONE!"
        echo ""
        echo "Running meteor instance..."
        echo "\033[31m TIP : If the console does not return the prompt, press control-c ! The server will still be running.\033[0m"
        echo ""
        echo "\033[31m TIP : The output of the meteor server will be printed directly to the console.\033[0m"
        echo "========================================"
        echo ""
        meteor run -p=$PORT
    else
        echo "Checking if meteor is installed... \033[31mFAIL!\033[0m"
        echo ""
        echo "Please install meteor before continuing."
    fi
fi


