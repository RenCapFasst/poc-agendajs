const agendaService = require('../agenda');
var express = require('express');
const { propOr } = require('ramda');
var router = express.Router();

router.post('/jobs', async (req, res) => {
  let data = propOr({}, 'body', req);
  await agendaService().addJob(data);
  res.send(data);
});

module.exports = router;
