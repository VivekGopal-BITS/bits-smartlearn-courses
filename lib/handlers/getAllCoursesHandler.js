const courseModel = require('../models/courseModel');

const getAllCoursesHandler = async function (request, response) {
	const courses = await courseModel.find({});

	try {
		response.status(200).json({ value: courses });
	} catch (error) {
		response.sendStatus(500).json({ error });
	}
	return;
}

module.exports = getAllCoursesHandler;
