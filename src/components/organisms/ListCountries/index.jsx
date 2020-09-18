import React, { useState, useEffect } from 'react'; 
import PropTypes from 'prop-types';

import Loader from '@components/atoms/Loader';
import Button from '@components/molecules/Button';
import CountryCard from '@components/molecules/CountryCard';

import { Container } from './style';

const ListCountries = ({ countries, loading, itemsPerPage }) => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [slicedCountries, setSlicedCountries] = useState([]);

  function loadMore() {
    setButtonLoading(true);

    setTimeout(() => {
      setCurrentPage(currentPage + 1);
      setButtonLoading(false);
    }, 1000);
  }

  useEffect(() => {
    setSlicedCountries(countries.slice(0, itemsPerPage));
  }, [loading]);

  useEffect(() => {
    setCurrentPage(1);
  }, [countries]);

  useEffect(() => {
    setSlicedCountries(countries.slice(0, itemsPerPage * currentPage));
  }, [currentPage])

  return (
    <Container loading={loading ? 1 : 0}>
      {loading ? (
        <div className="list-countries__loader-wrapper">
          <Loader size="large" />
        </div>
      ) : (
        slicedCountries.map(country => (
          <CountryCard
            key={country.numericCode}
            country={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flag={country.flag}
          />
        ))
      )}

      {!loading && countries.length > itemsPerPage*currentPage && (
        <div className="list-countries__button-container">
          <div className="list-countries__button-container__wrapper">
            <Button
              loading={buttonLoading}
              disabled={buttonLoading}
              onClick={loadMore}
            >
              Load more
            </Button>
          </div>
        </div>
      )}

      {!loading && !countries.length && (
        <div className="list-countries__empty-container">
          <span className="list-countries__empty-container__text">No Results</span>
        </div>
      )}
    </Container>
  );
};

ListCountries.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.any)
  ),
  loading: PropTypes.bool,
  itemsPerPage: PropTypes.number,
};

ListCountries.defaultProps = {
  countries: [],
  loading: false,
  itemsPerPage: 8,
};

export default ListCountries;
