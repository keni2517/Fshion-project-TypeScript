import { ObjectId } from "mongoose";

export interface ICart {
  _id?: ObjectId;
  user?: ObjectId;
  productId?: ObjectId;
  quantity?: number;
  isDelete?: boolean;
}

