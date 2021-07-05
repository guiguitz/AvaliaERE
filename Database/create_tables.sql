CREATE TABLE teacher (
	id SERIAL NOT NULL PRIMARY KEY,
	name TEXT NOT NULL,
	email TEXT NOT NULL,
	department TEXT NOT NULL
);

CREATE TABLE student (
	enrollment_number INT NOT NULL PRIMARY KEY,
	name TEXT NOT NULL,
	email TEXT NOT NULL,
	degree TEXT NOT NULL
);

CREATE TABLE subject (
	code TEXT NOT NULL PRIMARY KEY,
	name TEXT NOT NULL,
	teacher_id INT REFERENCES teacher(id) NOT NULL
);

CREATE TABLE subject_students ( 
	subject_code TEXT REFERENCES subject(code) NOT NULL,
	student_enrollment INT REFERENCES student(enrollment_number) NOT NULL,
	PRIMARY KEY (subject_code, student_enrollment)
);

CREATE TABLE exam (
	id SERIAL NOT NULL PRIMARY KEY,
	name TEXT NOT NULL,
	datetime_start TIMESTAMP,
	datetime_end TIMESTAMP,
	subject_code TEXT REFERENCES subject(code) NOT NULL
);

CREATE TABLE question (
	id SERIAL NOT NULL PRIMARY KEY,
	question_text TEXT NOT NULL,
	points INT NOT NULL,
	exam_id INT REFERENCES exam(id) NOT NULL
);

CREATE TABLE alternative (
	id SERIAL NOT NULL PRIMARY KEY,
	alternative_text TEXT NOT NULL,
	is_correct BOOLEAN NOT NULL,
	question_id INT REFERENCES question(id) NOT NULL
);

CREATE TABLE exam_result (
	points INT NOT NULL,
	exam_id INT REFERENCES exam(id) NOT NULL,
	student_enrollment INT REFERENCES student(enrollment_number) NOT NULL,
	PRIMARY KEY (exam_id, student_enrollment)
);
