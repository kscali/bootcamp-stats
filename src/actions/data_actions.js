import * as APIUtil from "../util/data_api_util";

export const RECEIVE_AA_DATA = "RECEIVE_AA_DATA";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveAAData = () => ({
  type: RECEIVE_AA_DATA
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const appAcademyData = user => dispatch => {
  return APIUtil.appAcademyData(user).then(
    //   () => dispatch(receiveAAData()),
    //   err => dispatch(receiveErrors(err.response.data))
    // );
    res => res.data.user._id
  );
};

export const hackReactorData = user => dispatch => {
  return APIUtil.hackReactorData(user).then(
    //   () => dispatch(receiveAAData()),
    //   err => dispatch(receiveErrors(err.response.data))
    // );
    res => res.data.user._id
  );
};

export const blocData = user => dispatch => {
  return APIUtil.blocData(user).then(
    //   () => dispatch(receiveAAData()),
    //   err => dispatch(receiveErrors(err.response.data))
    // );
    res => res.data.user._id
  );
};

export const flatIronData = user => dispatch => {
  return APIUtil.flatIronData(user).then(
    //   () => dispatch(receiveAAData()),
    //   err => dispatch(receiveErrors(err.response.data))
    // );
    res => res.data.user._id
  );
};

export const generalAssemblyData = user => dispatch => {
  return APIUtil.generalAssemblyData(user).then(
    //   () => dispatch(receiveAAData()),
    //   err => dispatch(receiveErrors(err.response.data))
    // );
    res => res.data.user._id
  );
};

export const thinkfulData = user => dispatch => {
  return APIUtil.thinkfulData(user).then(
    //   () => dispatch(receiveAAData()),
    //   err => dispatch(receiveErrors(err.response.data))
    // );
    res => res.data.user._id
  );
};

export const codingDojoData = user => dispatch => {
  return APIUtil.codingDojoData(user).then(
    //   () => dispatch(receiveAAData()),
    //   err => dispatch(receiveErrors(err.response.data))
    // );
    res => res.data.user._id
  );
};

export const getUser = userId => dispatch =>
  APIUtil.getUser(userId).then(user => dispatch(receiveUser(user)));
