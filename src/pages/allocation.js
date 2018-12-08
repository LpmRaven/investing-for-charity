import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const AllocationPage = () => (
  <Layout>
    <h1>Charity Allocation Form</h1>
    <Link to="/summary/">Back to Summary</Link>
  </Layout>
);

export default AllocationPage;
