import React from 'react';
import Layout from '../components/layout';
import GlobalPovertyImage1 from '../images/2018-11-24 Global Poverty INFOGRAPH 1-page-001.jpg';
import GlobalPovertyImage2 from '../images/2018-11-24 Global Poverty INFOGRAPH 2-page-001.jpg';

const GlobalPovertyPage = () => (
  <Layout>
    <h1>Global Poverty</h1>
    <img alt='global poverty page 1' src={GlobalPovertyImage1} />
    <img alt='global poverty page 2' src={GlobalPovertyImage2} />
  </Layout>
);

export default GlobalPovertyPage;
