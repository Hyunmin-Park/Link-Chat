// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";

// User
const USERS = "/users";
const USER_SEARCH = "/user-search";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/:id/edit-profile";
const CHANGE_PASSWORD = "/:id/change-password";

// Chat
const CHAT = "/chat";
const SEND_MESSAGE = "/send-message";
const DELETE_MESSAGE = "/:id/delete";
const SEND_IMAGE = "/:id/image";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  chat: CHAT,
  userSearch: USER_SEARCH,
  sendMessage: SEND_MESSAGE,
  deleteMessage: DELETE_MESSAGE,
  sendImage: SEND_IMAGE,
};

export default routes;
