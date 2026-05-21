var express = require('express');
var router = express.Router();

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'CI/CD DevOps Project  by tnplap vinay sir 🚀',

    projectInfo: {
      description: 'Node.js + Express application deployed using CI/CD pipeline',
      status: 'Successfully deployed on production server',
      version: 'v1.0.0'
    },

    techStack: [
      'Node.js',
      'Express.js',
      'GitHub Actions (CI/CD)',
      'PM2 Process Manager',
      'Nginx Reverse Proxy',
      'Linux / AWS Server'
    ],

    pipelineSteps: [
      'Code pushed to GitHub repository',
      'GitHub Actions triggered automatically',
      'Server pulls latest code',
      'Dependencies installed (npm install)',
      'PM2 restarts application',
      'Changes reflected in production'
    ]
  });
});

module.exports = router;