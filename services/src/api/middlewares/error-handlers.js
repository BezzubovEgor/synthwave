import createError from 'http-errors';

function handle404(req, res, next) {
  next(createError(404));
}

function handleErrorAndShowErrorPage(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}

export { handle404, handleErrorAndShowErrorPage };
