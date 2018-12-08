import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const LoginPage = () => (
  <Layout>
    <h1>Login</h1>
    <Link to="/summary/">To Summary</Link>
  </Layout>
);

export default LoginPage;
