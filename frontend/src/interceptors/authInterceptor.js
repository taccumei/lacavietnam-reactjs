import axios from 'axios';

axios.interceptors.request.use(
  req => {
    const user = localStorage.getItem('user');
    console.log(user);
    const token = user && JSON.parse(user).token;
    
    if (token) {
      req.headers['access_token'] = token;
    }
    return req;
  },
  error => {
    return Promise.reject(error);
    //If there’s an error before the request is sent,the interceptor returns a rejected Promise
  }
)
