var myQuestions = [
    {
        question: "Melyik évben jelent meg az első Vasember című film?",
        answers: {
            a: '2005',
            b: '2008',
            c: '2012'
        },
        correctAnswer: 'b'
    },
    {
        question: "Melyik Bosszúállóval fogott össze Thor a Thor: Ragnarok című filmben?",
        answers: {
            a: 'Hulk',
            b: 'Sólyomszem',
            c: 'Vasember'
        },
        correctAnswer: 'a'
    },
    {
        question: "Melyik kitalált országból származik Fekete Párduc?",
        answers: {
            a: 'Wakanda',
            b: 'Latveria',
            c: 'Genosha'
        },
        correctAnswer: 'a'
    },
    {
        question: "Melyik filmben jelent meg először Fekete Özvegy?",
        answers: {
            a: 'Bosszúállók újra együtt',
            b: 'A Hihetetlen Hulk',
            c: 'Vasember 2'
        },
        correctAnswer: 'c'
    },
    {
        question: "Melyik filmben jelent meg először Sólyomszem",
        answers: {
            a: 'Amerika Kapitány: Az Első Bosszúálló',
            b: 'Thor',
            c: 'Vasember 3'
        },
        correctAnswer: 'b'
    },
    {
        question: "Melyik filmben jelent meg először Pókember a MCU-ban (Marvel-moziuniverzum)?",
        answers: {
            a: 'A galaxis őrzői',
            b: 'Bosszúállók: Ultron kora',
            c: 'Amerika Kapitány: Polgárháború'
        },
        correctAnswer: 'c'
    },
    {
        question: "Mi Sólyom igazi neve?",
        answers: {
            a: 'Sam Wilson',
            b: 'Elijah Bradley',
            c: 'Alexander Pierce'
        },
        correctAnswer: 'a'
    },
    {
        question: "Milyen kitalált idegen fém adja a Wakandaiak erejét?",
        answers: {
            a: 'Vibránium',
            b: 'Adamantium',
            c: 'Unobtainium'
        },
        correctAnswer: 'a'
    },
    {
        question: "Ezek közül ki nem a Galaxis Örzőinek tagja?",
        answers: {
            a: 'Ronan',
            b: 'Star Lord',
            c: 'Groot'
        },
        correctAnswer: 'a'
    },
    {
        question: "Melyik zenére táncol a pici Groot az első Galaxis Örzői végén?",
        answers: {
            a: '"Cherry Bomb" - The Runaways',
            b: '"Ain´t No Mountain High Enough" - Marvin Gaye & Tammi Terrell',
            c: '"I Want You Back" - The Jackson 5'
        },
        correctAnswer: 'c'
    }
    /*
    {
        question: "",
        answers: {
            a: '',
            b: '',
            c: ''
        },
        correctAnswer: ''
    }
    */
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        var output = [];
        var answers;

        // for each question...
        for(var i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // add this question and its answers to the output
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        var userAnswer = '';
        var numCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
        console.log(numCorrect + ' out of ' + questions.length);
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}