import { Client, Account, ID } from "appwrite";

import config from "../config";

const client = new Client()
  .setEndpoint(config.appwriteUrl) // Your API Endpoint
  .setProject(config.appwriteProjectId); // Your project ID

const account = new Account(client);

const login = async ({ email, password }) => {
  try {
    return await account.createEmailPasswordSession({ email, password });
  } catch (error) {
    console.error("[login]: ", error);
  }
  return null;
};

const logout = async () => {
  try {
    // await account.deleteSession({ sessionId });
    await account.deleteSessions();
  } catch (error) {
    console.error("[logout]: ", error);
  }
};

const getCurrentUser = async () => {
  try {
    return await account.get();
  } catch (error) {
    console.error("[getCurrentUser]: ", error);
  }
  return null;
};

const createUser = async ({ email, password }) => {
  try {
    const existingUser = await account.get();
    if (existingUser) {
      console.log("[createUser]: User already exists ", existingUser);
      return existingUser;
    }
    return await account.create({
      userId: ID.unique(),
      email,
      password,
    });
  } catch (error) {
    console.error("[createUser]: ", error);
  }
  return null;
};

export { login, logout, getCurrentUser, createUser };
