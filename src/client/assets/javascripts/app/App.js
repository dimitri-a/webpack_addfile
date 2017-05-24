import React, { PropTypes } from 'react';

import oidc from

const App = (props) => (
  <div className="page-container">
    {React.cloneElement({...props}.children, {...props})}
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired
};

//todo remove
debugger;
// create a user manager instance
export const userManager = new Oidc.UserManager(config);

export default App;
