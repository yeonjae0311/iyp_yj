import axios from 'axios';

export default function apiRequest(url, method = 'GET', data, headers = {}) {
  axios.defaults.withCredentials = true;

  if (!url || !url.trim()) return;

  if (!/^http[s]?:/i.test(url)) {
    url = process.env.REACT_APP_API_URL + url;
  }

  // GET -> ?키=값&키=값
  method = method.toUpperCase();
  if (method === 'GET' && data) {
    const params = new URLSearchParams(data);
    url += '?' + params.toString();
    data = null;
  }

  return axios({
    method,
    url,
    data,
    headers,
    validateStatus: (state) => state < 500,
  });
}
