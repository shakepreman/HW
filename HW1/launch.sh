#!/bin/bash
npm install
node aws.js
node digitalOcean.js
sleep 5m
ansible-playbook nginx_play.yml -i inventory
