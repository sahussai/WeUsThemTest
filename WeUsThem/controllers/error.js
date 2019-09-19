exports.getPageNotFound = (req, res, next) => {
    res.status(404).render('pageNotFound', {pageTitle: 'Page Not Found', path: '/error'});
  };