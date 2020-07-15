import * as actionTypes from "./actionTypes";

export function getEmployee() {
  console.log("called");
  return (dispatch) => {
    return dispatch({
      type: actionTypes.GET_EMPLOYEE,
    });
  };
}

export function addEmployee(data) {
  return (dispatch) => {
    return dispatch({
      type: actionTypes.ADD_EMPLOYEE,
      payload: data,
    });
  };
}

export function editEmployee(data) {
  return (dispatch) => {
    return dispatch({
      type: actionTypes.EDIT_EMPLOYEE,
      payload: data,
    });
  };
}

export function deleteEmployee(employeeId) {
  return (dispatch) => {
    return dispatch({
      type: actionTypes.DELETE_EMPLOYEE,
      payload: employeeId,
    });
  };
}
