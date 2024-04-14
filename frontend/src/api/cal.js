import apiRequest from '../lib/apiRequest';

export const apiSchedule = (formData) =>
  new Promise((resolve, reject) => {
    apiRequest('api/cal/insert', 'POST', formData, {
      Authorization: `Bearer ${localStorage.getItem('iyp_access_token')}`,
    })
      .then((res) => {
        if (res.data) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      })
      .catch((err) => reject(err));
  });

export const apiCheckSchedule = (data) =>
  new Promise((resolve, reject) => {
    apiRequest('api/cal/todo', 'POST', data, {
      Authorization: `Bearer ${localStorage.getItem('iyp_access_token')}`,
    })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
