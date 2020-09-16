import React, { useReducer, createContext } from 'react';
import PropTypes from 'prop-types';

import { TOGGLE_THEME } from './consts';

const initialState = {
  theme: 'light'
};

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
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
