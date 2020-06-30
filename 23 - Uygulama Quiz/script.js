var Question =function(text,choices,answer){
    this.text=text,
    this.choices=choices,
    this.answer=answer
}
// Questin Prototype

Question.prototype.checkAnswer=function(answer){
    return this.answer===answer;
}

//Quiz Constructor Questionları yönetecek.

function Quiz(questions){
    this.questions=questions;
    this.score=0;
    this.questionIndex=0;
}


//Quiz Prototype
Quiz.prototype.getQuestion = function(){
    return this.questions[this.questionIndex];
}

//Quiz IsFinish

Quiz.prototype.isFinish = function(){
    return this.questions.length === this.questionIndex;
}

//Quiz Guess

Quiz.prototype.guess=function(answer){
    var question=this.getQuestion();

    if(question.checkAnswer(answer)){
        this.score++;
    }
    this.questionIndex++;
}


//Questions
var q1=new Question("türkiyeni baş kenti",["istanbul","ankara","izmir","alanya"],"ankara");

var q2 = new Question("En popular programlama dili hangisidir ?",["c#","javascript","python","java"],"javascript");

var q3= new Question("En modern programlama dili hangisidir ?",["c#","javascript","python","java"],"javascript");

var q4= new Question("En modern programlama dili hangisidir ?",["c#","javascript","python","java"],"javascript");

var questions = [q1,q2,q3];

// Start Quiz

var quiz= new Quiz(questions);

loadQuestion();

function loadQuestion(){
    if(quiz.isFinish()){
        showScore();
    }
    else{
        
        var question=quiz.getQuestion();
        var choices=question.choices;

        document.querySelector('#question').textContent=question.text;
        

        for(var i=0;i<choices.length;i++)
        {
            var element =document.querySelector('#choice'+i);
            element.innerHTML=choices[i];
            guess('btn'+i,choices[i]);
        }

        showProgress();
    }
}

function guess(id,guess){
    var btn = document.getElementById(id);
    btn.onclick = function(){
        quiz.guess(guess);
        loadQuestion()
    }
}

function showScore(){
    var html=`<h2>Score</h2><h4>${quiz.score}</h4>`;

    document.querySelector('.card-body').innerHTML=html;
}

function  showProgress(){
    var totalQuestion = quiz.questions.length;
    var questionNumber=quiz.questionIndex+1;
    document.querySelector('#progress').innerHTML='Question '+questionNumber + ' of '+ totalQuestion;

}
    