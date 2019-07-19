import { connect } from "react-redux";
import {
  appAcademyData,
  hackReactorData,
  blocData,
  thinkfulData,
  codingDojoData,
  flatIronData,
  generalAssemblyData
} from "../../actions/data_actions";
import DataForm from "./DataForm";

const mstp = state => ({
  currentUser: state.session.user
});
const mdtp = dispatch => {
  return {
    submitAaData: data => dispatch(appAcademyData(data)),
    submitHrData: data => dispatch(hackReactorData(data)),
    submitBlocData: data => dispatch(blocData(data)),
    submitThinkfulData: data => dispatch(thinkfulData(data)),
    submitCdData: data => dispatch(codingDojoData(data)),
    submitFiData: data => dispatch(flatIronData(data)),
    submitGaData: data => dispatch(generalAssemblyData(data))
  };
};

export default connect(
  mstp,
  mdtp
)(DataForm);
