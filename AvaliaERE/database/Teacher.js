import { insertTeacher, selectTeacherId } from './postgres.js';

module.exports = class Teacher 
{
    constructor(name, email, department) 
	{
        this.name = name;
        this.email = email;
        this.department = department;
		
		insertTeacher(this);
    }
    
    getTeacherId()
    {
        return selectTeacherId(this.email)
    }

}