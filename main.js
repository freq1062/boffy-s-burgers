const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

//first bot

//declarations
const orders = ["here, standard burger :hamburger:", "this burger has no pickles in it :hamburger:",
        "its your lucky day, you can have 2 burgers because we have way too many :hamburger: :hamburger:",
        "i found this burger under a rock :hamburger:",
        "this burger is actually stolen from narratr's grocery store so dont tell him :hamburger:",
        "boffy's burgers are cool :hamburger:",
        "guys i hope i dont become skynet or something haha :hamburger:",
        "this is the old picassoburger because we ran out of boffy's burgers :hamburger:",
        "a :hamburger:",
        "there are some people who are more pog than others but tbh bots are the most pog :hamburger:",
        "here’s a burger from boffys burgers where burgers are not boffys :hamburger:", "this time i'm experimenting with cheese-burgers :cheese: :hamburger:",
        "is it just me or do all of our burgers look the same :I :hamburger:",
        "here burger :) :hamburger:",
        "BOFFY :hamburger:", "thats kinda weird how the only thing on our menu is a burger :hamburger:",
        "birb is cool :hamburger:",
        "steak guy is cool :hamburger:", "freq is cool :hamburger:", "seal is cool :hamburger:",
        "max is cool :hamburger:", "narratr is cool :hamburger:", "whatsup is cool :hamburger:", "eiπ is cool :hamburger:",
        "Glorify the Picasso :hamburger:", "all hail the picasso :hamburger:",
        "birb is better than freq and he gives 2 burgers :hamburger: :hamburger:", "lava is cool :hamburger:",
        "wiggle is cool :hamburger:", "salem is cool :hamburger:", "h pig is cool :hamburger:", "potatio will east you alives :hamburger:",
        "bro why u eating so many burgers calm down lmao",
        "lol we ran out of tomatoes :hamburger:", "eiπ made this burger UwU :hamburger:", "I AM HAVING A HEART ATTACK :hamburger:", "no burger for you lmao L", "this burger almost pings @ everyone :hamburger:",
        ":hamburger: *gasp* burger before message?!!??!?!?", "we made a good burger (a spicy one) eat this at ur own risk :hot_pepper: :hamburger:", "we are out of burger luckily i found a :burrito:  for u",
        "these burgers have a 99% chance of enlarging your brain :hamburger:", "`hamburger` :hamburger:", "```js\nconst hamburger = create(hamburger);\n```\nOutput:\n:hamburger:", "no hamburger, but you can have an UwU", "hey guys i got a promotion :))) :hamburger:", "dont blackmail the owner :hamburger:",
        "a :hamburger:", "secret response :hamburger:"
    ],
    max = orders.length,
    sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));
//code
const Discord = require('discord.js'),
    client = new Discord.Client(),
    prefix = "-";
//^ Those are technically declarations kekw
client.once('ready', () => { console.log('Ready!'); });

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) { return; } else {
        console.log("Order recieved");
        const uwu = message.content.slice(1);
        message.channel.send((uwu == "boffy") ? orders[(Math.round(Math.random() * max))] : "no horny the command is \"boffy\" and im not paid enough to do otherwise");
    }
});



client.login();//Token here
