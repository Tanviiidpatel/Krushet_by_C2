import mongoose from "mongoose";
import dotenv from "dotenv";
import Crop from "../model/crop-model.js";

dotenv.config();

const crops = [
    "Wheat", "Rice", "Maize", "Barley", "Soybean", "Sugarcane", "Cotton",
    "Potato", "Tomato", "Onion", "Garlic", "Peanut", "Sunflower", "Mustard",
    "Sesame", "Lentil", "Chickpea", "Pigeon Pea", "Black Gram", "Green Gram",
    "Kidney Bean", "Cowpea", "Millet", "Oat", "Rye", "Sorghum", "Flax", "Tea",
    "Coffee", "Cocoa", "Banana", "Apple", "Mango", "Orange", "Grapes",
    "Pineapple", "Papaya", "Guava", "Strawberry", "Blueberry", "Raspberry",
    "Watermelon", "Cucumber", "Pumpkin", "Carrot", "Radish", "Cabbage",
    "Cauliflower", "Spinach", "Lettuce", "Broccoli", "Eggplant", "Bell Pepper",
    "Chili Pepper", "Coriander", "Mint", "Basil", "Turmeric", "Ginger", "Jute",
    "Tobacco", "Coconut", "Olive", "Almond", "Cashew", "Walnut", "Pistachio",
    "Pear", "Peach", "Plum", "Apricot", "Fig", "Lychee", "Pomegranate",
    "Jackfruit", "Beetroot", "Sweet Potato", "Yam", "Turnip", "Celery",
    "Asparagus", "Zucchini", "Leek", "Brussels Sprouts"
];

const seedCrops = async () => {
    try {

        await Crop.deleteMany();
        await Crop.insertMany(crops.map(name => ({ name })));
        // console.log("Crop Data Seeded!");

    } catch (error) {

        console.error("Error Seeding Data:", error);
        process.exit(1);

    }
};

export default seedCrops;