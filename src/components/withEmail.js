import React from 'react';
import { Link } from 'gatsby';

export default Comp => (props) => {
  const email = window.localStorage.getItem('email');
  return email ? <Comp {...props} /> : <Link to="/login" />
}