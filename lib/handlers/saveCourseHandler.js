const courseModel = require('../models/courseModel');

const saveCourseHandler = async function (request, response) {
	const course = new courseModel(request.body);
	console.log(course);
	try {
		await course.save();
		response.status(200).json({ course });
	} catch (error) {
		response.status(500).json({ error: error });
	}
	return;
}

module.exports = saveCourseHandler;