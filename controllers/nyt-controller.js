const keys = require("../config/nyt-keys.json");
const request = require('request')

module.exports = {
  search: function(req, res) {
    request.get({
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      qs: {
        'api-key': keys.search,
        'q': req.params.search,
        'fq': req.query.fq,
        'begin_date': req.query.begin,
        'end_date': req.query.end,
        'sort': req.query.sort,
        'page': req.query.page
      },
    }, function(err, response, body) {
      body = JSON.parse(body);
      res.json(body);
    })
  },
  mostPopular: function(req, res) {
    request.get({
      url: "https://api.nytimes.com/svc/mostpopular/v2/mostviewed//.json",
      qs: {
        'api-key': "aa348fedd0314bad8d95a80c6f5586ae"
      },
    }, function(err, response, body) {
      body = JSON.parse(body);
      res.send(body);
    })
  }
};