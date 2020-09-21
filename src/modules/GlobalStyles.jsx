import React, { useContext } from 'react';

import AppContext from '@context/appContext';

import Reset from '@assets/styles/reset';
import Icons from '@assets/styles/icons';
import Fonts from '@assets/styles/fonts';
import Base from '@assets/styles/base';

const GlobalStyles = () => {
  const { state } = useContext(AppContext);

  return (
    <>
      <Reset />
      <Icons />
      <Fonts />
      <Base themeChanged={state.themeChanged} />
    </>
  )
};
export default GlobalStyles; 