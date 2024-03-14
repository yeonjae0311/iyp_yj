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

export const apiUpdateSchedule = (date) =>
  new Promise((resolve, reject) => {
    apiRequest('/cal/todo', 'GET', date)
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
