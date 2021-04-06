import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/order.js";
import { isAuth } from "../utils.js";

const orderRouter = express.Router();

orderRouter.post(
  "/",
  isAuth,
  expressAsyncHandler(async (req, res) => {
    
    const order = new Order({
      orderItem: req.body,
      user: req.user.__id,
    });
    console.log(req.body);
    const createdOrder = await order.save();
    res.status(201).send({ message: "Orden creada", order: createdOrder });
  })
);

export default orderRouter;
