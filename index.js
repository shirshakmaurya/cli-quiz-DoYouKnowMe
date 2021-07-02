var readlineSync = require('readline-sync');
const chalk = require('chalk')
var score = 0;

var name = readlineSync.question("Please enter your name: ");
console.log(chalk.bold.red("Hello "+chalk.bgBlue.white.bold(name)+" Let's see do you know me !! "));

const questions = [
  {question:`Where do i live?
    a. prayagraj 
    b. kanpur
    c. bihar
    d. mars\n`,
  answer: "a"
  },
  {question: `Am i maried
    a. NO
    b. YES\n`,
   answer: "a"
   },
   {question: `Who is my favourite marvel character
      a. Hulk
      b. Thor
      c. Captain america
      d. Iron Man\n`,
      answer: "d"
      },
     {question:`What i like to use
      a.Iphone
      b.Android\n`,
      answer:"b"
      },
     {question: `Who is favourite cricketer
        a. Virat kohli
        b. Suresh Raina
        c. M.S. Dhoni
        d. Rohit Sharma\n`,
        answer: "c"
     },
     {question: `What is my favourite snack/junk food
       a. Samosa
       b. momos
       c. burger
       d. maggie\n`,
       answer: "d"
     }, 
     {question:`Which is my favourite colour
      a. Blue
      b. Red
      c. Green
      d. Black
     \n`,
      answer:"a"
     },
     {question:`Do i know russian language?
      a. Yes
      b. No\n`,
       answer:"b"
     },
     {question:`Which is my favourite fruit
      a. Banana 
      b. Mango
      c. Apple
      d. Grapes\n`,
       answer:"b"
     },
     {question:`Do i know how to drive a car?
      a. Yes
      b. No \n`,
       answer:"b"
     }, 
   ]
   const highScores=[
     {
     name:"Gudda",
     hiScore:"10"
     },
     {name:"Don",
      hiScore: "8"
     },
     {name:"robo",
      hiScore:"7"}
     ];
  function checkAnswer(currentQuestion, userAnswer){
    if(questions[currentQuestion].answer == userAnswer){
      console.log(chalk.green("\nRight Answer\n"));
      score++;
      }
    else{
      console.log(chalk.red.bold("\nWrong Answer\n"));
    }
     console.log(chalk.blue.bold("Your Score is: ") + chalk.white.bgBlue.bold(score));
     console.log("\n----------------------\n");
  }
  
  function displayHighScores(){
    console.log("\n"+chalk.blue.bold("HIGH SCORES"));
    console.log("\n"+chalk.bold.green("Place     Name     HighScore"));
    for(var i=0;i<3;i++){
      console.log((i+1)+"        "+highScores[i].name+"        "+highScores[i].hiScore+"\n");
      
    }
    if(score>7){
      console.log(chalk.green.bold("Hurrayyyy!! you have beaten a high score.\n"));
      console.log("Send screenshot to get you name in high score!!"); 
      } 
   }
  var userAnswer;
  // console.log(questions.length);
   for(var i=0;i<questions.length;i++){
     console.log(questions[i].question);
        userAnswer = readlineSync.question();
        checkAnswer(i,userAnswer);   

        
   }
   displayHighScores();