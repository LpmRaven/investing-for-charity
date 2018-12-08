import React from 'react';
import Layout from '../components/layout';
import PreventativeMentalHealthImage1 from '../images/2018-06-23 Preventative Mental Health INFOGRAPH-page-001.jpg';
import PreventativeMentalHealthImage2 from '../images/2018-06-23 Preventative Mental Health INFOGRAPH-page-002.jpg';

const PreventativeMentalHealthPage = () => (
  <Layout>
    <h1>Preventative Mental Health</h1>
    <img alt='Preventative Mental Health Image 1' src={PreventativeMentalHealthImage1} />
    <img alt='Preventative Mental Health Image 2' src={PreventativeMentalHealthImage2} />
  </Layout>
);

export default PreventativeMentalHealthPage;
