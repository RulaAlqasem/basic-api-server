'use strict';

module.exports = (req, res, next) => {
  if (Number(req.params.id)) {
    console.log(Number(req.params.id), req.params.id)
    next('Invalid req data');
  } if (!(req.params.id.includes("-"))) {

    next('Invalid req data');
  }

  else {

    next();

  }
};