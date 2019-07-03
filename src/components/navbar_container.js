import { connect } from "react-redux";
import { logout } from "../actions/session_actions";
import Navbar from "./Navbar";

const mapStateToProps = state => ({
  loggedIn: state.session.isAuthenticated,
  currentUser: state.session.user
});

const mdtp = dispatch => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mdtp
)(Navbar);
