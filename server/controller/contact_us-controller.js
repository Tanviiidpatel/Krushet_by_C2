import Contact from "../model/contact_us-model.js";

const contact_us = async (req,res) => {

    try {
        
        const {username, email, message} = req.body;

        const contactcreated = await Contact.create({ username, email, message });

        console.log(req.body);
        res.status(201).json({msg: "message sent successfully", contactId: contactcreated._id.toString(),});

    } catch (error) {
        
        res.status(500).json("internal server error");

    }

};

const getAllContacts = async (req, res) => {

    try {

      const contacts = await Contact.find();
      res.status(200).json(contacts);

    } catch (error) {

      console.error(error);
      res.status(500).json({ error: "Error retrieving contacts." });

    }
    
};

export default {contact_us, getAllContacts};