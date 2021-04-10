const Course = require('../models/Course');
const {
  mutipleMogooseToObject
} = require('../../util/mongoose');

class SiteController {
  // [GET] /
  index(req, res, next) {

    Course.find({})
      .then(courses => {

        res.render('home', {
          courses: mutipleMogooseToObject(courses)
        });
      })
      .catch(next);

    // res.render('home');
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();