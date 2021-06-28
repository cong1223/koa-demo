const { test } = require('../controllers');
const { schTest }=  require('../schema');
const routes = [
  {
    path: '/test1',
    method: 'get',
    controller: test.echo
  },
  {
    path: '/postTest',
    method: 'post',
    controller: test.parseParams
  },
  {
    path: '/print',
    method: 'get',
    valid: schTest.print,
    controller: test.print
  }
];

module.exports = routes;
