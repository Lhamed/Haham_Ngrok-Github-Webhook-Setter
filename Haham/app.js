// Haham means Pigeon in arabic.
// It helps set the webhook between github & jenkis like Pigeon. 
// Mit License 2018 
// Made by Lhamed ( Jung Youn Jae) 


var request = require('request');
var openURL = require("openurl");
const ngrok = require('ngrok');


var Repo = "";
var OwnerId = "";
var hookId = "";
var githubId = '';
var githubSceretKey = '';


console.log("+---------------------------------------------------------------+");
console.log("|                    .xxxxx                                     |   ");
console.log("|                 xxxx    .xxxxx                                |   ");
console.log("|               xxx          ..xx                               |   ");
console.log("|    .xxxxxxxxxxx   xxxx..     ..xx                             |   ");
console.log("|    .xx........x  xxxxxxxxxx   ..xx                            |   ");
console.log("|     ..xx     x.  xxxx.x        . x              xxxxx         |   ");
console.log("|        .xx   x.  xxxx.x        ..x             xx   xx        |   ");
console.log("|          x..  x                 .x            xx ... x        |   ");
console.log("|          xx   xx                 x           xx... .. x       |   ");
console.log("|        .xx     x                 x.       xxx..     .  x      |   ");
console.log("|      ..x      xx                 x.xxxxxxxx.        .  xx     |   ");
console.log("|     xxxxxxxxxxxx.                                   .   x     |   ");
console.log("|               x .                   xxxx           ..   xx    |   ");
console.log("|               x .                      xxxxx       .    xx    |   ");
console.log("|               xx..                   xxx          ..    x     |   ");
console.log("|                xx...                  xx         ..    xx     |   ");
console.log("|                 xx  ...        xxxxxxx         ...   xx       |   ");
console.log("|                  xx   ....                  ....   xxx        |   ");
console.log("|                    xxx    ..........   .....     xxx          |   ");
console.log("|                       xxxxxxxxxxxxx....xxxxxxxxxx             |   ");
console.log("|         x                x                                    |   ");
console.log("|         x                x                x                   |   ");
console.log("|         xxxx      xx     xxxxxx    xxx    xxxxxx  xxx         |   ");
console.log("|         xx xxx  xx xx    xx   xx xxx xx   xx   xxx  x         |  ");
console.log("|         x    x x   xxx   xx    xxxxxx xxxxx     x   x         |   ");
console.log("|         x    x xxxxx xxxx x         xxx   x                   |  ");
console.log("|                                                               | ");
console.log("+---------------------------------------------------------------+ ");

console.log("[haham] : hi! my name is ha-ham . the pigeon helps mr.jenkins ! ");
console.log("[haham] : I should ask some question to help him.  ");
const readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.setPrompt("Answer>>");
console.log("[haham] : what is Your Github ID ? (UserName)")
rl.prompt();
rl.on("line", (data) => {
    githubId = data;
    rl.close();
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log("[haham] : thanks.")
    rl.setPrompt("Answer>>");
    console.log("[haham] : what is Your Repo Name ? (Repo)");
    rl.prompt();
    rl.on("line", (data) => {
        Repo = data;
        rl.close();
        rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.setPrompt("Answer>>");
        console.log("[haham] : what is Your Web-hook id ? (hook)");
        rl.prompt();
        rl.on("line", (data) => {
            hookId = data;
            rl.close();
            rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });
            rl.setPrompt("Answer>>");
            console.log("[haham] : what is Your github token ? (token)");
            rl.prompt();
            rl.on("line", (data) => {
                githubSceretKey = data;
                rl.close();
                ngrok.connect(8080).then(result => SetWebhookPatch(result));
                openURL.open("http://localhost:4040");
            });
        });
    });
});

function SetWebhookPatch(newurl) {
    request
        .patch(
            'https://api.github.com/repos/' + githubId + '/' + Repo + '/hooks/' + hookId,
            {
                headers:
                {
                    "content-type": "application/json",
                    'user-agent': githubId,
                    'Authorization': 'token ' + githubSceretKey
                },

                json:
                {
                    config:
                    {
                        url: newurl
                    },

                },
            },
            function (error, response, body) {
                console.log('error:', error); 
                console.log('statusCode:', response && response.statusCode); 
                console.log('body:', body); 
            }
        );
}


