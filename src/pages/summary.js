import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import withEmail from '../components/withEmail'
import Navbar from '../components/navbar'
import { getDonorsSummary } from '../googleApi'

class SummaryPage extends React.Component {
  state = { summary: undefined }

  componentDidMount() {
    getDonorsSummary().then(response => {
      this.setState({
        summary: response,
      })
    })
  }

  render() {
    const { summary } = this.state
    return (
      <Layout>
        <Navbar />
        <h1>Summary</h1>
        {summary ? (
          <div>{JSON.stringify(summary, null, 2)}</div>
        ) : (
          <div style={{ fontSize: 30 }}>Loading...</div>
        )}
        <Link to="/charities/">Charities</Link>
        <Link to="/allocation/">Allocation form</Link>
      </Layout>
    )
  }
}

export default withEmail(SummaryPage)
