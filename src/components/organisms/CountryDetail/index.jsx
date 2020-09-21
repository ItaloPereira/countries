import React from 'react'; 
import PropTypes from 'prop-types';

import { formatPopulation } from '@utils/format';

import Loader from '@components/atoms/Loader';
import Tag from '@components/atoms/Tag';

import { Container } from './style';

const CountryDetail = ({ data, loading, handleBorderClick }) => {
  return (
    <Container>
      {loading ? (
        <div className="country-detail__loader">
          <Loader size="large" />
        </div>
      ) : (
        <div className="country-detail__content">
          <img className="country-detail__content__flag" src={data.flag} alt="flag" />
          <div className="country-detail__content__info">
            <h2 className="country-detail__content__info__title">{data.name}</h2>

            <div className="country-detail__content__info__columns">
              <div className="country-detail__content__info__columns__column">

                <div className="country-detail__content__info__columns__column__row">
                  <strong className="country-detail__content__info__columns__column__row__title">Native Name: </strong>
                  <span className="country-detail__content__info__columns__column__row__description">{data.nativeName}</span>
                </div>

                <div className="country-detail__content__info__columns__column__row">
                  <strong className="country-detail__content__info__columns__column__row__title">Population: </strong>
                  <span className="country-detail__content__info__columns__column__row__description">{formatPopulation(data.population)}</span>
                </div>

                <div className="country-detail__content__info__columns__column__row">
                  <strong className="country-detail__content__info__columns__column__row__title">Region: </strong>
                  <span className="country-detail__content__info__columns__column__row__description">{data.region}</span>
                </div>

                <div className="country-detail__content__info__columns__column__row">
                  <strong className="country-detail__content__info__columns__column__row__title">Sub Region: </strong>
                  <span className="country-detail__content__info__columns__column__row__description">{data.subregion}</span>
                </div>

                <div className="country-detail__content__info__columns__column__row">
                  <strong className="country-detail__content__info__columns__column__row__title">Capital: </strong>
                  <span className="country-detail__content__info__columns__column__row__description">{data.capital}</span>
                </div>

              </div>

              <div className="country-detail__content__info__columns__column">

                <div className="country-detail__content__info__columns__column__row">
                  <strong className="country-detail__content__info__columns__column__row__title">Top Level Domain: </strong>
                  <span className="country-detail__content__info__columns__column__row__description">{data.topLevelDomain.join(', ')}</span>
                </div>

                <div className="country-detail__content__info__columns__column__row">
                  <strong className="country-detail__content__info__columns__column__row__title">Currencies: </strong>
                  <span className="country-detail__content__info__columns__column__row__description">
                    {data.currencies.map((currency, index) => `${currency.name}${index === data.currencies.length-1 ? '' : ', '}`)}
                  </span>
                </div>

                <div className="country-detail__content__info__columns__column__row">
                  <strong className="country-detail__content__info__columns__column__row__title">Languages: </strong>
                  <span className="country-detail__content__info__columns__column__row__description">
                    {data.languages.map((laguage, index) => `${laguage.name}${index === data.languages.length-1 ? '' : ', '}`)}
                  </span>
                </div>

              </div>
            </div>

            <div className="country-detail__content__info__footer">
              <span className="country-detail__content__info__footer__title">Border Countries:</span>
              <div className="country-detail__content__info__footer__tags">
                {data.borders.length ? (
                  data.borders.map(border => (
                    <div key={border.alpha2Code} className="country-detail__content__info__footer__tags__wrapper">
                      <Tag onClick={() => handleBorderClick(border.alpha2Code)}>{border.name}</Tag>
                    </div>
                  ))
                ) : (
                  <span className="country-detail__content__info__footer__tags__empty">This country has no borders.</span>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

CountryDetail.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  loading: PropTypes.bool,
  handleBorderClick: PropTypes.func,
};

CountryDetail.defaultProps = {
  data: {
    name: 'Data unavailable',
    nativeName: 'Data unavailable',
    population: 'Data unavailable',
    region: 'Data unavailable',
    subregion: 'Data unavailable',
    capital: 'Data unavailable',
    topLevelDomain: 'Data unavailable',
    currencies: 'Data unavailable',
    languages: 'Data unavailable',
    borders: 'Data unavailable',
  },
  loading: false,
  handleBorderClick: undefined,
};

export default CountryDetail;
