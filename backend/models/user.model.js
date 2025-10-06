import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    totalBalance: {
      type: String,
      default: "0.00",
    },
    btcBalance: {
      type: Map,
      default: { amount: "0.0000", value: "0.00" },
    },
	ethBalance: {
      type: Map,
      default: { amount: "0.0000", value: "0.00" },
    },
	solBalance: {
      type: Map,
      default: { amount: "0.0000", value: "0.00" },
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
