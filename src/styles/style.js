import React from 'react';
import PropTypes from 'prop-types';

export default {
  p: {
    margin: '3vh 0',
    lineHeight: '1.4',
  },
};

export const Li = ({ children, ...rest }) => (
  <li
    style={{
      paddingLeft: '18px',
      textIndent: '-15px',
      margin: '0.5vh 0',
      listStyle: 'none',
    }}
    {...rest}
  >
    <span style={{ paddingRight: '7px' }}>&ndash;</span>
    {children}
  </li>
);