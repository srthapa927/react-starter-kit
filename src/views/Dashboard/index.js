import React from 'react';
import { connect } from 'react-redux';
import loginActions from '@src/actions/login';

function Dashboard({ username = 'John Doe', logoutRequest }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-4 col-md-offset-4">
          <div className="account-wall dashboard-container">
            <div className="dashboard">
              <h1 className="text-center login-title">Hello {username}</h1>
              <button
                className="btn btn-lg btn-primary btn-block"
                onClick={logoutRequest}
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  const {
    login: {
      user: { username },
    },
  } = state;
  return {
    username,
  };
};

const mapDispatchToProps = (dispatch) => ({
  logoutRequest: (payload) => dispatch(loginActions.logoutRequest(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);