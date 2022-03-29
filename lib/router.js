const saveCourseHandler = require('./handlers/saveCourseHandler');
const getAllCoursesHandler = require('./handlers/getAllCoursesHandler');

const express = require('express');
const app = express();

app.post('/saveCourse', saveCourseHandler);
app.get('/getAllCourses', getAllCoursesHandler);

module.exports = app;