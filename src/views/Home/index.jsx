import React, { useState } from 'react';

import Page from '@components/templates/Page';
import Input from '@components/molecules/Input';
import Select from '@components/molecules/Select';

import { 
  PageWrapper,
} from './style';

const Home = () => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState({});

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
      </PageWrapper>
    </Page>
  )
}

export default Home;