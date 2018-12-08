import React from 'react';
import Layout from '../components/layout';
import RefugeesInAustraliaImage1 from '../images/2018-01-23 Refugees in Australia-page-001.jpg';
import RefugeesInAustraliaImage2 from '../images/2018-01-23 Refugees in Australia-page-002.jpg';

const RefugeesInAustraliaPage = () => (
  <Layout>
    <h1>Refugees In Australia</h1>
    <img alt='Refugees In Australia Image 1' src={RefugeesInAustraliaImage1} />
    <img alt='Refugees In Australia Image 2' src={RefugeesInAustraliaImage2} />
  </Layout>
);

export default RefugeesInAustraliaPage;
