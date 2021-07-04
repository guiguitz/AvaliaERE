import { insertStudent, insertStudentSubject, removeStudentSubjects } from './postgres.js';

module.exports = class Student 
{
    constructor(name, enrollmentNum, email, degree) 
	{
        this.name = name;
        this.enrollmentNum = enrollmentNum;
        this.email = email;
        this.degree = degree;
		this.subjects = [];
		
		insertStudent(this);
    }
	
	addSubject(subject)
	{
		this.subjects.push(subject);
		insertStudentSubject(this, subject);
	}
	
	delAllSubjects(subject)
	{
		this.subjects = [];
		removeStudentSubjects(this);
	}
	
}