import createError from 'http-errors';

function handle404(req, res, next) {
  next(createError(404));
}

// eslint-disable-next-line no-unused-vars
function handleErrorAndShowErrorPage(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
}

export { handle404, handleErrorAndShowErrorPage };
