import { insertSubject } from './postgres.js';

module.exports = class Subject 
{
    constructor(code, name, teacherId) 
	{
        this.code = code;
        this.name = name;
        this.email = email;
        this.teacherId = teacherId;
        this.exams = [];
		
		insertSubject(this);
    }
	
	change_teacher(newTeacherId)
	{
		this.teacherId = newTeacherId;
	}

    addExam(name, datetimeStart, datetimeEnd)
    {
        exam = new Exam(name, datetimeStart, datetimeEnd)
        
		this.exams.push(exam);
    }
}