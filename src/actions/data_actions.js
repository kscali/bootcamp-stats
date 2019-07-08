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

export const getUser = (userId) => dispatch => (
  APIUtil.getUser(userId).then(user => dispatch(receiveUser(user)))
)
