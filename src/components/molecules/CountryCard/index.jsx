import React from 'react'; 
import PropTypes from 'prop-types';

import { Container } from './style';

const Card = ({ country, population, region, capital, flag }) => {
  function formatPopulation(data) {
    if (typeof data === 'number') {
      return data.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
    }

    return data;
  }

  return (
    <Container>
      <img
        src={flag}
        alt="flag"
        className="card__flag"
      />
      <div className="card__content">
        <h2 className="card__content__title" title={country}>{country}</h2>

        <div className="card__content__row">
          <strong className="card__content__row__title">Population: </strong>
          <span className="card__content__row__description" title={population}>{formatPopulation(population)}</span>
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
};

Card.defaultProps = {
  population: 'Data unavailable',
  region: 'Data unavailable',
  capital: 'Data unavailable',
};

export default Card;