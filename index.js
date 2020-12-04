const readline = require('readline-sync');
const chalk = require('chalk');

var username = readline.question("Enter your username ");

console.log();
console.log(chalk.green("------------ Welcome to the F.R.I.E.N.D.S quiz " + username +"! ---------------"));


// variables
var score = 0;
var questions = [];
var options = [];
var q, answer;

//add function
function addQuestion(question, option, a, m) {
  var obj = {};
  obj.question = question;
  obj.options = option;
  obj.answer = a;
  obj.marks = m;
  questions.push(obj);  
}

//quiz function
function quiz() {
  for(var i = 0; i < questions.length; i++) {
    console.log();
    console.log("Q. " + questions[i].question);
    for(var j = 0; j < questions[i].options.length; j++) {
      console.log(j + 1 + ". " + questions[i].options[j]);
    }
    var select = readline.question(chalk.blueBright("Enter your answer: "));
    if(select == questions[i].answer) {
      score += questions[i].marks;
      console.log();
      console.log(chalk.blue("Spot on! " + "Your score is " + score));
    }
    else {
      console.log();
      console.log(chalk.red("Wrong!" + " Your score is " + score));
    }
  }
  console.log();
  console.log(chalk.green(username +" Your final score is " + score));
  console.log(chalk.green("Thanks for having a go. Have a nice one!"));
} 

//questions1
q = "For a brief amount of time, Joey and Chandler weren't roommates. Who replaces Joey as Chandler's new roommate?"
options = ["Eddie", "Russ", "Drunk Bobby"];
answer = 1;
marks = 1;
addQuestion(q, options, answer, marks);



//questions2
q = "What did Ross name his white-headed pet capuchin monkey?";
options = ["Marceil", "Marcel", "Marceila", "Macarena"];
answer = 2;
marks = 1;
addQuestion(q, options, answer, marks);

//questions3
q = "Rachel-Monica are up against Chandler-Joey in a show-style game contest. The competition is getting tough the girls have bet their apartment while the boys vow to_____ if they lose:";
options = ["Teach them how to play poker",
"Give away the rooster and the duck",
"Give them their reclieners",
"All of the abover"];
answer = 2;
marks = 1;
addQuestion(q, options, answer, marks);

////questions4
q = "We all know that Joey's soulmate was his recliner. Do you happen to remember his precious chair's name?";
options = ["Rose", "Rosita", "Rosette", "Rossalie"];
answer = 2;
marks = 1;
addQuestion(q, options, answer, marks);




//questions5
q = "Rachel and Chandler are obsessed with this New York Style cheesecake which was for their neighbour, Mrs. Braverman. Which bakery accidentally delivers the cheesecake to Chandler's address?";
options = ["Mama's Little Bakery",
"The Cheescake Factory",
"Granny's Cafe",
"IHOP"];
answer = 1;
marks = 2;
addQuestion(q, options, answer, marks);


q = "Remember when Monica briefly worked at a retro diner as a server? Would you happen to remember the exact name of the diner where she did her YMCA routine?";
options = ["Moonchild Diner",
"Moonshine Diner",
"MoonDance Diner",
"Moonlight Diner"];
answer = 3;
marks = 2;
addQuestion(q, options, answer, marks);


q = "Phoebe has a very chilling signature artwork that easily spooks people. What does she call her masterpeiece? ";
options = ["Gladys",
"Smelly Cat",
"Glynnis",
"Gyllian"];
answer = 1;
marks = 2;
addQuestion(q, options, answer, marks);


q = "How many times has Ross Geller been married and divorced?";
options = ["Married thrice, two divorces, one anulment",
"Married and divorced thrice",
"Married thrice, two divorces and a seperation"
];
answer = 2;
marks = 3;
addQuestion(q, options, answer, marks);

q = "While discussing her worst Thanksgiving, Monica reveals that she 'accidentally' cuts off Chandler's toe in the past. Would you happen to remember what she was cooking for him?";
options = ["Mac n Cheese",
"Beef triffle",
"Lasagna",
"Mockolate"
];
answer = 1;
marks = 2;
addQuestion(q, options, answer, marks);


q = "We know that Chandler was the one to say the closing lines on the show. What does he say?";
options = ["Let's get some cofee?",
"This is goodbye",
"i love you so much",
"Sure where?"
];
answer = 4;
marks = 3;
addQuestion(q, options, answer, marks);

quiz();

