function userReducer(state, action) {
  if (action.type === "Add_User") {
    return [...state, action.data];
  } else if (action.type === "Remove_User") {
    return (state = []);
  }
  return state;
}

export default userReducer;
