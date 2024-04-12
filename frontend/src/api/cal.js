import apiRequest from '../lib/apiRequest';

export const apiSchedule = (formData) =>
  new Promise((resolve, reject) => {
    apiRequest('/cal/insert', 'POST', formData)
      .then((res) => {
        if (res.data) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      })
      .catch((err) => reject(err));
  });

export const apiUpdateSchedule = (data) =>
  new Promise((resolve, reject) => {
    apiRequest('api/cal/todo', 'POST', data)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
