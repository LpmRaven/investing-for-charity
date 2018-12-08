import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';

const CharitiesPage = () => (
  <Layout>
    <h1>Charities</h1>
    <div class="horizontal-links">
    <Link to="/globalPoverty/">Global Poverty</Link>
    <Link to="/preventativeMentalHealth/">Preventative Mental Health</Link>
    <Link to="/refugeesInAustralia/">Refugees In Australia</Link>
    <Link to="/childSlavery/">Child Slavery</Link>
    <Link to="/underprivilegedYouth/">Underprivileged Youth</Link>
    <Link to="/womenDomesticViolence/">Women Domestic Violence</Link>
    <Link to="/summary/">Back to Summary</Link>
    </div>
  </Layout>
);

export default CharitiesPage;
