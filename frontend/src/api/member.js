import apiRequest from '../lib/apiRequest';
import cookies from 'react-cookies';

export const check = () =>
  new Promise((resolve, reject) => {
    apiRequest('api/member/check', 'GET', null)
      .then((res) => {
        if (res.data) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      })
      .catch((err) => reject(err));
  });

export const apiLogin = (formData) =>
  new Promise((resolve, reject) => {
    apiRequest('api/member/login', 'POST', formData)
      .then((res) => {
        if (res.data) {
          resolve(res);
        } else {
          reject(res);
        }
      })
      .catch((err) => reject(err));
  });

export const apiJoin = (formData) =>
  new Promise((resolve, reject) => {
    apiRequest('api/member/register', 'POST', formData)
      .then((res) => {
        if (res.data) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      })
      .catch((err) => reject(err));
  });

// 로그인 회원 정보 조회
export const apiMemberInfo = (data) =>
  new Promise((resolve, reject) => {
    apiRequest('api/member/profile', 'POST', data, {
      Authorization: `Bearer ${localStorage.getItem('iyp_access_token')}`,
    })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          resolve(res);
        } else {
          resolve(null);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });

export const updateMemberInfo = (context) => {
  const {
    actions: { setIsLogin, setUserInfo },
  } = context;

  apiMemberInfo()
    .then((userInfo) => {
      let isLogin = false;

      if (userInfo) {
        isLogin = true;
      }

      setIsLogin(isLogin);
      setUserInfo(userInfo);
    })
    .catch(() => {
      setIsLogin(false);
      setUserInfo(null);
    });
};

export const logout = (context) => {
  new Promise((resolve, reject) => {
    apiRequest('api/member/logout')
      .then((res) => {
        if (res.status >= 200 && res.status < 300 && res.data.success) {
          cookies.remove('sessionId', { path: '/' });

          const {
            actions: { setIsLogin, setUserInfo },
          } = context;

          setIsLogin(false);
          setUserInfo(null);
          alert(res);

          resolve(res.data);
        } else {
          resolve(null);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};
