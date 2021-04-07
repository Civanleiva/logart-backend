import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    orderItem: [
      {
        shirtType: { type: String, required: true },
        shirtColor: { type: String, required: true },
        shirtMaterial: { type: String, required: true },
        shirtSize: { type: String, required: true },
        image: { type: String, required: false },
        email: { type: String, required: true},
      },
    ],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;