import { connect } from "react-redux";
import Profile from "./profile";
import { getUser } from "../../actions/data_actions"

const mstp = state => ({
  currentUser: state.session.user,
  user: state.user.data
});

const mdtp = dispatch => ({
  getUser: userId => dispatch(getUser(userId))
})

export default connect(
  mstp,
  mdtp
)(Profile);
