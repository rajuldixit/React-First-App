export const SAVE_USERS = "SAVE_USERS";

export const saveUsers = (users) => {
  return {
    type: SAVE_USERS,
    data: users
  };
};
