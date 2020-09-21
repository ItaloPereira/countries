import React from 'react'; 
import PropTypes from 'prop-types';

import { Container } from './style';

const Tag = ({ children, onClick }) => {
  return (
    <Container onClick={onClick} aria-hidden="true">{children}</Container>
  );
};

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Tag.defaultProps = {
  onClick: undefined,
};

export default Tag;
