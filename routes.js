import { Router } from "express";
import getInfo from "./api/getInfo.js";

let apiRoutes = Router();

apiRoutes.get("/hello", getInfo);

export default apiRoutes;
