import { Client, TablesDB, ID, Query } from "appwrite";

import config from "../config";

const databaseId = config.appwriteDatabaseId;
const tableId = config.appwriteCollectionId;

const client = new Client()
  .setEndpoint(config.appwriteUrl) // Your API Endpoint
  .setProject(config.appwriteProjectId); // Your project ID

const tablesDB = new TablesDB(client);

const getDocuments = async () => {
  try {
    return await tablesDB.listRows({
      databaseId,
      tableId,
      queries: [], // optional
      // transactionId: '<TRANSACTION_ID>', // optional
      total: false, // optional
    });
  } catch (error) {
    console.error("[getDocuments]: ", error);
  }
  return null;
};

const getDocumentById = async (rowId) => {
  try {
    if (!rowId) {
      throw new Error("rowId is required");
    }

    return await tablesDB.getRow({
      databaseId,
      tableId,
      rowId,
    });
  } catch (error) {
    console.error("[getDocumentById]: ", error);
  }
  return null;
};

const getDocumentsByStatus = async (status = "active") => {
  try {
    return await tablesDB.listRows({
      databaseId,
      tableId,
      queries: [Query.equal("status", status)],
      // transactionId: '<TRANSACTION_ID>', // optional
      total: false, // optional
    });
  } catch (error) {
    console.error("[getDocumentsByStatus]: ", error);
  }
  return null;
};

const createDocument = async ({ data }) => {
  try {
    const { title, content, slug, featureImage, status, createdBy } =
      data || {};

    if (!title || !content || !status || !createdBy) {
      throw new Error("title, content, status, and createdBy are required");
    }

    return await tablesDB.createRow({
      databaseId,
      tableId,
      rowId: ID.unique(),
      data: {
        title,
        content: `${slug}: ${content}`,
        featureImage,
        status,
        createdBy,
      },
      // permissions: [Permission.read(Role.any())], // optional
      // transactionId: "<TRANSACTION_ID>", // optional
    });
  } catch (error) {
    console.error("[createDocument]: ", error);
  }
  return null;
};

const updateDocument = async ({ rowId, data }) => {
  try {
    if (!rowId) {
      throw new Error("rowId is required");
    }

    const { title, content, slug, featureImage, status } = data || {};

    if (!title || !content || !status) {
      throw new Error("title, content, and status are required");
    }

    return await tablesDB.updateRow({
      databaseId,
      tableId,
      rowId,
      data: {
        title,
        content: `${slug}: ${content}`,
        featureImage,
        status,
      },
    });
  } catch (error) {
    console.error("[updateDocument]: ", error);
  }
  return null;
};

const deleteDocument = async (rowId) => {
  try {
    if (!rowId) {
      throw new Error("rowId is required");
    }

    await tablesDB.deleteRow({
      databaseId,
      tableId,
      rowId,
    });
  } catch (error) {
    console.error("[deleteDocument]: ", error);
  }
};

export {
  getDocuments,
  getDocumentById,
  getDocumentsByStatus,
  createDocument,
  updateDocument,
  deleteDocument,
};
