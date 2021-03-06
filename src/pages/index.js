import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/landing-page-layout';

import '../styles/styles.scss';

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
    </div>
    <Link to="/login/">Login</Link>
  </Layout>
);

export default IndexPage;
