import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const SummaryPage = () => (
  <Layout>
    <h1>Summary</h1>
    <Link to="/charities/">Charities</Link>
    <Link to="/allocation/">Allocation form</Link>
  </Layout>
);

export default SummaryPage;
