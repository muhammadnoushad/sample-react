import * as actionTypes from "./actionTypes";
const initialstate = {
  employees: [
    { id: 1, employeeName: "Noushad", employeeDepartment: "Accounts" },
    { id: 2, employeeName: "Muhammad", employeeDepartment: "Admin" },
  ],
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case actionTypes.GET_EMPLOYEE:
      return {
        ...state,
      };
    case actionTypes.ADD_EMPLOYEE:
      return {
        ...state,
        employees: [...state.employees, action.payload],
      };
    case actionTypes.EDIT_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.map((content, i) =>
          content.id === action.payload.id
            ? {
                ...content,
                employeeName: action.payload.employeeName,
                employeeDepartment: action.payload.employeeDepartment,
              }
            : content
        ),
      };
    case actionTypes.DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
