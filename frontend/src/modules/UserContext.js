import { createContext, useState } from 'react';

const UserContext = createContext({
  state: {
    // 상태 값
    isLogin: false,
    isAdmin: false,
    userInfo: null,
  },
  actions: {
    // 상태 변경 함수
    setIsLogin: null,
    setIsAdmin: null,
    setUserInfo: null,
  },
});

const UserProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const value = {
    state: { isLogin, userInfo },
    actions: { setIsLogin, setUserInfo },
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

const { Consumer: UserConsumer } = UserContext;

export { UserProvider, UserConsumer };

export default UserContext;
