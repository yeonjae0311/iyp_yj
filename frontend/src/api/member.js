import apiRequest from '../lib/apiRequest';
import cookies from 'react-cookies';

export const apiLogin = (formData) =>
  new Promise((resolve, reject) => {
    apiRequest('/member/login', 'POST', formData)
      .then((res) => {
        if (res.data.id) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      })
      .catch((err) => reject(err));
  });

export const apiJoin = (formData) =>
  new Promise((resolve, reject) => {
    apiRequest('/member/join', 'POST', formData)
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
export const apiMemberInfo = () =>
  new Promise((resolve, reject) => {
    apiRequest('/member')
      .then((res) => {
        if (res.status >= 200 && res.status < 300 && res.data.success) {
          resolve(res.data);
        } else {
          cookies.remove('token', { path: '/' });
          resolve(null);
        }
      })
      .catch((err) => {
        cookies.remove('token', { path: '/' });
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
  cookies.remove('token', { path: '/' });

  const {
    actions: { setIsLogin, setUserInfo },
  } = context;

  setIsLogin(false);
  setUserInfo(null);
};
