const charactersMiddleware = (req, res, next) => {
  if (req.method === 'POST') {
    req.body = {
      ...req.body,
      thumbNailUrl: '/thumbnails/',
    };
  }
  next();
};

module.exports = (req, res, next) => {
  if (req.path === '/characters') {
    charactersMiddleware(req, res, next);
  } else {
    next();
  }
};
