async function getIndex(req, res) {
  res.render('index', { title: 'Express' });
}

export { getIndex };
