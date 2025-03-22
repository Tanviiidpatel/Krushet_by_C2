import Investment from "../model/investment-model.js";

export const farmerRequest = async (req, res) => {
        try {
          const { farmerId, amount, purpose, description, returnCash, returnCrop, cropKilos, returnPercentage, belowMarketPrice } = req.body;
          
          const investment = new Investment({
            farmerId, amount, purpose, description, returnCash, returnCrop, cropKilos, returnPercentage, belowMarketPrice
          });
      
          await investment.save();
          res.status(201).json(investment);
        } catch (error) {
          res.status(500).json({ error: "Error creating investment request" });
        }
      }


export const acceptRequest = async (req, res) => {
    try {
      const { investorId } = req.body;
  
      const investment = await Investment.findById(req.params.id);
      if (!investment) return res.status(404).json({ error: "Investment not found" });
  
      // Assign investor and update status
      investment.investorId = investorId;
      investment.status = "Accepted";
  
      // Add notification
      investment.notifications.push({ message: "Investment accepted by an investor", timestamp: new Date() });
  
      await investment.save();
      res.status(200).json(investment);
    } catch (error) {
      res.status(500).json({ error: "Error updating investment request" });
    }
}

export const getAllRequest = async (req, res) => {
    try {
      const investments = await Investment.find({ status: "Pending" }).populate("farmerId");
      res.status(200).json(investments);
    } catch (error) {
      res.status(500).json({ error: "Error fetching investment requests" });
    }
  }

  export const send_Notification = async (req, res) => {
    try {
      const investments = await Investment.find({ 
        $or: [{ farmerId: req.params.userId }, { investorId: req.params.userId }] 
      });
  
      const notifications = investments.flatMap((inv) => inv.notifications);
      res.status(200).json(notifications);
    } catch (error) {
      res.status(500).json({ error: "Error fetching notifications" });
    }
  }
  







