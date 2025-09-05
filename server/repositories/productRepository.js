// repositories/productRepository.js
import { db } from "../utils/db.js";
import { ObjectId } from "mongodb";

const collection = db.collection("products");

const findAll = async (query) => {
  return await collection.find(query).limit(10).toArray();
};

const findById = async (id) => {
  return await collection.findOne({ _id: new ObjectId(id) });
};

const create = async (productData) => {
  const result = await collection.insertOne(productData);
  return { _id: result.insertedId, ...productData };
};

const update = async (id, productData) => {
  await collection.updateOne({ _id: new ObjectId(id) }, { $set: productData });
  return { _id: id, ...productData };
};

const deleteOne = async (id) => {
  await collection.deleteOne({ _id: new ObjectId(id) });
  return true;
};

export default { findAll, findById, create, update, delete: deleteOne };
