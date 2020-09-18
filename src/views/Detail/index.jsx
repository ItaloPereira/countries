import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useParams } from 'react-router-dom';

import ContriesService from '@api/services/countries';
import { getErrorMessageByRequest } from '@utils/errors';

import Page from '@components/templates/Page';
import Icon from '@components/atoms/Icon';

import { 
  PageWrapper,
} from './style';

const Detail = () => {
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);
  const [pageTitle, setPageTitle] = useState('Detail');
  const { code } = useParams();

  console.log(loading);
  console.log(country);

  const notifyError = (msg) => toast.error(msg);

  async function getCountry() {
    setLoading(true);

    try {
      const res = await ContriesService.getCountryByCode(code);
      setCountry(res.data);
      setPageTitle(res.data.name);
    } catch(err) {
      const errorMessage = getErrorMessageByRequest(err);
      notifyError(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCountry();
  }, []);

  return (
    <Page title={pageTitle} description="Detail Page">
      <PageWrapper>
        <Link to="/">
          <div className="detail__back">
            <div className="detail__back__icon-wrapper">
              <Icon name="arrow-left" />
            </div>

            <span className="detail__back__text">Back</span>
          </div>
        </Link>

        <div className="detail__content">
          content
        </div>
      </PageWrapper>
    </Page>
  );
};

export default Detail;
