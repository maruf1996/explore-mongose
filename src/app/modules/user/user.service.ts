import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDb = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload); //User -> class, user -> instance,
  await user.save(); //build in instance methods
  // amra banabo custom instance methods
  console.log(user.fullName());
  return user;
};

export const getUserToDb = async (): Promise<IUser[]> => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDb = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload }, { name: 1, email: 1 });
  return user;
};

export const getAdminUserFromDb = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};
