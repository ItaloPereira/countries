import React, { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';

import ContriesService from '@api/services/countries';
import AppContext from '@context/appContext';
import { SET_COUNTRIES, REMOVE_COUNTRIES } from '@context/consts';

import { getErrorMessageByRequest } from '@utils/errors';

import Input from '@components/molecules/Input';
import Select from '@components/molecules/Select';
import ListCountries from '@components/organisms/ListCountries';
import Page from '@components/templates/Page';

import { 
  PageWrapper,
} from './style';

const Home = () => {
  const [searchText, setSearchText] = useState('');
  const [region, setRegion] = useState({});

  const [loading, setLoading] = useState(false);

  const [debounceToSearch, setDebounceToSearch] = useState(null);

  const {state, dispatch} = useContext(AppContext);

  const notifyError = (msg) => toast.error(msg);

  const regions = [
    {
      label: 'Africa',
      value: 'Africa',
    },
    {
      label: 'Americas',
      value: 'Americas',
    },
    {
      label: 'Asia',
      value: 'Asia',
    },
    {
      label: 'Europe',
      value: 'Europe',
    },
    {
      label: 'Oceania',
      value: 'Oceania',
    },
  ];

  async function getCountriesByRegion() {
    setLoading(true);

    try {
      const res = await ContriesService.getCountriesByRegion(region.value);
      dispatch({ type: SET_COUNTRIES, payload: res.data });

    } catch(err) {
      if (err.response.status !== 404) {
        const errorMessage = getErrorMessageByRequest(err);
        notifyError(errorMessage);
      }
    } finally {
      // For better loading experience
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }

  async function searchCountries(query) {
    setLoading(true);

    try {
      const res = await ContriesService.getCountriesByName(query);
      dispatch({ type: SET_COUNTRIES, payload: res.data });

    } catch(err) {
      if (err.response.status !== 404) {
        const errorMessage = getErrorMessageByRequest(err);
        notifyError(errorMessage);
      }
    } finally {
      // For better loading experience
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }

  async function getCountries() {
    setLoading(true);

    try {
      const res = await ContriesService.getAll();
      dispatch({ type: SET_COUNTRIES, payload: res.data });

    } catch(err) {
      const errorMessage = getErrorMessageByRequest(err);
      notifyError(errorMessage);

    } finally {
      // For better loading experience
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }

  useEffect(() => {
    clearTimeout(debounceToSearch);

    const timeout = setTimeout(() => {
      if (searchText) searchCountries(searchText);
      else getCountries();
    }, 500);

    if (searchText) {
      setLoading(true);
      setRegion({});
      dispatch({ type: REMOVE_COUNTRIES });
    } else {
      setLoading(false);
    }

    setDebounceToSearch(timeout);
  }, [searchText]);

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    if (region.value) getCountriesByRegion();
  }, [region]);

  return (
    <Page title="Home" description="Welcome">
      <PageWrapper>
        <div className="home__filters">
          <div className="home__filters__search-wrapper">
            <Input
              type="search"
              placeholder="Search for a country..."
              value={searchText}
              onChange={(value) => setSearchText(value)}
            />
          </div>

          <div className="home__filters__region-wrapper">
            <Select
              placeholder="Filter by Region"
              options={regions}
              value={region}
              onOptionSelected={(value) => setRegion(value)}
            />
          </div>
        </div>

        <div className="home__list">
          <ListCountries countries={state.countries} loading={loading} />
        </div>
      </PageWrapper>
    </Page>
  )
}

export default Home;