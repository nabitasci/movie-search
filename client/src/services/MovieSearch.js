import api from '../utils/Api';

export const searchMovie = params =>
  new Promise((resolve, reject) => {
    console.log(params)
    api
      .get(`/search?keyword=${params}`)
      .then(res => {
        if (res.error) {
          reject(res);
        } else {
          resolve(res);
        }
      })
      .catch(error => reject(error));
  });