import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

class LoginPage extends React.Component {
  state = { email: '' }

  handleChange = e => {
    this.setState({ email: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    window.localStorage.setItem('email', this.state.email);
    window.location.href = "/summary";
    console.log('handle submit')
  }

  render() {
    return (
      <Layout>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input
              type="text"
              value={this.state.enauk}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <Link to="/summary/">To Summary</Link>
      </Layout>
    )
  }
}

export default LoginPage
