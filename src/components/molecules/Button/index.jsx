import React from 'react'; 
import PropTypes from 'prop-types';

import Loader from '@components/atoms/Loader'

import { Container } from './style';

const Button = ({ children, htmlType = 'button', loading, disabled, onClick }) => {
  return (
    <Container type={htmlType} loading={loading ? 1 : 0} disabled={disabled} onClick={onClick}>
      <Loader size="small" />
      <span>{children}</span>
    </Container>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  htmlType: PropTypes.oneOf(['button', 'submit', 'reset']),
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  htmlType: 'button',
  loading: false,
  disabled: false,
  onClick: undefined,
};

export default Button;
