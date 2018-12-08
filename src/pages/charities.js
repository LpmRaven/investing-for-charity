import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const CharitiesPage = () => (
  <Layout>
    <h1>Charities</h1>
    <Link to="/summary/">Back to Summary</Link>
  </Layout>
);

export default CharitiesPage;
