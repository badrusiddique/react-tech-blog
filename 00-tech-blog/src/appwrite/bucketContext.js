import { Client, Storage, ID } from "appwrite";

import config from "../config";

const bucketId = config.appwriteBucketId;

const client = new Client()
  .setEndpoint(config.appwriteUrl) // Your API Endpoint
  .setProject(config.appwriteProjectId); // Your project ID

const storage = new Storage(client);

const downloadFile = async (fileId) => {
  try {
    if (!fileId) {
      throw new Error("fileId is required");
    }

    return await storage.getFileDownload({ bucketId, fileId });
  } catch (error) {
    console.error("[downloadFile]: ", error);
  }
  return null;
};

const previewFile = (fileId) => {
  try {
    if (!fileId) {
      throw new Error("fileId is required");
    }

    return storage.getFilePreview({ bucketId, fileId });
  } catch (error) {
    console.error("[previewFile]: ", error);
  }
  return null;
};

const createFile = async (file) => {
  try {
    if (!file) {
      throw new Error("file is required");
    }

    return await storage.createfile({
      bucketId,
      file,
      fileId: ID.unique(),
    });
  } catch (error) {
    console.error("[createFile]: ", error);
  }
  return null;
};

const deleteFile = async (fileId) => {
  try {
    if (!fileId) {
      throw new Error("fileId is required");
    }

    return await storage.deleteFile({
      bucketId,
      fileId,
    });
  } catch (error) {
    console.error("[deleteFile]: ", error);
  }
  return null;
};

export { downloadFile, previewFile, createFile, deleteFile };
