import React, { useState, useEffect, useContext } from 'react';
import { toast } from 'react-toastify';

import ContriesService from '@api/services/countries';
import AppContext from '@context/appContext';
import { SET_COUNTRIES } from '@context/consts';

import { getErrorMessageByRequest } from '@utils/errors';

import Input from '@components/molecules/Input';
import Select from '@components/molecules/Select';
import ListCountries from '@components/organisms/ListCountries';
import Page from '@components/templates/Page';

import { 
  PageWrapper,
} from './style';

const Home = () => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState({});

  const [loading, setLoading] = useState(false);

  const {state, dispatch} = useContext(AppContext);

  const notifyError = (msg) => toast.error(msg);

  const regions = [
    {
      label: 'Africa',
      value: 'Africa',
    },
    {
      label: 'America',
      value: 'America',
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
    getCountries();
  }, []);

  return (
    <Page title="Home" description="Welcome">
      <PageWrapper>
        <div className="home__filters">
          <div className="home__filters__search-wrapper">
            <Input
              type="search"
              placeholder="Search for a country..."
              value={search}
              onChange={(value) => setSearch(value)}
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