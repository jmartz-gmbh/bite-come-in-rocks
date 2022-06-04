#!/bin/bash

docker build -t jomartz/come-in-rocks:v0.1 . --no-cache
docker image push jomartz/come-in-rocks:v0.1