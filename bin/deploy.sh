#!/bin/bash
set -e

npm test

webpack

aws s3 sync --delete public/ s3://nattawat-react-timer/

echo "App has been deployed on:"
echo "http://nattawat-react-timer.s3-website-ap-southeast-2.amazonaws.com/"
