#!/bin/bash
echo "Testing frontend accessibility..."
curl -I http://localhost:80  # Replace with the port your frontend is running on
if [ $? -eq 0 ]; then
    echo "Frontend is accessible!"
else
    echo "Frontend test failed!" && exit 1
fi
