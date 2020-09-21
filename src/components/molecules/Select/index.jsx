import React, { useState, useRef } from 'react'; 
import PropTypes from 'prop-types';

import Icon from '@components/atoms/Icon';

import { Container } from './style';

const Select = ({ placeholder, options, onOptionSelected, value }) => {
  const [isActive, setIsActive] = useState(false);

  const selectRef = useRef();

  function handleClick(e) {
    // outside click
    if (!selectRef.current.contains(e.target)) {
      setIsActive(false);
    }
    return document.removeEventListener('mousedown', handleClick);
  }

  function handleToggle() {
    if (!isActive) {
      setIsActive(true);
      return document.addEventListener('mousedown', handleClick);
    }

    setIsActive(false);
    return document.removeEventListener('mousedown', handleClick);
  }

  return (
    <Container onClick={handleToggle} ref={selectRef}>
      <div className="select__box">
        <span className="select__box__label">{value.label || placeholder}</span>

        <div className="select__box__icon-wrapper">
          <Icon name="chevron-down" />
        </div>
      </div>

      {isActive && (
        <div className="select__dropdown">
          {options.map(option => (
            <div
              key={option.value}
              className={`select__dropdown__option ${value.value === option.value && 'active'}`}
              onClick={() => onOptionSelected(option)}
              aria-hidden="true"
            >
              <span className="select__dropdown__option__text">{option.label}</span>
            </div>
          ))}
        </div>
      )}

    </Container>
  );
};

Select.propTypes = {
  placeholder: PropTypes.string,
  onOptionSelected: PropTypes.func.isRequired,

  value: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),

  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};

Select.defaultProps = {
  placeholder: 'Select...',
  options: [],
  value: {},
};

export default Select;
