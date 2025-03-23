import PreOrder from "../model/pre_order-model.js";

// Create a pre-order
export const createPreOrder = async (req, res) => {
  try {
    const preOrder = new PreOrder(req.body);
    await preOrder.save();
    res.status(201).json(preOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all pre-orders
export const getAllPreOrders = async (req, res) => {
  try {
    const preOrders = await PreOrder.find();
    res.json(preOrders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific pre-order by ID
export const getPreOrderById = async (req, res) => {
  try {
    const preOrder = await PreOrder.findById(req.params.id);
    if (!preOrder) return res.status(404).json({ message: "Pre-order not found" });
    res.json(preOrder);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get pre-orders by farmer ID
export const getPreOrdersByFarmer = async (req, res) => {
  try {
    const { farmerId } = req.params; // Get farmerId from URL params

    // Fetch pre-orders for the given farmer
    const preOrders = await PreOrder.find({ farmerId }).populate("consumerId", "name email"); // Populate consumer details

    if (!preOrders.length) {
      return res.status(404).json({ message: "No pre-orders found for this farmer" });
    }

    res.status(200).json(preOrders);
  } catch (error) {
    res.status(500).json({ error: "Error fetching pre-orders" });
  }
};

// Delete a pre-order
export const deletePreOrder = async (req, res) => {
  try {
    await PreOrder.findByIdAndDelete(req.params.id);
    res.json({ message: "Pre-order deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

