import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
  username: string;
  password: string;
  isValidPassword(password: string): Promise<boolean>;
}

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);

  this.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function (password: string) {
  const user = this as IUser;
  return bcrypt.compare(password, user.password);
};

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
