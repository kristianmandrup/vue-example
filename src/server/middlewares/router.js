const express = require('express');
const appRoutes = require('../routes/app');
const appUsers = require('../routes/users');

exports.router = function (config) {
  const router = express.Router({
    mergeParams: true
  });

  router.post('/users', appUsers.create);
  router.use(appRoutes.public);
  router.use(appRoutes.assets);
  router.use(appRoutes.render);

  return router;
};
