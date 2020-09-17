import React, { useState } from 'react';

import Page from '@components/templates/Page';
import Input from '@components/molecules/Input';

import { 
  PageWrapper,
} from './style';

const Home = () => {
  const [search, setSearch] = useState('');

  return (
    <Page title="Home" description="Welcome">
      <PageWrapper>
        <div className="home__search-wrapper">
          <Input
            type="search"
            placeholder="Search for a country..."
            value={search}
            onChange={(value) => setSearch(value)}
          />
        </div>
      </PageWrapper>
    </Page>
  )
}

export default Home;