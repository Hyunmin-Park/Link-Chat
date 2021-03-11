import express from "express";
import {
  chat,
  deleteMessage,
  sendImage,
  sendMessage,
  userSearch,
} from "../Controllers/chatController";
import routes from "../routes";

const chatRouter = express.Router();

chatRouter.get(routes.home, chat);
chatRouter.get(routes.sendImage, sendImage);
chatRouter.get(routes.sendMessage, sendMessage);
chatRouter.get(routes.deleteMessage, deleteMessage);
chatRouter.get(routes.userSearch, userSearch);

export default chatRouter;
