import React, { useReducer, createContext } from 'react';
import PropTypes from 'prop-types';

import { lightTheme, darkTheme } from '@assets/styles/theme';

import { TOGGLE_THEME } from './consts';

const { REACT_APP_PROJECT_NAME } = process.env;

const initialState = {
  theme: localStorage.getItem(`${REACT_APP_PROJECT_NAME}-theme`) === 'dark' ? darkTheme : lightTheme,
  themeChanged: false,
};

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case TOGGLE_THEME:
      localStorage.setItem(`${REACT_APP_PROJECT_NAME}-theme`, state.theme === lightTheme ? 'dark' : 'light')

      return {
        ...state,
        themeChanged: true,
        theme: state.theme === lightTheme ? darkTheme : lightTheme,
      };

    default:
      return state;
  }
};

const AppContext = createContext(initialState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppProvider };
export default AppContext;
