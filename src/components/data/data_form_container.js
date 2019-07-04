import { connect } from "react-redux";
import { appAcademyData } from "../../actions/data_actions";
import DataForm from "./DataForm";

const mstp = state => ({
  currentUser: state.session.user
});
const mdtp = dispatch => {
  return {
    submit: data => dispatch(appAcademyData(data))
  };
};

export default connect(
  mstp,
  mdtp
)(DataForm);
