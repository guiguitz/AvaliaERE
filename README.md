## AvaliaERE
It is a Microsoft Teams App with a college purpose.

## Introduction
This APP is a work for the discipline of Software Engineering at UFMG - Prof. Marco Tulio Valente - mtov@dcc.ufmg.br.
The goal for this app is to concentrate everything related to Exams and Scores in a single app. It can reduce the number of tools that teachers and students are using in their routines.

## Features
- Interface for creating and taking exams, for teachers and students, respectively;
- Enabling notifications;
- Place where the student can add all grades for follow-up during the semester.

## Technology:
- Microsoft Toolkit (VSCode)
- PostgreSQL
- Javascript (ReactJS)
- GitHub
- Notion

## Dependencies:
- @material-ui/core (4.11.4)
- @material-ui/icons (4.11.2)
- react-countdown (2.3.2)

## Architecture
This project follows the "Three Tier Architecture" pattern, as shown in the image below.

![architecture](res/architecture.svg)

## Product Backlog and tasks
| # | Histories | Task 1 | Task 2 |
| :---: | :---: | :---: | :---: |
| 1 | Creating an exam | The teacher creates a multiple-choice form with a defined grade for each question | - |
| 2 | Schedule an exam | The teacher schedules an exam in the Microsoft Teams app visible in the calendar for students | - |
| 3 | Schedule notifications |  The teacher can send notifications for students in MS Teams and e-mail. | - |
| 4 | Doing the test | Students can access the test form and answers the questions. | - | Done |
| 5 | Generating results | Grade is automatically generated | - |
| 6 | Checking grades | Students can access their grades and the class's average grades | Students can add grades from other subjects to the scoreboard |

## Sprint Backlog
| Histories | Task | Engineer |  Status |
| :---: | :---: | :---: | :---: |
| 1 | Exam creation interface | Douglas | Done |
| 2.1, 3.1 | Scheduling interface | Hene | Partial |
| 4.1 | Test-taking interface | Guilherme | Done |
| 6.1, 6.2 | Scoreboard interface | Emiliano | Partial |
| 1.1, 4.1 | Exams database | Carolina | Done |
| 6.1, 6.2 | Grades databes | Luis | Partial |
| 2.1, 3.1 | Notifications setup | Guilherme e Hene | Partial |
| 1-6 | Backend-frontend binding layer | Luis | Partial |

## Contact the Authors
Carolina Mayumi: `carolmayumimg@ufmg.br`  
Douglas Coutinho `douglasvc@ufmg.br`  
Emiliano Alves `emilianotca@ufmg.br`  
Guilherme Amorim: `guiguitz@ufmg.br`  
Hene Saud: `henesaud@ufmg.br`  
Luis Henrique Vieira `luishlav@ufmg.br`  
