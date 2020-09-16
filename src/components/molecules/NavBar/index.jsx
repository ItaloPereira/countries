import React, { useContext } from 'react'; 

import AppContext from '@context/appContext';
import { TOGGLE_THEME } from '@context/consts';

import Icon from '@components/atoms/Icon';

import { Viewport } from './style';

const NavBar = () => {
  const { dispatch } = useContext(AppContext);

  function toggleTheme() {
    dispatch({ type: TOGGLE_THEME });
  }

  return (
    <Viewport>
      <div className="nav__wrapper">
        <h1 className="nav__wrapper__title">Where in the world?</h1>

        <div
          className="nav__wrapper__toggle-theme"
          onClick={toggleTheme}
          aria-hidden="true"
        >
          <div className="nav__wrapper__toggle-theme__icon-wrapper">
            <Icon name="moon-outline" />
          </div>

          <span className="nav__wrapper__toggle-theme__text">Dark Mode</span>
        </div>
      </div>
    </Viewport>
  );
};

export default NavBar;
