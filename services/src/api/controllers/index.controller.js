async function getIndex(req, res) {
  res.render('index', { title: 'Synthwave application' });
}

export { getIndex };
