import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import AppContext from '@context/appContext';

const ThemeProvider = ({ children }) => {
  const { state } = useContext(AppContext);

  return (
    <SCThemeProvider theme={state.theme}>
      {children}
    </SCThemeProvider>
  )
};

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element).isRequired,
    PropTypes.element.isRequired,
  ]).isRequired,
};

export default ThemeProvider;