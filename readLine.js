const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const userInfo = {};

rl.question("What's your name?  Nicknames are also acceptable :)\n", (answer) => {
  userInfo.name = answer;
  rl.question("What's an activity you like doing?\n", (answer) => {
    userInfo.hobby = answer;
    rl.question("What do you listen to while doing that?\n", (answer) => {
      userInfo.music = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)?\n", (answer) => {
        userInfo.mealTime = answer;
        rl.question("What's your favourite thing to eat for that meal?\n", (answer) => {
          userInfo.meal = answer;
          rl.question("Which sport is your absolute favourite?\n", (answer) => {
            userInfo.favouriteSport = answer;
            rl.question("What is your superpower?  In a few words, tell us what you are amazing at!\n", (answer) => {
              userInfo.superPower = answer;
              console.log(`My name is ${userInfo.name}.  I like to listen to ${userInfo.music} while ${userInfo.hobby}ing.  My favourite meal is ${userInfo.meal} at ${userInfo.mealTime}, and I love ${userInfo.favouriteSport}.  If I had to choose I would say my superpower is ${userInfo.superPower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});




















rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});
