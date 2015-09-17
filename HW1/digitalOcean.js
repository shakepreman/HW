var needle = require("needle");
var os   = require("os");
var fs = require('fs');

var jsonConfigFile = fs.readFileSync('./digital_ocean_config.json');

var jsonConfig;

try {
	jsonConfig = JSON.parse(jsonConfigFile);
} catch(err) {
	console.log("ERROR parsing config: "+err);
}
var config = {};
config.token = jsonConfig.token;

var headers =
{
	'Content-Type':'application/json',
	Authorization: 'Bearer ' + config.token
};


var client =
{
	listKeys: function( onResponse )
	{
		needle.get("https://api.digitalocean.com/v2/account/keys", {headers:headers}, onResponse)
	},

	listRegions: function( onResponse )
	{
		needle.get("https://api.digitalocean.com/v2/regions", {headers:headers}, onResponse)
	},

	listImages: function( onResponse )
	{
		needle.get("https://api.digitalocean.com/v2/images", {headers:headers}, onResponse)
	},

	retrieveDroplet: function( id, onResponse )
	{
		needle.get("https://api.digitalocean.com/v2/droplets/"+id, {headers:headers}, onResponse)
	},

	deleteDroplet: function( id, onResponse )
	{
		needle.delete("https://api.digitalocean.com/v2/droplets/"+id, {headers:headers}, onResponse)
	},

	createDroplet: function (dropletName, region, imageName, onResponse)
	{
		var data = 
		{
			"name": dropletName,
			"region":region,
			"size":"512mb",
			"image":imageName,
			// Id to ssh_key already associated with account.
			"ssh_keys":[jsonConfig.key],
			//"ssh_keys":null,
			"backups":false,
			"ipv6":false,
			"user_data":null,
			"private_networking":null
		};

		console.log("Attempting to create: "+ JSON.stringify(data) );

		needle.post("https://api.digitalocean.com/v2/droplets", data, {headers:headers,json:true}, onResponse );
	}
};

var dropletId;
var name = "apreman";
var region = "nyc1"; 
var image = "ubuntu-14-04-x64"; 
var ip;
client.createDroplet(name, region, image, function(err, resp, body)
{
	// StatusCode 202 - Means server accepted request.
	if(!err && resp.statusCode == 202)
	{
		dropletId = body.droplet.id;
		console.log( JSON.stringify( body, null, 3 ) );
	}
});

var loop = setInterval(function(){
	client.retrieveDroplet(dropletId, function(err, resp)
	{
		if(resp.body.droplet != null && resp.body.droplet.networks.v4.length > 0){
			ip = resp.body.droplet.networks.v4[0].ip_address;
			var inventoryString = "\n[nginx]\n"+name+" ansible_ssh_host="+ip+" ansible_ssh_user=root ansible_ssh_private_key_file=./keys/digital_ocean.key"
			fs.appendFile("./inventory", inventoryString, function(err) {
			    if(err) {
			        return console.log(err);
			    }

			    console.log("The file was saved!");
			}); 
			clearInterval(loop);
		}
	});
},5000);
