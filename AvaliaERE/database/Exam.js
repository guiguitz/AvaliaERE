import { insertExam, insertQuestion, insertAlternative } from './postgres.js';

module.exports = class Exam 
{
    constructor(name, datetimeStart, datetimeEnd, subjectCode) 
	{
        this.name = name;
        this.datetimeStart = datetimeStart;
        this.datetimeEnd = datetimeEnd;
        this.subjectCode = subjectCode;
        this.questions = [];
		
		insertExam(this);
    }
	
	addQuestion(text, points, examId)
	{
        question = new Question(text, points, examId);
        
		this.questions.push(question);
	}

    getTotalPoints()
    {
        totalPoints = 0;
        for(var i = 0; i < this.questions.length; i++)
        {
            totalPoints += questions[i].points;
        }
        return totalPoints;
    }
}

module.exports = class Question 
{
    constructor(text, points, examId) 
	{
        this.text = text;
        this.points = points;
        this.alternatives = [];
        this.examId = examId;
		
		insertQuestion(this);
    }

    addAlternative(text, isCorrect, questionId)
    {
        alternative = new Alternative(text, isCorrect, questionId);
        this.alternatives.push(alternative);
    }
}

module.exports = class Alternative 
{
    constructor(text, isCorrect, questionId) 
	{
        this.text = text;
        this.isCorrect = isCorrect;
        this.questionId = questionId;
		
		insertAlternative(this);
    }
}
