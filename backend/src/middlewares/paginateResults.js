const paginateResults = (req, res, next) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 4;
    const offset = (page - 1) * limit;
  
    req.pagination = {
      limit,
      offset,
      page
    };
    next();
  };
  
  module.exports = paginateResults;