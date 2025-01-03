import { Request, Response } from "express";
import { ICart } from "../interface/ICart";
import { IUser } from "../interface/IUser";
import CartServices from "../services/cart.services";
const cartService = new CartServices();

// Global Variable
declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}

export const addNewCart = async (req: Request, res: Response) => {
  try {
    let cart = (await cartService.getCart({
      user: req.user?._id,
      productId: req.body.productId,
      isDelete: false,
    })) as ICart;

    if (cart) {
      return res.json({ message: "Cart is already exist" });
    }

    let newCart = (await cartService.addNewCart({
      user: req.user?._id,
      ...req.body,
    })) as ICart;

    res.status(201).json({ cart: newCart, message: "Cart Added" });
  } catch (error) {
    console.log(error);
    res.json({ message: "Internal Server Error" });
  }
};

// export const getAllCarts = async (req: Request, res: Response) => {
//   try {
//     let carts = (await cartService.getAllCarts(
//       req.query,
//       req.user?._id
//     )) as ICart[];

//     if (!carts) {
//       return res.json({ message: "cart is not found" });
//     }

//     res.json(carts);
//   } catch (error) {
//     console.log(error);
//     res.json({ message: "Internal Server Error" });
//   }
// };

// export const updateCart = async (req: Request, res: Response) => {
//   try {
//     const cart = (await cartService.getAllCarts(
//       req.query,
//       req.user?._id
//     )) as ICart[];

//     if (!cart) {
//       return res.json({ message: "Cart is not found" });
//     }

//     const updateCart = (await cartService.updateCart(req.query.cartId as any, {
//       ...req.body,
//     })) as ICart;

//     res.json({ cart: updateCart, message: "Cart is updated...." });
//   } catch (error) {
//     console.log(error);
//     res.json({ message: "Internal Server Error" });
//   }
// };
