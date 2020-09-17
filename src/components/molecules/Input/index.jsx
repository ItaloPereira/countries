import React from 'react'; 
import PropTypes from 'prop-types';

import Icon from '@components/atoms/Icon';

import { Container } from './style';

const Input = ({ placeholder, type, value, onChange }) => {

  return (
    <Container type={type}>
      <input
        className="input__el"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

      {type === 'search' && (
        <div className="input__icon-search-wrapper">
          <Icon name="magnifier" />
        </div>
      )}
    </Container>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  placeholder: '',
  type: 'text',
  value: '',
  onChange: undefined,
};

export default Input;
