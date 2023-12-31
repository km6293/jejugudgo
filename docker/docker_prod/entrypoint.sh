#!/bin/sh
sudo service /ssh restart

exec "$@"
bash