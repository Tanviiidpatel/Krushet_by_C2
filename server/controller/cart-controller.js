import Cart from "../model/cart-model.js";
import Product from "../model/product-model.js";
import Notification from "../model/notification-model.js";

// Add product to cart
export const addToCart = async (req, res) => {
  try {
    const { consumerId, productId, quantity } = req.body;

    let cart = await Cart.findOne({ consumerId });

    if (!cart) {
      cart = new Cart({ consumerId, products: [{ productId, quantity }] });
    } else {
      const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);

      if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity;
      } else {
        cart.products.push({ productId, quantity });
      }
    }

    await cart.save();
    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error adding to cart", error });
  }
};

// Get consumer's cart
export const getCart = async (req, res) => {
  try {
    const { consumerId } = req.params;
    const cart = await Cart.findOne({ consumerId }).populate("products.productId");

    if (!cart) return res.status(404).json({ message: "Cart is empty" });

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart", error });
  }
};

// Update quantity in cart
export const updateCart = async (req, res) => {
  try {
    const { consumerId, productId, quantity } = req.body;

    let cart = await Cart.findOne({ consumerId });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);

    if (productIndex > -1) {
      cart.products[productIndex].quantity = quantity;

      if (quantity <= 0) {
        cart.products.splice(productIndex, 1);
      }

      await cart.save();
      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating cart", error });
  }
};

// Remove product from cart
export const removeFromCart = async (req, res) => {
  try {
    const { consumerId, productId } = req.body;

    let cart = await Cart.findOne({ consumerId });

    if (!cart) return res.status(404).json({ message: "Cart not found" });

    cart.products = cart.products.filter(p => p.productId.toString() !== productId);

    await cart.save();
    res.status(200).json({ message: "Product removed", cart });
  } catch (error) {
    res.status(500).json({ message: "Error removing product", error });
  }
};

// Clear entire cart
export const clearCart = async (req, res) => {
  try {
    const { consumerId } = req.params;
    await Cart.findOneAndDelete({ consumerId });

    res.status(200).json({ message: "Cart cleared" });
  } catch (error) {
    res.status(500).json({ message: "Error clearing cart", error });
  }
};

export const checkout = async (req, res) => {
  try {
    const { consumerId } = req.body; // The buyer's ID
    const cart = await Cart.findOne({ consumerId }).populate("products.productId");

    if (!cart || cart.products.length === 0) {
      return res.status(400).json({ message: "Cart is empty" });
    }

    // Process each product in the cart
    for (const cartItem of cart.products) {
      const product = await Product.findById(cartItem.productId);

      if (!product || product.status === "sold") {
        return res.status(400).json({ message: `Product ${product.name} is no longer available` });
      }

      // Mark product as sold
      product.status = "sold";
      await product.save();

      // Send notification to the farmer (seller)
      await Notification.create({
        userId: product.farmerId,
        message: `Your product '${product.name}' has been sold! 🎉`,
      });

      // Send notification to the buyer (consumer)
      await Notification.create({
        userId: consumerId,
        message: `Your product '${product.name}' is on the way! 🚚`,
      });
    }

    // Clear cart after checkout
    await Cart.findOneAndDelete({ consumerId });

    // Simulated Payment Success Response
    res.status(200).json({ message: "Payment successful! Notifications sent." });
  } catch (error) {
    res.status(500).json({ message: "Checkout failed", error });
  }
};