import React from 'react';
import Layout from '../components/layout';
import childSlavery1 from '../images/2016-12-09 Child Slavery INFOGRAPH-page-001.jpg';
import childSlavery2 from '../images/2016-12-09 Child Slavery INFOGRAPH-page-002.jpg';

const childSlavery = () => (
  <Layout>
    <h1>Child Slavery</h1>
    <img alt='under privileged youth 1' src={childSlavery1} />
    <img alt='under privileged youth 2' src={childSlavery2} />
  </Layout>
);

export default childSlavery;
