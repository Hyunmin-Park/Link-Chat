export const home = (req, res) => {
  res.render("home", { pageTitle: "Home" });
};

export const chat = (req, res) => {
  res.render("chat", { pageTitle: "Chat" });
};

export const sendMessage = (req, res) => {
  res.render("sendMessage", { pageTitle: "Send Message" });
};

export const deleteMessage = (req, res) => {
  res.render("deleteMessage", { pageTitle: "Delete Message" });
};

export const sendImage = (req, res) => {
  res.render("sendImage", { pageTitle: "Send Image" });
};

export const userSearch = (req, res) => {
  res.render("userSearch", { pageTitle: "User Search" });
};
