const keys = require("../config/nyt-keys.json");
const request = require('request')

module.exports = {
  search: function(req, res) {
    console.log(req.params.search)
    request.get({
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
      qs: {
        'api-key': keys.search,
        'q': req.params.search
      },
    }, function(err, response, body) {
      body = JSON.parse(body);
      res.json(body);
    })
  }
};