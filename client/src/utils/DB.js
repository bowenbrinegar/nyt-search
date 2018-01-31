import axios from "axios";

export default {
  // Gets all books
  getArticles: function() {
    return axios.get("/api/db");
  },
  saveArticle: function(articleData) {
    return axios.post("/api/db", articleData);
  },
  clear: function(title) {
    return axios.get("/api/db/clear/" + title)
  }
};