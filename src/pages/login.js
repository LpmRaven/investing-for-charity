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
    console.log('handle submit')
  }

  render() {
    return (
      <Layout>
           <div className="outerFormContainer">
           <div className="formTitle">
        <h1>Login</h1>
        </div>
        <form onSubmit={this.handleSubmit} class="loginForm">
          <div>
          
          <label>Email:
            <input
              className="formField"
              type="text"
              value={this.state.enauk}
              onChange={this.handleChange}
            />
          </label>
          </div>
          <div>
          <input type="submit" value="Submit" className="submitButton"/>
          </div>
        </form>
        <div className="linkToSummary">
        <Link to="/summary/" >To Summary</Link>
        </div>
        </div>
      </Layout>
    )
  }
}

export default LoginPage
