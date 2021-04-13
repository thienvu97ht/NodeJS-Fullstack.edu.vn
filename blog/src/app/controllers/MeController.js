const Course = require('../models/Course');
const { mutipleMogooseToObject } = require('../../util/mongoose');

class MeController {

  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Course.find({})
      .then(courses => res.render('me/stored-courses', {
        courses: mutipleMogooseToObject(courses)
      }))
      .catch(next)
  }
}

module.exports = new MeController();