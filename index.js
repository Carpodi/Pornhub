const RPC = require('discord-rpc');
const chalk = require("chalk");
const rpc = new RPC.Client({
    transport: 'ipc'
});
rpc.on('ready', () => {
    rpc.setActivity({
        details: 'Mirando: https://pornhub.com',
        state: 'Videos vistos: 150+',
        startTimestamp: new Date(),
        largeImageKey: 'chrome',
        largeImageText: 'Google Chrome',
        smallImageKey: 'pornhub',
        smallImageText: 'https://pornhub.com',
        buttons: [{
            label: 'Web',
             url: 'https://pornhub.com'
        }, { 
            label: 'Actual Video', 
             url: 'https://carpodi.xyz'
        
        }]
    });
    console.clear();
    process.title = 'Discord RPC made by Carpodi'
   console.log(chalk.blue("──────────────────────────────────────────────────"))
   console.log(chalk.red("─████████████████───██████████████─██████████████─"))
   console.log(chalk.red("─██░░░░░░░░░░░░██───██░░░░░░░░░░██─██░░░░░░░░░░██─"))
   console.log(chalk.red("─██░░████████░░██───██░░██████░░██─██░░██████████─"))
   console.log(chalk.red("─██░░██────██░░██───██░░██──██░░██─██░░██─────────")) 
   console.log(chalk.red("─██░░████████░░██───██░░██████░░██─██░░██─────────"))
   console.log(chalk.red("─██░░░░░░░░░░░░██───██░░░░░░░░░░██─██░░██─────────"))
   console.log(chalk.red("─██░░██████░░████───██░░██████████─██░░██─────────"))
   console.log(chalk.red("─██░░██──██░░██─────██░░██─────────██░░██─────────"))
   console.log(chalk.red("─██░░██──██░░██████─██░░██─────────██░░██████████─"))
   console.log(chalk.red("─██░░██──██░░░░░░██─██░░██─────────██░░░░░░░░░░██─"))
   console.log(chalk.red("─██████──██████████─██████─────────██████████████─"))
   console.log(chalk.blue("──────────────────────────────────────────────────"))
   console.log(chalk.blue.bold("Discord custom rpc status made by carpodi"));
   console.log(chalk.red.bold("Satus loaded succesfully."));
   console.log(chalk.red.bold("NOTE: If you close this window the status will be deactivated."))
})
rpc.login({
    clientId: 'Your-ClientID'
})