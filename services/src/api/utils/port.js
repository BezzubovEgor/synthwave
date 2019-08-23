function normalizePort(val) {
  const parsedPort = parseInt(val, 10);

  if (Number.isNaN(parsedPort)) {
    return val;
  }

  if (parsedPort >= 0) {
    return parsedPort;
  }

  return false;
}

export {
  normalizePort,
};
