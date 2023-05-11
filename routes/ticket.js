var express = require('express');
var router = express.Router();
const config = require('../task-config.json');

const entries = [
    { date: new Date('2023-05-01'), hours: 8, min: 15, task: 'Development', subtask: 'Backend' },
    { date: new Date('2023-05-02'), hours: 7, min: 30, task: 'Development ', subtask: 'Integration' },
    { date: new Date('2023-05-03'), hours: 6, min: 15, task: 'Testing', subtask: 'Unit Testing' },
  ];


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('ticket', { entries });
});

router.get('/add-time', function(req, res) {
    res.render('add-time', {
      tasks: config.tasks,
      subTasks: config.subTasks
    });
  });
 
router.post('/add-time', function (req, res) {

    const task = req.body.task;
    const subTask = req.body.subTask;
    const hours = req.body.hours;
    const minutes = req.body.minutes;
    const date = req.body.date;
  
        
    addEntry(date, hours, minutes, task, subTask);
    res.redirect('/ticket');

});



function addEntry(date, hours, min, task, subtask) {
    entries.push({ date: new Date(date), hours, min, task, subtask });
  }
  

module.exports = router;
