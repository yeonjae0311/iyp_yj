import './App.css';
import { Route, Routes } from 'react-router-dom';

import CommonLayout from './layouts/front/CommonLayout';
import Main from './pages/front/Main';
import Login from './pages/front/member/Login';
import Join from './pages/front/member/Join';
import Monthly from './pages/front/calendar/Monthly';
import Weekly from './pages/front/calendar/Weekly';
import NotFound from './pages/commons/NotFound';
import { HelmetProvider } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <HelmetProvider>
        <Routes>
          <Route path="/" element={<CommonLayout />}>
            <Route index element={<Main />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/monthly" element={<Monthly />} />
            <Route path="/weekly" element={<Weekly />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HelmetProvider>
    </>
  );
};
export default App;
