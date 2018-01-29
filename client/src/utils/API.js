import axios from 'axios';

export default {
  search: (search) => {
    return axios.get("/api/nyt/" + search);
  },
}

