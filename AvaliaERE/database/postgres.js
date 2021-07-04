
async function connect() {
    if (global.connection)
        return global.connection.connect();

    const { Pool } = require('pg');
    const pool = new Pool({
        user: 'postgres',
		host: 'localhost',
		database: 'avaliaere',
		password: 'postgres',
		port: 5432,
  });

    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}

async function insertStudent(student)
{
	const client = await connect();
    const sql = 'INSERT INTO student(name, enrollment_number, email, degree) VALUES ($1, $2, $3, $4);';
    const values = [student.name, student.enrollmentNum, student.email, student.degree];
    return await client.query(sql, values);
}

async function insertTeacher(teacher)
{
	const client = await connect();
    const sql = 'INSERT INTO teacher(name, email, department) VALUES ($1, $2, $3);';
    const values = [teacher.name, teacher.email, teacher.department];
    return await client.query(sql, values);
}

async function insertSubject(subject)
{
	const client = await connect();
    const sql = 'INSERT INTO subject(code, name, teacher_id) VALUES ($1, $2, $3);';
    const values = [subject.code, subject.name, subject.teacherId];
    return await client.query(sql, values);
}

async function insertExam(exam)
{
	const client = await connect();
    const sql = 'INSERT INTO exam(name, datetime_start, datetime_end, subject_code) VALUES ($1, $2, $3, $4);';
    const values = [exam.name, exam.datetimeStart, exam.datetimeEnd, exam.subjectCode];
    return await client.query(sql, values);
}

async function insertQuestion(question)
{
	const client = await connect();
    const sql = 'INSERT INTO question(question_text, points, exam_id) VALUES ($1, $2, $3);';
    const values = [question.text, question.points, question.examId];
    return await client.query(sql, values);
}

async function insertAlternative(alternative)
{
	const client = await connect();
    const sql = 'INSERT INTO alternative(alternative_text, isCorrect, question_id) VALUES ($1, $2, $3);';
    const values = [alternative.text, alternative.isCorrect, alternative.questionId];
    return await client.query(sql, values);
}

async function insertStudentSubject(student, subject)
{
	const client = await connect();
    const sql = 'INSERT INTO subject_students(subject_code, student_enrollment) VALUES ($1, $2);';
    const values = [subject.code, student.enrollmentNum];
    return await client.query(sql, values);
}

async function removeStudentSubjects(student)
{
	const client = await connect();
    const sql = 'DELETE FROM subject_students where student_enrollment=$1;';
    return await client.query(sql, student.enrollmentNum);
}

async function selectTeacherId(email) {
    const client = await connect();
    const sql = 'SELECT id FROM teacher WHERE email=$1'
    const res = await client.query(sql, email);
    return res.rows;
}

async function insertExamResult(points, studentEnrollment, examId)
{
	const client = await connect();
    const sql = 'INSERT INTO exam_result(points, student_enrollment, exam_id) VALUES ($1, $2, $3);';
    const values = [points, studentEnrollment, examId];
    return await client.query(sql, values);
}

module.exports = {
    insertStudent, 
    insertTeacher, 
    insertSubject, 
    insertExam,
    insertQuestion,
    insertAlternative,
    insertStudentSubject, 
    removeStudentSubjects, 
    selectTeacherId,
    insertExamResult
}