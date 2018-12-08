import React from 'react';
import Layout from '../components/layout';
import UnderPrivilegedYouth1 from '../images/2017-02-07 Underprivileged Youth INFOGRAPH 1.jpg';
import UnderPrivilegedYouth2 from '../images/2017-02-07 Underprivileged Youth INFOGRAPH 2.jpg';

const UnderPrivilegedYouth = () => (
  <Layout>
    <h1>Underprivileged Youth</h1>
    <img alt='under privileged youth 1' src={UnderPrivilegedYouth1} />
    <img alt='under privileged youth 2' src={UnderPrivilegedYouth2} />
  </Layout>
);

export default UnderPrivilegedYouth;
