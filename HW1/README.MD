# HW #1 Provisioning and Configuring Servers
### Setup Steps ###
* install npm
* install node js
* install ansible
* Fetch token and ssh key id for DigitalOcean
* Fetch accessKey and secretKey for the aws user
* Create digital_ocean_config.json file with the following format
```
{"token":"insert your token", "key": "insert your key"}
```
* Create aws_config.json file with the following format
```
{"accessKeyId": "insert your access key>", "secretAccessKey": "insert your secret key>", "region": "us-east-1"}
```
* Create SSH keys. Upload and name your public key to aws and Digital Ocean. 
* Update keyname in aws.js line 10.
* Create a folder named keys.
* Rename private key to digital_ocean.key and place it within the keys folder.
* Run the following script to install dependencies, create droplet/instance and launch the nginx server.
```
sh launch.sh
```
### Screencast Link ###
https://youtu.be/p7HKCZQ3FMU
