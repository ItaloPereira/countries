import React from 'react';
import PropTypes from 'prop-types';

import PageHead from '@components/molecules/PageHead';
import NavBar from '@components/molecules/NavBar';

import { Viewport } from './style';

const Page = ({ children, title, description }) => {
  return (
    <Viewport>
      <PageHead
        title={title}
        description={description}
      />
      <NavBar />
      {children}
    </Viewport>
  );
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element).isRequired,
    PropTypes.element.isRequired,
  ]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};


export default Page;