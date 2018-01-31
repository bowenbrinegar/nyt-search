import axios from 'axios';

export default {
  search: (search, fq, begin, end, sort, page) => {
    return axios.get(`/api/nyt/${search}/?fq=${fq}?begin=${begin}?end=${end}?sort=${sort}?page=${page}`);
  },
  popular: () => {
    return axios.get('/api/nyt/popular');
  }
}

