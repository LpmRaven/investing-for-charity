import React from 'react'

export default Comp => {
  return class WithEmail extends React.Component {
    state = { email: undefined }

    componentDidMount() {
      const email = window.localStorage.getItem('email')
      if (!email) {
        window.location.href = '/login'
        return
      }

      this.setState({
        email,
      })
    }

    render() {
      return this.state.email ? <Comp {...this.props} /> : null
    }
  }
}
