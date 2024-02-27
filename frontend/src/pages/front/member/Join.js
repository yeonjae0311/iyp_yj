import { Helmet } from 'react-helmet-async';
import React from 'react';
import JoinContainer from '../../../containers/member/JoinContainer';

const Join = () => {
  return (
    <>
      <Helmet>
        <title>회원가입</title>
      </Helmet>
      <JoinContainer />
    </>
  );
};

export default React.memo(Join);
