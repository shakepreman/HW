var AWS = require('aws-sdk');
var fs = require('fs');
AWS.config.loadFromPath('./aws_config.json');

var ec2 = new AWS.EC2();

var params = {
  ImageId: 'ami-d05e75b8', 
  InstanceType: 't2.micro',
  KeyName: 'key1',
  MinCount: 1, MaxCount: 1
};

var instanceId;
// Create the instance
ec2.runInstances(params, function(err, data) {
  if (err) { console.log("Could not create instance", err); return; }

  instanceId = data.Instances[0].InstanceId;
  console.log("Created instance", instanceId);
});

var ipAddress;
var loop = setInterval(function(){
ec2.describeInstances({InstanceIds: [instanceId]}, function(err, data){
  var stateName = data.Reservations[0].Instances[0].State.Name;
  if (err) { console.log(err, err.stack); }
  else if( stateName != null && stateName == 'running'){
    ipAddress = data.Reservations[0].Instances[0].PublicIpAddress;
    var inventoryString = "[nginx]\nshake ansible_ssh_host="+ipAddress+" ansible_connection=ssh ansible_ssh_user=ubuntu ansible_ssh_private_key_file=./keys/digital_ocean.key";
    fs.writeFile("./inventory", inventoryString, function(err) {
      if(err) {
        return console.log(err);
      }
    console.log("The file was saved!");
    clearInterval(loop);
    });
  }  
});
},5000);
