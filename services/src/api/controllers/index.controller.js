async function getIndex(req, res, next) {
  res.render('index', { title: 'Express' });
}

export { getIndex };
