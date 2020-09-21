const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController')

router.get('/test',employeeController.test);
router.get('/testdata',EmployeeController.testdata );
router.get('/list',EmployeeController.list );

router.get('/waka', (req, res) => {

  res.json({status: 'Employeed Saved'});

});

module.exports = router;