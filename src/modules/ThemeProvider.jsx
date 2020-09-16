import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as SCThemeProvider } from 'styled-components';

import AppContext from '@context/appContext';
import { lightTheme, darkTheme } from '@assets/styles/theme';

const ThemeProvider = ({ children }) => {
  const { state } = useContext(AppContext);
  const themeMode = state.theme === 'light' ? lightTheme : darkTheme;

  return (
    <SCThemeProvider theme={themeMode}>
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