import express from "express";
import { home, getJoin, postJoin, getLogin, postLogin, getQna,postQna } from "../controllers/userController.js";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.route("/qna").get(getQna).post(postQna);



export default rootRouter;  
