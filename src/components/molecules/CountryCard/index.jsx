import React from 'react'; 
import PropTypes from 'prop-types';

import { formatPopulation } from '@utils/format';

import { Container } from './style';

const Card = ({ country, population, region, capital, flag, onClick }) => {
  return (
    <Container onClick={onClick} aria-hidden="true">
      <img
        src={flag}
        alt="flag"
        className="card__flag"
      />
      <div className="card__content">
        <h2 className="card__content__title" title={country}>{country}</h2>

        <div className="card__content__row">
          <strong className="card__content__row__title">Population: </strong>
          <span className="card__content__row__description" title={formatPopulation(population)}>{formatPopulation(population)}</span>
        </div>

        <div className="card__content__row">
          <strong className="card__content__row__title">Region: </strong>
          <span className="card__content__row__description" title={region}>{region}</span>
        </div>

        <div className="card__content__row">
          <strong className="card__content__row__title">Capital: </strong>
          <span className="card__content__row__description" title={capital}>{capital}</span>
        </div>
      </div>
    </Container>
  );
};

Card.propTypes = {
  country: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  population: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  region: PropTypes.string,
  capital: PropTypes.string,
  onClick: PropTypes.func,
};

Card.defaultProps = {
  population: 'Data unavailable',
  region: 'Data unavailable',
  capital: 'Data unavailable',
  onClick: undefined,
};

export default Card;
